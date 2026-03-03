import { query } from "../../../lib/db";
import crypto from "node:crypto";

const ALLOWED_DEPTS = ["general", "partnerships", "careers", "support", "press"];

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, department } = body;
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }
    const dept = department && ALLOWED_DEPTS.includes(String(department).toLowerCase())
      ? String(department).toLowerCase()
      : "general";

    const id = crypto.randomUUID();
    const sql = `
      INSERT INTO "ContactSubmission" ("id", "name", "email", "subject", "message", "department", "createdAt")
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING "id"
    `;
    const params = [
      id,
      String(name).trim(),
      String(email).trim().toLowerCase(),
      subject ? String(subject).trim() : null,
      String(message).trim(),
      dept
    ];

    const result = await query(sql, params);
    const submission = result.rows[0];

    return Response.json({ ok: true, id: submission.id });
  } catch (e) {
    console.error("[api/contact]", e);
    return Response.json(
      { error: "Failed to save message", details: e.message },
      { status: 500 }
    );
  }
}

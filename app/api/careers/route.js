import { query } from "../../../lib/db";
import crypto from "node:crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, role, message, location, portfolio, resumeUrl } = body;
    if (!name || !email || !role) {
      return Response.json(
        { error: "Missing required fields: name, email, role" },
        { status: 400 }
      );
    }

    const extra = {};
    if (location) extra.location = String(location).trim();
    if (portfolio) extra.portfolio = String(portfolio).trim();
    if (resumeUrl) extra.resumeUrl = String(resumeUrl).trim();

    const id = crypto.randomUUID();
    const sql = `
      INSERT INTO "JobApplication" ("id", "name", "email", "role", "message", "resume", "extra", "createdAt")
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW())
      RETURNING "id"
    `;
    const params = [
      id,
      String(name).trim(),
      String(email).trim().toLowerCase(),
      String(role).trim(),
      message ? String(message).trim() : null,
      resumeUrl ? String(resumeUrl).trim() : null,
      Object.keys(extra).length > 0 ? JSON.stringify(extra) : null,
    ];

    const result = await query(sql, params);
    const application = result.rows[0];

    return Response.json({ ok: true, id: application.id });
  } catch (e) {
    console.error("[api/careers]", e);
    return Response.json(
      { error: "Failed to save application", details: e.message },
      { status: 500 }
    );
  }
}

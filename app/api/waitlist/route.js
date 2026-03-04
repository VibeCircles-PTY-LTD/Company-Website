import { query } from "../../../lib/db";
import crypto from "node:crypto";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, city, role, context } = body;
    if (!name || !email || !role) {
      return Response.json(
        { error: "Missing required fields: name, email, role" },
        { status: 400 }
      );
    }

    const id = crypto.randomUUID();
    const sql = `
      INSERT INTO "WaitlistSignup" ("id", "name", "email", "city", "role", "context", "createdAt")
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING "id"
    `;
    const params = [
      id,
      String(name).trim(),
      String(email).trim().toLowerCase(),
      city ? String(city).trim() : null,
      String(role).trim(),
      context ? String(context).trim() : null,
    ];

    console.log("[api/waitlist] Executing SQL:", sql);
    console.log("[api/waitlist] With params:", params);

    const result = await query(sql, params);
    const signup = result.rows[0];

    return Response.json({ ok: true, id: signup.id });
  } catch (e) {
    console.error("[api/waitlist]", e);
    return Response.json(
      { error: "Failed to save signup", details: e.message },
      { status: 500 }
    );
  }
}

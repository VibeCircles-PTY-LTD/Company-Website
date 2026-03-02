import { getPrisma } from "../../../lib/db";

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
    const prisma = getPrisma();
    if (!prisma) {
      return Response.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }
    const submission = await prisma.contactSubmission.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        subject: subject ? String(subject).trim() : null,
        message: String(message).trim(),
        department: dept,
      },
    });
    return Response.json({ ok: true, id: submission.id });
  } catch (e) {
    console.error("[api/contact]", e);
    return Response.json(
      { error: "Failed to save message" },
      { status: 500 }
    );
  }
}

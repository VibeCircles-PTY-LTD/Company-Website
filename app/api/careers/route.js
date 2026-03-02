import { getPrisma } from "../../../lib/db";

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
    const prisma = getPrisma();
    if (!prisma) {
      return Response.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }
    const extra = {};
    if (location) extra.location = String(location).trim();
    if (portfolio) extra.portfolio = String(portfolio).trim();
    if (resumeUrl) extra.resumeUrl = String(resumeUrl).trim();
    const application = await prisma.jobApplication.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        role: String(role).trim(),
        message: message ? String(message).trim() : null,
        resume: resumeUrl ? String(resumeUrl).trim() : null,
        extra: Object.keys(extra).length > 0 ? extra : null,
      },
    });
    return Response.json({ ok: true, id: application.id });
  } catch (e) {
    console.error("[api/careers]", e);
    return Response.json(
      { error: "Failed to save application" },
      { status: 500 }
    );
  }
}

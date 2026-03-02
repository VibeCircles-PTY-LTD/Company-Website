import { getPrisma } from "../../../lib/db";

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
    const prisma = getPrisma();
    if (!prisma) {
      return Response.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }
    const signup = await prisma.waitlistSignup.create({
      data: {
        name: String(name).trim(),
        email: String(email).trim().toLowerCase(),
        city: city ? String(city).trim() : null,
        role: String(role).trim(),
        context: context ? String(context).trim() : null,
      },
    });
    return Response.json({ ok: true, id: signup.id });
  } catch (e) {
    console.error("[api/waitlist]", e);
    return Response.json(
      { error: "Failed to save signup" },
      { status: 500 }
    );
  }
}

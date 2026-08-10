import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, organization, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nombre, correo y mensaje son requeridos" },
        { status: 400 }
      );
    }

    const submission = await db.contactSubmission.create({
      data: {
        name,
        email,
        organization: organization || null,
        message,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud recibida correctamente",
      id: submission.id,
    });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const submissions = await db.contactSubmission.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(submissions);
  } catch {
    return NextResponse.json(
      { error: "Error al obtener las solicitudes" },
      { status: 500 }
    );
  }
}

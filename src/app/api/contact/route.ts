import { NextResponse } from "next/server";

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

    // In production, this would send an email, save to database, or integrate with a CRM
    console.log("Contact form submission:", {
      name,
      email,
      organization: organization || "N/A",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Solicitud recibida correctamente",
    });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}

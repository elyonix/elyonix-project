import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { nombre, negocio, cargo, facturacion, email, problema } = body;

    // Basic validation
    if (!nombre || !negocio || !cargo || !facturacion || !email || !problema) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Forward to webhook if configured (Make.com, n8n, Zapier, etc.)
    const webhookUrl =
      process.env.FORM_WEBHOOK_URL ||
      "https://n8n-n8n.q8g4ei.easypanel.host/webhook-test/6747c691-6134-4c4c-b8cb-55d8a9679db6";
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre,
          negocio,
          cargo,
          facturacion,
          email,
          problema,
          timestamp: new Date().toISOString(),
          source: "elyonixai.com",
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

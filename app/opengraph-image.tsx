import { ImageResponse } from "next/og";

export const alt = "Elyonix AI — Más Ventas, Menos Caos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A0A0A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -60,
            left: 100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(20, 50, 245, 0.18)",
            filter: "blur(90px)",
          }}
        />
        {/* Glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: 100,
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "rgba(74, 95, 255, 0.12)",
            filter: "blur(80px)",
          }}
        />

        {/* Blue top bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "linear-gradient(90deg, #1432F5, #4A5FFF, #1432F5)",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(20, 50, 245, 0.15)",
            border: "1px solid rgba(20, 50, 245, 0.35)",
            borderRadius: 9999,
            padding: "10px 24px",
            marginBottom: 44,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#1432F5",
            }}
          />
          <span style={{ color: "#4A5FFF", fontSize: 20, fontWeight: 600 }}>
            elyonixai.com
          </span>
        </div>

        {/* Main headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            color: "#ffffff",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 960,
          }}
        >
          Automatización para tu negocio
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 54,
            fontWeight: 900,
            color: "#1432F5",
            textAlign: "center",
            marginBottom: 44,
          }}
        >
          Más Ventas, Menos Caos
        </div>

        {/* Subtext */}
        <div
          style={{
            fontSize: 22,
            color: "#6B7280",
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.5,
          }}
        >
          Diagnóstico estratégico de IA y automatización · Resultados en 7-10 días
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 5,
            background: "linear-gradient(90deg, #1432F5, #4A5FFF, #1432F5)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}

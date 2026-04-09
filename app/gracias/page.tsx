import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solicitud recibida — Elyonix AI",
  description: "Tu solicitud de diagnóstico fue recibida. Te contactamos en menos de 24 horas.",
  robots: { index: false, follow: false },
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-12">
          <div className="w-20 h-20 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-8 text-4xl">
            ✅
          </div>
          <h1 className="text-4xl font-black text-white mb-4">¡Solicitud recibida!</h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Gracias por tu interés en el Elyonix Scan™. Revisaremos tu información y te
            contactaremos en las próximas{" "}
            <span className="text-white font-semibold">24 horas</span> para confirmar tu
            cupo y agendar la primera sesión.
          </p>
          <div className="bg-white/4 border border-white/8 rounded-xl p-6 mb-8 text-left space-y-3">
            <p className="text-white font-semibold text-sm">¿Qué pasa ahora?</p>
            <div className="flex items-start gap-3">
              <span className="text-[#1432F5] font-bold flex-shrink-0">1.</span>
              <p className="text-gray-400 text-sm">Revisamos tu información y verificamos que el Scan es el fit correcto para tu negocio.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#1432F5] font-bold flex-shrink-0">2.</span>
              <p className="text-gray-400 text-sm">Te contactamos en menos de 24 horas para confirmar tu cupo y agendar la primera sesión.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#1432F5] font-bold flex-shrink-0">3.</span>
              <p className="text-gray-400 text-sm">En 7-10 días tienes tu diagnóstico completo con roadmap de crecimiento listo.</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mb-6">
            ¿Tienes alguna pregunta urgente?{" "}
            <a href="mailto:contacto@elyonixai.com" className="text-[#4A5FFF] hover:underline">
              contacto@elyonixai.com
            </a>
          </p>
          <Link
            href="/"
            className="inline-block text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

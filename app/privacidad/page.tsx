import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad — Elyonix AI",
  description: "Política de privacidad de Elyonix AI. Información sobre el tratamiento de datos personales.",
};

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <div className="border-b border-white/10 py-4 px-6">
        <Link href="/" className="text-[#4A5FFF] hover:text-[#1432F5] text-sm font-medium transition-colors">
          ← Volver a Elyonix AI
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Política de Privacidad</h1>
        <p className="text-gray-400 text-sm mb-12">Última actualización: marzo 2025</p>

        <div className="prose prose-invert max-w-none space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Responsable del tratamiento</h2>
            <p>
              El responsable del tratamiento de tus datos personales es <strong className="text-white">Elyonix AI</strong>, con sede en LATAM y operación 100% remota. Contacto:{" "}
              <a href="mailto:contacto@elyonixai.com" className="text-[#4A5FFF] hover:underline">contacto@elyonixai.com</a>{" "}
              o a través del formulario en{" "}
              <a href="https://www.elyonixai.com" className="text-[#4A5FFF] hover:underline">www.elyonixai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Datos que recopilamos</h2>
            <p>A través del formulario de diagnóstico recopilamos:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-gray-400">
              <li>Nombre completo</li>
              <li>Nombre del negocio y cargo</li>
              <li>Facturación mensual aproximada</li>
              <li>Dirección de email</li>
              <li>Descripción del problema principal del negocio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Finalidad del tratamiento</h2>
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-gray-400">
              <li>Responder a tu solicitud de diagnóstico</li>
              <li>Agendar y coordinar el Elyonix Scan™</li>
              <li>Enviarte información relevante relacionada con tu solicitud</li>
              <li>Mejorar nuestros servicios</li>
            </ul>
            <p className="mt-3">
              No vendemos, cedemos ni compartimos tus datos con terceros para fines comerciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Base legal</h2>
            <p>
              El tratamiento se basa en el consentimiento que otorgas al completar y enviar el formulario, y en la ejecución del servicio solicitado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Conservación de datos</h2>
            <p>
              Conservamos tus datos durante el tiempo necesario para prestarte el servicio y, posteriormente, durante el período legalmente exigible. Si en 6 meses no hemos iniciado una relación comercial, procederemos a eliminar tus datos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Tus derechos</h2>
            <p>Tienes derecho a:</p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-gray-400">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos incorrectos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento</li>
              <li>Retirar el consentimiento en cualquier momento</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, contáctanos en{" "}
              <a href="mailto:contacto@elyonixai.com" className="text-[#4A5FFF] hover:underline">contacto@elyonixai.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos contra el acceso no autorizado, la pérdida o la destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. La fecha de última actualización siempre estará indicada al inicio de este documento.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

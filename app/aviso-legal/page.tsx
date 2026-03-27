import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal — Elyonix AI",
  description: "Aviso legal de Elyonix AI.",
};

export default function AvisoLegal() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="border-b border-white/10 py-4 px-6">
        <Link href="/" className="text-[#4A5FFF] hover:text-[#1432F5] text-sm font-medium transition-colors">
          ← Volver a Elyonix AI
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Aviso Legal</h1>
        <p className="text-gray-400 text-sm mb-12">Última actualización: marzo 2025</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Identificación</h2>
            <p>
              El presente sitio web <strong className="text-white">www.elyonixai.com</strong> es propiedad de <strong className="text-white">Elyonix AI</strong>, firma de crecimiento B2B fundada por <strong className="text-white">Andrés Marín</strong>, con operación remota en LATAM.
            </p>
            <div className="bg-white/4 border border-white/8 rounded-xl p-5 mt-4 space-y-1 text-sm text-gray-400">
              <p>Web: www.elyonixai.com</p>
              <p>Email: contacto@elyonixai.com</p>
              <p>Instagram: @elyonix.co</p>
              <p>Operación: 100% remota — LATAM</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Objeto y condiciones de uso</h2>
            <p>
              Este sitio web tiene como objeto presentar los servicios de Elyonix AI y facilitar el contacto con potenciales clientes mediante un formulario de calificación. El acceso al sitio es libre y gratuito.
            </p>
            <p className="mt-3">
              El uso del sitio implica la aceptación de las presentes condiciones. Elyonix AI se reserva el derecho de modificarlas sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Propiedad intelectual</h2>
            <p>
              Todos los contenidos de este sitio — textos, imágenes, diseños, logotipos, nombres comerciales y marcas — son propiedad de Elyonix AI o de sus respectivos titulares. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Responsabilidad</h2>
            <p>
              Elyonix AI no se hace responsable de los daños derivados del uso incorrecto del sitio o de la información contenida en él. Los resultados mostrados (casos de estudio, proyecciones) son orientativos y pueden variar según el contexto de cada negocio.
            </p>
            <p className="mt-3">
              El caso de estudio de Clínica Dental Sonríe+ es un caso hipotético pero realista basado en el perfil de cliente ideal de Elyonix. Se presenta como referencia ilustrativa, no como garantía de resultados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Legislación aplicable</h2>
            <p>
              Este aviso legal se rige por la legislación colombiana aplicable en materia de comercio electrónico, protección de datos (Ley 1581 de 2012) y normativa vigente en los países de operación de Elyonix AI.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contacto</h2>
            <p>
              Para cualquier consulta legal contáctanos en{" "}
              <a href="mailto:contacto@elyonixai.com" className="text-[#4A5FFF] hover:underline">
                contacto@elyonixai.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

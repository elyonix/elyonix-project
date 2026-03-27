import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies — Elyonix AI",
  description: "Política de cookies de Elyonix AI.",
};

export default function Cookies() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <div className="border-b border-white/10 py-4 px-6">
        <Link href="/" className="text-[#4A5FFF] hover:text-[#1432F5] text-sm font-medium transition-colors">
          ← Volver a Elyonix AI
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-4">Política de Cookies</h1>
        <p className="text-gray-400 text-sm mb-12">Última actualización: marzo 2025</p>

        <div className="space-y-10 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white mb-3">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que los sitios web instalan en tu dispositivo cuando los visitas. Sirven para recordar tus preferencias, analizar el tráfico y mejorar la experiencia del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cookies que utilizamos</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-3 pr-6 text-white font-semibold">Tipo</th>
                    <th className="text-left py-3 pr-6 text-white font-semibold">Finalidad</th>
                    <th className="text-left py-3 text-white font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { type: "Técnicas", purpose: "Funcionamiento básico del sitio", duration: "Sesión" },
                    { type: "Analíticas", purpose: "Estadísticas de uso anónimas (Google Analytics / Plausible)", duration: "2 años" },
                    { type: "Preferencias", purpose: "Recordar configuraciones del usuario", duration: "1 año" },
                  ].map((row) => (
                    <tr key={row.type} className="text-gray-400">
                      <td className="py-3 pr-6">{row.type}</td>
                      <td className="py-3 pr-6">{row.purpose}</td>
                      <td className="py-3">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cookies de terceros</h2>
            <p>
              Podemos usar herramientas de análisis de tráfico como Google Analytics o Plausible. Estas herramientas recopilan información de forma anónima sobre cómo los usuarios interactúan con el sitio. No recopilan datos personales identificables sin tu consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Cómo gestionar las cookies</h2>
            <p>
              Puedes configurar tu navegador para rechazar cookies o para que te avise cuando se vayan a instalar. Ten en cuenta que desactivar ciertas cookies puede afectar el funcionamiento del sitio.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-3 text-gray-400">
              <li>Chrome: Configuración → Privacidad y seguridad → Cookies</li>
              <li>Firefox: Preferencias → Privacidad y seguridad</li>
              <li>Safari: Preferencias → Privacidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">Actualizaciones</h2>
            <p>
              Esta política puede actualizarse para reflejar cambios en las herramientas que utilizamos. Cualquier cambio relevante será notificado en el sitio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

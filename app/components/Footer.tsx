import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Final CTA before footer */}
      <section className="bg-[#1432F5] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span className="text-sm text-white font-medium">Solo 3 cupos por mes — Reserva el tuyo</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Cada semana sin resolver esto sigues perdiendo dinero
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            ¿Cuánto te cuesta esperar? Un mes más de leads perdidos, horas quemadas y sin visibilidad. El diagnóstico cuesta $500. El costo de no hacerlo es mucho mayor.
          </p>
          <a
            href="#formulario"
            className="inline-block bg-white text-[#1432F5] hover:bg-blue-50 font-black px-10 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Solicitar Diagnóstico Ahora
          </a>
          <p className="text-blue-200 text-sm mt-4">Sin contratos · Sin riesgos · Respondemos en 24h</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Image
                src="/images/logo-dark.png"
                alt="Elyonix AI"
                width={140}
                height={40}
                className="h-9 w-auto mb-4"
              />
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Firma de crecimiento B2B que diagnostica e implementa sistemas de ventas, automatización e inteligencia artificial para negocios que quieren vender más sin depender de más personas.
              </p>
              <p className="text-[#1432F5] font-bold text-lg">"Más Ventas, Menos Caos"</p>
              {/* Social */}
              <div className="flex items-center gap-3 mt-5">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/elyonix.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="Instagram Elyonix"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/andres-felipe-marin-garcia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all"
                  aria-label="LinkedIn Andrés Marín"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Servicios</h4>
              <ul className="space-y-3">
                {[
                  { label: "Elyonix Scan™", href: "#solucion" },
                  { label: "Elyonix Core™", href: "#inversion" },
                  { label: "Caso de estudio", href: "#caso" },
                  { label: "Solicitar diagnóstico", href: "#formulario" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal + Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">Legal y contacto</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/privacidad" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Política de Cookies
                  </Link>
                </li>
                <li>
                  <Link href="/aviso-legal" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Aviso Legal
                  </Link>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contacto</h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>
                    <a href="https://www.elyonixai.com" className="hover:text-white transition-colors">
                      www.elyonixai.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:contacto@elyonixai.com"
                      className="hover:text-white transition-colors"
                    >
                      contacto@elyonixai.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.instagram.com/elyonix.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      @elyonix.co
                    </a>
                  </p>
                  <p>Fundador: Andrés Marín</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} Elyonix AI. Todos los derechos reservados.
            </p>
            <p className="text-gray-600 text-xs">
              Elyonix AI — Firma de crecimiento B2B · LATAM
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

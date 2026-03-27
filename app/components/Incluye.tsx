const deliverables = [
  "Informe de diagnóstico completo de las 4 áreas clave",
  "Mapa de procesos real con puntos de fuga marcados",
  "Cuellos de botella cuantificados (tiempo y dinero)",
  "Oportunidades concretas de IA priorizadas por impacto",
  "Evaluación de riesgos operativos",
  "Análisis del stack tecnológico actual",
  "Roadmap visual por fases (impacto vs esfuerzo)",
  "Reunión de entrega 1:1",
];

export default function Incluye() {
  return (
    <section id="incluye" className="bg-[#F5F5F7] section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1432F5]/10 border border-[#1432F5]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-[#1432F5] font-medium">Entregables concretos</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-6">
              Lo que recibes en el{" "}
              <span className="text-[#1432F5]">Elyonix Scan™</span>
            </h2>
            <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
              No un PDF genérico. No una presentación con frases bonitas. Un diagnóstico real con números reales de tu negocio — y un plan accionable listo para ejecutar.
            </p>
            <a
              href="#formulario"
              className="inline-block bg-[#1432F5] hover:bg-[#4A5FFF] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Quiero mi diagnóstico
            </a>
          </div>

          {/* Right — checklist */}
          <div className="card-light p-8">
            <div className="space-y-4">
              {deliverables.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#10B981]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-[#374151] font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-[#6B7280]">
                <svg className="w-5 h-5 text-[#1432F5] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Solo necesitas 2-3 horas en 10 días. Nosotros hacemos el trabajo pesado.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

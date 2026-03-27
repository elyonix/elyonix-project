const steps = [
  {
    number: "01",
    title: "Confirmas el Scan",
    description: "Pago y agendamos la primera sesión.",
    tag: "Hoy",
    icon: "✅",
  },
  {
    number: "02",
    title: "Diagnóstico en 7-10 días",
    description: "Radiografiamos tu negocio sin interrumpir tu operación.",
    tag: "7-10 días",
    icon: "🔍",
  },
  {
    number: "03",
    title: "Reunión de entrega 1:1",
    description: "Te presentamos todo. Tú decides qué sigue.",
    tag: "Al final",
    icon: "📋",
  },
];

export default function PasosGarantia() {
  return (
    <>
      {/* Próximos pasos */}
      <section className="bg-[#0A0A0A] section-pad relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#1432F5]/8 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#1432F5]/15 border border-[#1432F5]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm text-[#4A5FFF] font-medium">Así funciona</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              3 pasos simples
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-[#1432F5]/40 to-transparent z-0 -translate-y-1/2" style={{ width: "calc(100% - 2rem)" }} />
                )}
                <div className="card-dark p-8 relative z-10 h-full">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-[#1432F5] flex items-center justify-center text-white font-black text-lg">
                      {step.number}
                    </div>
                    <span className="bg-[#1432F5]/15 text-[#4A5FFF] text-xs font-bold px-3 py-1 rounded-full border border-[#1432F5]/20">
                      {step.tag}
                    </span>
                  </div>
                  <span className="text-3xl mb-4 block">{step.icon}</span>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#formulario"
              className="inline-block bg-[#1432F5] hover:bg-[#4A5FFF] text-white font-bold px-8 py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-blue-500/30"
            >
              Empezar ahora →
            </a>
          </div>
        </div>
      </section>

      {/* Garantía */}
      <section className="bg-[#E8EBFE] section-pad">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-[#1432F5]/15 border border-[#1432F5]/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-sm text-[#1432F5] font-medium">Garantía</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-[#0A0A0A] mb-6">
            Tu riesgo es mínimo
          </h2>
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-[#1432F5]/10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center text-3xl">
                🔒
              </div>
            </div>
            <p className="text-xl md:text-2xl font-bold text-[#0A0A0A] leading-relaxed mb-6">
              "Si decides implementar el sistema (Elyonix Core™) en los siguientes 30 días, el{" "}
              <span className="text-[#1432F5]">100% de tu inversión en el Scan se descuenta.</span>"
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-[#0A0A0A]">Scan descontable al 100%</p>
                <p className="text-xs text-[#6B7280] mt-1">Si avanzas al Core</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-[#0A0A0A]">Core pago 50/50</p>
                <p className="text-xs text-[#6B7280] mt-1">La mitad solo cuando funcione</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-[#0A0A0A]">Sin contratos eternos</p>
                <p className="text-xs text-[#6B7280] mt-1">Por proyecto, con entregables claros</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

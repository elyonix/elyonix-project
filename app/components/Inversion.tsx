export default function Inversion() {
  return (
    <section id="inversion" className="bg-[#F5F5F7] section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1432F5]/10 border border-[#1432F5]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#1432F5] font-medium">Inversión</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-4">
            Precio claro, sin letra pequeña
          </h2>
          <p className="text-lg text-[#6B7280] max-w-xl mx-auto">
            Sin contratos eternos. Sin sorpresas. Sin humo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {/* Scan — featured */}
          <div className="lg:col-span-2 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1432F5] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide z-10">
              Primera fase · Diagnóstico inicial
            </div>
            <div className="card-light p-8 md:p-10 border-2 border-[#1432F5]/30">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-1">Elyonix Scan™</h3>
                  <p className="text-[#6B7280]">Diagnóstico estratégico completo de tu negocio</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-4xl font-black text-[#0A0A0A]">$1,000</span>
                    <span className="text-[#6B7280]">USD</span>
                  </div>
                  <p className="text-xs text-[#6B7280] mt-1">Pago 100% al inicio</p>
                </div>
              </div>

              {/* Anchor pain */}
              <div className="bg-[#E53E3E]/8 border border-[#E53E3E]/20 rounded-xl p-5 mb-8">
                <p className="text-[#374151] text-sm leading-relaxed">
                  <span className="font-semibold text-[#E53E3E]">¿Cuánto te cuesta NO hacer esto?</span>{" "}
                  Si pierdes $2,000/mes en seguimientos fallidos, en 3 meses habrás perdido $6,000. El Scan cuesta una fracción de eso.
                </p>
              </div>

              {/* Scarcity */}
              <div className="bg-[#D97706]/8 border border-[#D97706]/20 rounded-xl p-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-[#D97706] text-xl">⚡</span>
                  <div>
                    <p className="text-sm font-bold text-[#0A0A0A]">Máximo 3 diagnósticos por mes</p>
                    <p className="text-xs text-[#6B7280] mt-0.5">Para asegurar calidad en cada entrega. Propuesta válida por 15 días.</p>
                  </div>
                </div>
              </div>

              <a
                href="#formulario"
                className="block w-full bg-[#1432F5] hover:bg-[#4A5FFF] text-white text-center font-bold py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 text-lg"
              >
                Reservar mi cupo
              </a>
              <p className="text-xs text-[#6B7280] text-center mt-3">Solo 3 cupos por mes · Respondemos en 24 horas</p>
            </div>
          </div>

          {/* Core — next step */}
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0A0A0A] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide z-10 whitespace-nowrap">
              Segunda fase · Implementación
            </div>
            <div className="card-light p-7 border-2 border-[#0A0A0A]/20">
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">Elyonix Core™</h3>
            <p className="text-sm text-[#6B7280] mb-6">El siguiente paso después del Scan</p>

            <div className="space-y-4 mb-6">
              <p className="text-sm text-[#374151] leading-relaxed">
                Una vez entregado el diagnóstico, diseñamos juntos el sistema de implementación. El roadmap del Scan define exactamente qué se construye, en qué orden y con qué impacto esperado.
              </p>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#374151]">CRM y sistema de ventas</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#374151]">Automatizaciones de operación</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#374151]">IA aplicada al negocio</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-[#374151]">Capacitación + 30 días de soporte</span>
              </div>
            </div>

            <div className="bg-[#10B981]/8 border border-[#10B981]/20 rounded-xl p-4 mb-4">
              <p className="text-xs text-[#374151] leading-relaxed">
                <span className="font-bold text-[#10B981]">Bonificación:</span>{" "}
                Si contratas el Core en 30 días, el 100% del Scan se descuenta. El diagnóstico se convierte en inversión.
              </p>
            </div>
            <p className="text-xs text-[#6B7280]">Pago: 50% al inicio · 50% al entregar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

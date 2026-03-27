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
              Producto de entrada — Foco principal
            </div>
            <div className="card-light p-8 md:p-10 border-2 border-[#1432F5]/30">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <h3 className="text-2xl font-black text-[#0A0A0A] mb-1">Elyonix Scan™</h3>
                  <p className="text-[#6B7280]">Diagnóstico estratégico completo de tu negocio</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-2 justify-end">
                    <span className="text-4xl font-black text-[#0A0A0A]">$500</span>
                    <span className="text-[#6B7280]">USD</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1 justify-end">
                    <span className="text-sm text-[#6B7280] line-through">$1,000 USD</span>
                    <span className="bg-[#E53E3E]/10 text-[#E53E3E] text-xs font-bold px-2 py-0.5 rounded">Precio lanzamiento</span>
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

              {/* Payment methods */}
              <div className="mb-8">
                <p className="text-sm text-[#6B7280] font-medium mb-3">Métodos de pago</p>
                <div className="flex flex-wrap gap-2">
                  {["Nequi", "Daviplata", "Transferencia bancaria", "PayPal"].map((method) => (
                    <span key={method} className="bg-[#E8EBFE] text-[#1432F5] text-xs font-semibold px-3 py-1 rounded-full">
                      {method}
                    </span>
                  ))}
                </div>
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
                Reservar mi cupo — $500 USD
              </a>
              <p className="text-xs text-[#6B7280] text-center mt-3">Solo 3 cupos por mes · Respondemos en 24 horas</p>
            </div>
          </div>

          {/* Core — secondary mention */}
          <div className="card-light p-7 opacity-90">
            <h3 className="text-lg font-bold text-[#0A0A0A] mb-1">Elyonix Core™</h3>
            <p className="text-sm text-[#6B7280] mb-6">Implementación del sistema de crecimiento</p>

            <div className="space-y-3 mb-6">
              {[
                { tier: "Esencial", price: "Desde $500 USD", desc: "1-2 automatizaciones + CRM" },
                { tier: "Completa", price: "Desde $1,000 USD", desc: "3-5 flujos + integraciones + Ads", featured: true },
                { tier: "Avanzada", price: "Desde $2,000 USD", desc: "Sistema multi-área + IA avanzada" },
              ].map((plan) => (
                <div
                  key={plan.tier}
                  className={`p-4 rounded-xl border ${plan.featured ? "border-[#1432F5]/30 bg-[#E8EBFE]" : "border-gray-200"}`}
                >
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="font-bold text-[#0A0A0A] text-sm">{plan.tier}</span>
                    {plan.featured && <span className="text-xs bg-[#1432F5] text-white px-2 py-0.5 rounded-full">Más contratado</span>}
                  </div>
                  <p className="text-[#1432F5] font-bold text-sm">{plan.price}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{plan.desc}</p>
                </div>
              ))}
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
    </section>
  );
}

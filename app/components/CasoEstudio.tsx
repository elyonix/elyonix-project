const antes = [
  "25 solicitudes/semana pero perdían 8-10 pacientes por respuesta tardía (4-8 horas)",
  "Recordatorios manuales consumían 2h/día",
  "Datos en Excel sin respaldo",
  "Sin métricas de ningún tipo",
];

const detectado = [
  { value: "$4,800/mes", label: "en ingresos perdidos por falta de seguimiento" },
  { value: "$600/mes", label: "en tiempo desperdiciado en recordatorios manuales" },
  { value: "Cero", label: "visibilidad de métricas del negocio" },
  { value: "Riesgo alto", label: "una persona sabía todo el proceso" },
];

const resultados = [
  { value: "-80%", label: "pacientes perdidos (de 10/sem a 2/sem)", color: "#10B981" },
  { value: "+$3,840", label: "ingresos recuperados al mes", color: "#10B981" },
  { value: "2h/día", label: "liberadas al equipo", color: "#10B981" },
  { value: "-40%", label: "reducción de no-shows", color: "#10B981" },
];

export default function CasoEstudio() {
  return (
    <section id="caso" className="bg-[#0A0A0A] section-pad relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1432F5]/8 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1432F5]/15 border border-[#1432F5]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#4A5FFF] font-medium">Caso de estudio</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Clínica Dental Sonríe+
          </h2>
          <p className="text-gray-400 text-lg">Medellín, Colombia · 4 dentistas · $15,000 USD/mes</p>
        </div>

        {/* ROI highlight */}
        <div className="bg-gradient-to-r from-[#10B981]/10 to-[#1432F5]/10 border border-[#10B981]/20 rounded-2xl p-6 md:p-8 mb-12 text-center">
          <p className="text-gray-400 text-sm mb-2">Inversión total (Scan + Core)</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
            <div>
              <p className="text-4xl md:text-5xl font-black text-white">Scan + Core</p>
              <p className="text-gray-400 text-sm mt-1">inversión total</p>
            </div>
            <div className="text-[#10B981] text-3xl font-black">→</div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#10B981]">$3,840</p>
              <p className="text-gray-400 text-sm mt-1">recuperados en mes 1</p>
            </div>
            <div className="text-[#10B981] text-3xl font-black">→</div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-[#10B981]">12 días</p>
              <p className="text-gray-400 text-sm mt-1">para recuperar la inversión</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Antes */}
          <div className="card-dark p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#E53E3E]/20 border border-[#E53E3E]/30 flex items-center justify-center text-sm">✗</span>
              <h3 className="text-lg font-bold text-white">Antes del Scan</h3>
            </div>
            <ul className="space-y-3">
              {antes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                  <span className="text-[#E53E3E] mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Lo que detectó */}
          <div className="card-dark p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#1432F5]/20 border border-[#1432F5]/30 flex items-center justify-center text-sm">🔍</span>
              <h3 className="text-lg font-bold text-white">Lo que detectó el Scan</h3>
            </div>
            <div className="space-y-4">
              {detectado.map((item) => (
                <div key={item.label} className="border-l-2 border-[#1432F5]/40 pl-4">
                  <p className="text-[#4A5FFF] font-bold text-lg">{item.value}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Resultados */}
          <div className="card-dark p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-8 rounded-full bg-[#10B981]/20 border border-[#10B981]/30 flex items-center justify-center text-sm">✓</span>
              <h3 className="text-lg font-bold text-white">Resultados a 30 días</h3>
            </div>
            <div className="space-y-4">
              {resultados.map((item) => (
                <div key={item.label} className="border-l-2 border-[#10B981]/40 pl-4">
                  <p className="text-[#10B981] font-bold text-lg">{item.value}</p>
                  <p className="text-gray-400 text-sm mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What was implemented */}
        <div className="mt-10 bg-white/4 border border-white/8 rounded-2xl p-8">
          <h4 className="text-white font-bold text-lg mb-5">Lo que se implementó en el Core</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "CRM HubSpot con pipeline de pacientes",
              "Auto-respuesta WhatsApp en menos de 1 minuto",
              "Seguimiento automático a 24h",
              "Recordatorios de cita automáticos",
              "Dashboard de métricas",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-300">
                <svg className="w-4 h-4 text-[#10B981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-6 italic">
            * Caso hipotético pero realista, basado en el perfil de cliente ideal de Elyonix.
          </p>
        </div>

        <div className="text-center mt-12">
          <a
            href="#formulario"
            className="inline-block bg-[#1432F5] hover:bg-[#4A5FFF] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Quiero resultados como estos →
          </a>
        </div>
      </div>
    </section>
  );
}

const areas = [
  {
    number: "01",
    icon: "📊",
    title: "Auditoría de las 4 áreas clave",
    description:
      "Marketing, ventas, operaciones y administración. Identificamos dónde se pierde dinero, tiempo y dónde hay fricción.",
  },
  {
    number: "02",
    icon: "🤖",
    title: "Detección de oportunidades de IA",
    description:
      "Qué procesos se pueden automatizar o potenciar con IA, con impacto directo en ingresos o reducción de costos.",
  },
  {
    number: "03",
    icon: "🛡",
    title: "Evaluación de riesgos operativos",
    description:
      "Datos sin proteger, dependencias críticas, herramientas desconectadas que amenazan la continuidad del negocio.",
  },
  {
    number: "04",
    icon: "🗺",
    title: "Roadmap de crecimiento",
    description:
      "Plan visual con fases priorizadas por impacto económico vs esfuerzo. Sabes exactamente qué hacer, en qué orden y por qué.",
  },
];

const timeline = [
  { days: "Días 1-3", label: "Entrevistas y acceso", icon: "🤝" },
  { days: "Días 4-7", label: "Análisis profundo", icon: "🔍" },
  { days: "Días 8-10", label: "Roadmap y entrega", icon: "📋" },
];

export default function Solucion() {
  return (
    <section id="solucion" className="bg-[#0A0A0A] section-pad relative overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#1432F5]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1432F5]/15 border border-[#1432F5]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#4A5FFF] font-medium">La solución</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
            Elyonix Scan™{" "}
            <span className="text-[#1432F5]">— Diagnóstico estratégico</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            En 7-10 días analizamos las 4 áreas clave de tu negocio y te entregamos un plan claro de qué hacer, en qué orden y por qué.
          </p>
        </div>

        {/* 4 areas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {areas.map((area) => (
            <div key={area.number} className="card-dark p-8 flex gap-5">
              <div className="flex-shrink-0">
                <span className="text-3xl font-black text-[#1432F5]/30 leading-none">{area.number}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{area.icon}</span>
                  <h3 className="text-lg font-bold text-white">{area.title}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-r from-[#1432F5]/10 via-[#1432F5]/5 to-transparent border border-[#1432F5]/20 rounded-2xl p-8 md:p-10">
          <h3 className="text-xl font-bold text-white mb-8 text-center">
            Timeline: <span className="text-[#1432F5]">7-10 días</span>
          </h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-0">
            {timeline.map((step, index) => (
              <div key={step.days} className="flex md:flex-col items-center gap-4 md:gap-0 md:text-center flex-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1432F5]/20 border border-[#1432F5]/40 text-2xl flex-shrink-0">
                  {step.icon}
                </div>
                <div className="md:mt-4">
                  <p className="text-[#4A5FFF] font-bold text-sm">{step.days}</p>
                  <p className="text-white font-semibold mt-1">{step.label}</p>
                </div>
                {index < timeline.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-[#1432F5]/30 mx-4 self-center" style={{ marginTop: "-20px" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

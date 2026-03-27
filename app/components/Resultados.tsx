const outcomes = [
  {
    icon: "🎯",
    title: "Claridad total",
    description: "Sabes exactamente dónde se pierde dinero en tu negocio — con números, no suposiciones.",
  },
  {
    icon: "📋",
    title: "Plan accionable",
    description: "Un roadmap priorizado por impacto económico. Sin ambigüedad: qué hacer primero y por qué.",
  },
  {
    icon: "📊",
    title: "Visibilidad de datos",
    description: "Por primera vez tienes una radiografía real de tu operación: métricas, cuellos de botella y oportunidades.",
  },
  {
    icon: "🛡",
    title: "Riesgos identificados",
    description: "Conoces las vulnerabilidades antes de que exploten. Dependencias críticas, datos sin respaldo, herramientas rotas.",
  },
  {
    icon: "⚡",
    title: "Decisiones más rápidas",
    description: "Con información clara, dejas de operar por intuición y empiezas a tomar decisiones basadas en evidencia.",
  },
  {
    icon: "💰",
    title: "ROI desde el día 1",
    description: "Si implementas el Core, el Scan se descuenta completo. El diagnóstico no es un costo — es una inversión.",
  },
];

export default function Resultados() {
  return (
    <section className="bg-[#0A0A0A] section-pad relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-[#1432F5]/8 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#10B981]/15 border border-[#10B981]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#10B981] font-medium">Lo que cambia</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4">
            Qué cambia después del{" "}
            <span className="text-[#1432F5]">Scan</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Antes de terminar la reunión de entrega, ya tienes más claridad sobre tu negocio de la que tenías en el último año.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((item) => (
            <div key={item.title} className="card-dark p-7">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

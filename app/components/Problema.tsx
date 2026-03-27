const problems = [
  {
    icon: "💸",
    color: "#E53E3E",
    bgColor: "rgba(229, 62, 62, 0.1)",
    borderColor: "rgba(229, 62, 62, 0.2)",
    title: "Ingresos que se escapan",
    description:
      "Leads que nadie contesta a tiempo, seguimientos que no se hacen, clientes que se van sin que sepas por qué.",
    example:
      "Un negocio con 10 leads diarios que pierde 3 por falta de seguimiento, a $200 ticket promedio, deja $18,000/mes sobre la mesa.",
  },
  {
    icon: "🔥",
    color: "#D97706",
    bgColor: "rgba(217, 119, 6, 0.1)",
    borderColor: "rgba(217, 119, 6, 0.2)",
    title: "Tiempo que se quema",
    description:
      "El equipo dedica horas a tareas que una máquina haría en segundos — copiar datos, enviar recordatorios, armar reportes.",
    example:
      "3 personas × 2h/día × $10/h = $1,800/mes en tareas eliminables.",
  },
  {
    icon: "⚠️",
    color: "#D97706",
    bgColor: "rgba(217, 119, 6, 0.1)",
    borderColor: "rgba(217, 119, 6, 0.2)",
    title: "Riesgos que explotan",
    description:
      "Datos sin respaldo, un solo empleado que sabe todo, herramientas desconectadas. Un fallo crítico puede costar meses de operación.",
    example:
      "Si esa persona clave se va, el negocio pierde procesos, clientes y tiempo irrecuperable.",
  },
];

const quotes = [
  "Siento que pierdo clientes pero no sé por qué",
  "Mi equipo vive apagando incendios",
  "Tenemos un CRM pero nadie lo usa",
  "No tengo tiempo para ver números",
  "Si me enfermo una semana, el negocio se para",
  "He probado herramientas pero nada funciona junto",
];

export default function Problema() {
  return (
    <section className="bg-[#F5F5F7] section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#E53E3E]/10 border border-[#E53E3E]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#E53E3E] font-medium">El problema real</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-4">
            La mayoría de negocios pierden entre{" "}
            <span className="text-[#E53E3E]">20% y 40%</span>{" "}
            de sus ventas posibles
          </h2>
          <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
            Porque operan con procesos manuales, herramientas desconectadas y sin visibilidad real. No es falta de esfuerzo — es falta de sistema.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="card-light p-8"
              style={{ borderTop: `4px solid ${problem.color}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: problem.bgColor, border: `1px solid ${problem.borderColor}` }}
              >
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-3">{problem.title}</h3>
              <p className="text-[#374151] mb-4 leading-relaxed">{problem.description}</p>
              <div className="bg-[#F5F5F7] rounded-lg p-4 border-l-4" style={{ borderColor: problem.color }}>
                <p className="text-sm text-[#6B7280] italic">{problem.example}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Voice of customer quotes */}
        <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12">
          <p className="text-center text-gray-400 text-sm font-medium uppercase tracking-widest mb-8">
            ¿Te suena familiar?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quotes.map((quote) => (
              <div
                key={quote}
                className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="text-[#E53E3E] mt-0.5 text-lg leading-none">"</span>
                <p className="text-gray-300 text-sm leading-relaxed">{quote}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-gray-400 mb-6 text-lg">
              Si dijiste sí a alguna de estas, tu negocio tiene fugas. <span className="text-white font-semibold">Nosotros las cerramos.</span>
            </p>
            <a
              href="#formulario"
              className="inline-block bg-[#1432F5] hover:bg-[#4A5FFF] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Quiero saber dónde pierdo dinero
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const yes = [
  "Tienes un negocio con 3-50 empleados que ya genera ingresos",
  "Sientes que pierdes clientes por falta de seguimiento",
  "Tu equipo dedica horas a tareas que podrían automatizarse",
  "Quieres crecer pero cada cliente nuevo es más carga",
  "Has probado herramientas o agencias sin resultado claro",
];

const no = [
  "Buscas un community manager o manejo de redes",
  "Tu negocio aún no tiene flujo de clientes",
  "No estás dispuesto a invertir en mejorar tu operación",
  "Quieres resultados sin hacer cambios en tus procesos",
];

export default function EsParaTi() {
  return (
    <section className="bg-[#F5F5F7] section-pad">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#1432F5]/10 border border-[#1432F5]/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-sm text-[#1432F5] font-medium">Perfil del cliente</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight">
            ¿Es para ti?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sí */}
          <div className="card-light p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A]">Sí es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {yes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#374151] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* No */}
          <div className="card-light p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#E53E3E]/15 border border-[#E53E3E]/30 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#E53E3E]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0A0A0A]">No es para ti si...</h3>
            </div>
            <ul className="space-y-4">
              {no.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#E53E3E] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[#374151] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#formulario"
            className="inline-block bg-[#1432F5] hover:bg-[#4A5FFF] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25"
          >
            Solicitar Diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}

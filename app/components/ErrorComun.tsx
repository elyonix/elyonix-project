export default function ErrorComun() {
  return (
    <section className="bg-[#0A0A0A] section-pad relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#1432F5]/8 blur-[100px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="inline-flex items-center gap-2 bg-[#D97706]/15 border border-[#D97706]/30 rounded-full px-4 py-1.5 mb-8">
          <span className="text-sm text-[#D97706] font-medium">El error más común</span>
        </div>
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug mb-8">
          "La mayoría de negocios intentan resolver sus problemas comprando{" "}
          <span className="text-[#D97706]">herramientas al azar</span> — un CRM aquí, una automatización allá — sin haber diagnosticado primero qué necesitan realmente."
        </blockquote>
        <p className="text-xl text-gray-400 leading-relaxed">
          El resultado:{" "}
          <span className="text-[#E53E3E] font-semibold">más gasto, más herramientas, el mismo caos.</span>
        </p>
        <div className="mt-10 bg-[#1432F5]/10 border border-[#1432F5]/20 rounded-2xl px-8 py-6">
          <p className="text-lg text-white font-medium">
            El <span className="text-[#1432F5] font-bold">Elyonix Scan™</span> existe para que no cometas ese error.
          </p>
          <p className="text-gray-400 mt-2">
            Primero diagnosticamos. Después implementamos. Siempre.
          </p>
        </div>
      </div>
    </section>
  );
}

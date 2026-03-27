"use client";
import { useState, FormEvent } from "react";

type FormData = {
  nombre: string;
  negocio: string;
  cargo: string;
  facturacion: string;
  email: string;
  problema: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const facturacionOptions = [
  { value: "", label: "Selecciona tu facturación mensual" },
  { value: "menos-5k", label: "Menos de $5,000 USD/mes" },
  { value: "5k-20k", label: "$5,000 – $20,000 USD/mes" },
  { value: "20k-50k", label: "$20,000 – $50,000 USD/mes" },
  { value: "50k-200k", label: "$50,000 – $200,000 USD/mes" },
  { value: "mas-200k", label: "Más de $200,000 USD/mes" },
];

export default function Formulario() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    negocio: "",
    cargo: "",
    facturacion: "",
    email: "",
    problema: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.negocio.trim()) newErrors.negocio = "El nombre del negocio es obligatorio";
    if (!formData.cargo.trim()) newErrors.cargo = "El cargo es obligatorio";
    if (!formData.facturacion) newErrors.facturacion = "Selecciona tu facturación";
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email válido";
    }
    if (!formData.problema.trim()) newErrors.problema = "Cuéntanos tu problema principal";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/diagnostico", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error del servidor");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/5 border ${
      errors[field] ? "border-[#E53E3E]" : "border-white/15"
    } rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-[#1432F5] focus:ring-1 focus:ring-[#1432F5] transition-colors duration-200 text-sm`;

  if (status === "success") {
    return (
      <section id="formulario" className="bg-[#0A0A0A] section-pad">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="card-dark p-12">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/15 border border-[#10B981]/30 flex items-center justify-center mx-auto mb-6 text-3xl">
              ✅
            </div>
            <h2 className="text-3xl font-black text-white mb-4">¡Solicitud recibida!</h2>
            <p className="text-gray-400 text-lg mb-6">
              Gracias por tu interés en el Elyonix Scan™. Revisaremos tu información y te contactaremos en las próximas{" "}
              <span className="text-white font-semibold">24 horas</span>.
            </p>
            <p className="text-gray-500 text-sm">
              ¿Tienes alguna pregunta urgente?{" "}
              <a href="mailto:contacto@elyonixai.com" className="text-[#4A5FFF] hover:underline">
                contacto@elyonixai.com
              </a>
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="bg-[#0A0A0A] section-pad relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-[#1432F5]/10 blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — copy */}
          <div className="lg:sticky lg:top-24">
            <div className="inline-flex items-center gap-2 bg-[#E53E3E]/15 border border-[#E53E3E]/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E53E3E] animate-pulse" />
              <span className="text-sm text-[#E53E3E] font-medium">Solo 3 cupos disponibles este mes</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Solicita tu <span className="text-[#1432F5]">Diagnóstico</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-8">
              Completa el formulario y te contactamos en menos de 24 horas para confirmar tu cupo y agendar la primera sesión.
            </p>

            {/* Mini FAQ */}
            <div className="space-y-4">
              {[
                { q: "¿Cuánto tiempo necesito?", a: "Solo 2-3 horas tuyas en 10 días. Nosotros hacemos el trabajo pesado." },
                { q: "¿Qué pasa después del diagnóstico?", a: "Te presentamos todo en una reunión 1:1. Tú decides qué sigue — sin presión." },
                { q: "¿Qué pasa si no me convence?", a: "Si avanzas al Core en 30 días, el Scan se descuenta al 100%. Si no, te quedas con el plan." },
              ].map((faq) => (
                <div key={faq.q} className="border-l-2 border-[#1432F5]/30 pl-4">
                  <p className="text-white font-semibold text-sm mb-1">{faq.q}</p>
                  <p className="text-gray-500 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
            >

              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  className={inputClass("nombre")}
                />
                {errors.nombre && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.nombre}</p>}
              </div>

              {/* Negocio */}
              <div>
                <label htmlFor="negocio" className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre del negocio <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  value={formData.negocio}
                  onChange={handleChange}
                  placeholder="Ej: Clínica Dental Sonríe+"
                  className={inputClass("negocio")}
                />
                {errors.negocio && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.negocio}</p>}
              </div>

              {/* Cargo */}
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-300 mb-2">
                  Cargo / Rol <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="cargo"
                  name="cargo"
                  type="text"
                  value={formData.cargo}
                  onChange={handleChange}
                  placeholder="Ej: CEO, Fundador, Gerente General"
                  className={inputClass("cargo")}
                />
                {errors.cargo && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.cargo}</p>}
              </div>

              {/* Facturación */}
              <div>
                <label htmlFor="facturacion" className="block text-sm font-medium text-gray-300 mb-2">
                  Facturación mensual aproximada <span className="text-[#E53E3E]">*</span>
                </label>
                <select
                  id="facturacion"
                  name="facturacion"
                  value={formData.facturacion}
                  onChange={handleChange}
                  className={`${inputClass("facturacion")} cursor-pointer`}
                >
                  {facturacionOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-[#1a1a1a] text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>
                {errors.facturacion && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.facturacion}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email <span className="text-[#E53E3E]">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@empresa.com"
                  className={inputClass("email")}
                />
                {errors.email && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.email}</p>}
              </div>

              {/* Problema */}
              <div>
                <label htmlFor="problema" className="block text-sm font-medium text-gray-300 mb-2">
                  ¿Cuál es el problema más grande que sientes en tu negocio hoy? <span className="text-[#E53E3E]">*</span>
                </label>
                <textarea
                  id="problema"
                  name="problema"
                  rows={4}
                  value={formData.problema}
                  onChange={handleChange}
                  placeholder="Cuéntanos con tus propias palabras. Ej: Perdemos muchos leads porque no damos respuesta rápida y no sabemos cuántos clientes se nos van..."
                  className={`${inputClass("problema")} resize-none`}
                />
                {errors.problema && <p className="mt-1.5 text-xs text-[#E53E3E]">{errors.problema}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-[#1432F5] hover:bg-[#4A5FFF] disabled:opacity-70 text-white font-bold py-4 rounded-xl text-lg transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Solicitar Diagnóstico"
                )}
              </button>

              {status === "error" && (
                <p className="text-[#E53E3E] text-sm text-center">
                  Hubo un error al enviar. Por favor escríbenos a{" "}
                  <a href="mailto:contacto@elyonixai.com" className="underline">
                    contacto@elyonixai.com
                  </a>
                </p>
              )}

              <p className="text-xs text-gray-500 text-center leading-relaxed">
                Máximo 3 diagnósticos por mes. Respondemos en 24 horas.{" "}
                <a href="/privacidad" className="underline hover:text-gray-300">Política de Privacidad.</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookies-accepted")) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    window.dispatchEvent(new Event("cookies-accepted"));
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookies-accepted", "false");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-[#111111] border border-white/10 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-2xl">
        <p className="text-sm text-gray-400 flex-1 leading-relaxed">
          Usamos cookies de análisis (Google Analytics) para mejorar la experiencia.{" "}
          <a href="/privacidad" className="text-[#4A5FFF] hover:underline">
            Política de Privacidad
          </a>
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-white/10 rounded-lg transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-semibold bg-[#1432F5] hover:bg-[#4A5FFF] text-white rounded-lg transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}

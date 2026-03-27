import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import ErrorComun from "./components/ErrorComun";
import Solucion from "./components/Solucion";
import Incluye from "./components/Incluye";
import Resultados from "./components/Resultados";
import EsParaTi from "./components/EsParaTi";
import CasoEstudio from "./components/CasoEstudio";
import Inversion from "./components/Inversion";
import PasosGarantia from "./components/PasosGarantia";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <ErrorComun />
        <Solucion />
        <Incluye />
        <Resultados />
        <EsParaTi />
        <CasoEstudio />
        <Inversion />
        <PasosGarantia />
        <Formulario />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

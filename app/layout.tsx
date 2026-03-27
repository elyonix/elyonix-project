import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elyonix AI — Más Ventas, Menos Caos",
  description: "Ayudamos a negocios a dejar de perder clientes y tiempo con sistemas de IA y automatización que se pagan solos en menos de 90 días.",
  keywords: "automatización, inteligencia artificial, sistemas de ventas, CRM, IA para negocios, PYMES, Elyonix, diagnóstico empresarial",
  authors: [{ name: "Andrés Marín", url: "https://www.elyonixai.com" }],
  creator: "Elyonix AI",
  publisher: "Elyonix AI",
  metadataBase: new URL("https://www.elyonixai.com"),
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.elyonixai.com",
    title: "Elyonix AI — Más Ventas, Menos Caos",
    description: "Encontramos dónde tu negocio pierde dinero, tiempo y clientes — y construimos el sistema de IA y automatización que lo resuelve. En 30 días.",
    siteName: "Elyonix AI",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Elyonix AI — Sistemas de crecimiento B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elyonix AI — Más Ventas, Menos Caos",
    description: "Sistemas de IA y automatización para negocios que quieren vender más sin depender de más personas.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        {children}
      </body>
    </html>
  );
}

"use client";
import Script from "next/script";
import { useEffect, useState } from "react";

const GA_ID = "G-T6952ZK5C7";

export default function GoogleAnalytics() {
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    setAccepted(localStorage.getItem("cookies-accepted") === "true");
    const handler = () =>
      setAccepted(localStorage.getItem("cookies-accepted") === "true");
    window.addEventListener("cookies-accepted", handler);
    return () => window.removeEventListener("cookies-accepted", handler);
  }, []);

  if (!accepted) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}

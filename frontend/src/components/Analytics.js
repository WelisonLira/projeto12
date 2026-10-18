import { useEffect } from "react";

export default function Analytics() {
  useEffect(() => {
    // Google Analytics (exemplo)
    if (window.gtag) return;
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`;
    script.async = true;
    document.body.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  }, []);
  return null;
}
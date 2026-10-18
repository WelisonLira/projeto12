import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <a href="/institucional/termos">Termos de Uso</a> |{" "}
        <a href="/institucional/privacidade">Política de Privacidade</a> |{" "}
        <a href="/institucional/reembolso">Reembolso</a>
      </div>
      <div style={{ marginTop: 10 }}>
        <a href="https://facebook.com/suaempresa" rel="noopener noreferrer" target="_blank">Facebook</a> |{" "}
        <a href="https://instagram.com/suaempresa" rel="noopener noreferrer" target="_blank">Instagram</a> |{" "}
        <a href="https://wa.me/seunumerowhatsapp" rel="noopener noreferrer" target="_blank">WhatsApp</a>
      </div>
      <div style={{ marginTop: 10 }}>
        <img src="/icons/ssl.svg" alt="SSL" width={40} />{" "}
        <img src="/icons/lgpd.svg" alt="LGPD" width={40} />
      </div>
      <div style={{ marginTop: 10 }}>© {new Date().getFullYear()} Consultas Online</div>
    </footer>
  );
}
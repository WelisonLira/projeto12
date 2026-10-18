import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
// ...import das páginas

export default function AppRoutes() {
  // ...contextos
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Register /></PageTransition>} />
        <Route path="/produtos" element={<PageTransition><Produtos /></PageTransition>} />
        <Route path="/painel" element={<PageTransition><Painel /></PageTransition>} />
        <Route path="/recarga" element={<PageTransition><Recarga /></PageTransition>} />
        <Route path="/consultar" element={<PageTransition><Consultar /></PageTransition>} />
        <Route path="/historico" element={<PageTransition><Historico /></PageTransition>} />
        <Route path="/cupom" element={<PageTransition><Cupom /></PageTransition>} />
        <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><Post /></PageTransition>} />
        <Route path="/depoimentos" element={<PageTransition><Depoimentos /></PageTransition>} />
        <Route path="/suporte" element={<PageTransition><Suporte /></PageTransition>} />
        <Route path="/indicacao" element={<PageTransition><Indicacao /></PageTransition>} />
        <Route path="/notificacoes" element={<PageTransition><Notificacoes /></PageTransition>} />
        <Route path="/admin/*" element={<PageTransition><Admin /></PageTransition>} />
        <Route path="/institucional/privacidade" element={<PageTransition><PoliticaPrivacidade /></PageTransition>} />
        <Route path="/institucional/termos" element={<PageTransition><TermosUso /></PageTransition>} />
        <Route path="/institucional/reembolso" element={<PageTransition><PoliticaReembolso /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}
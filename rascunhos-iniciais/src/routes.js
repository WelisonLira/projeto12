import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
// ...
<AnimatePresence mode="wait">
  <Routes>
    <Route path="/" element={<PageTransition><Home /></PageTransition>} />
    {/* ...outras rotas */}
  </Routes>
</AnimatePresence>
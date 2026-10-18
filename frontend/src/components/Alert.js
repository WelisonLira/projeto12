import { motion, AnimatePresence } from "framer-motion";
export default function Alert({ show, children }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.27 }}
          className="alert"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
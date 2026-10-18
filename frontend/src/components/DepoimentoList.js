import { motion } from "framer-motion";
export default function DepoimentoList({ depoimentos }) {
  return (
    <div className="depoimentos-list">
      {depoimentos.map((dep, i) => (
        <motion.div
          key={dep._id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          className="depoimento"
        >
          {/* conteúdo */}
        </motion.div>
      ))}
    </div>
  );
}
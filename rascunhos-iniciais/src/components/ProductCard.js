import { motion } from "framer-motion";
import "../styles/productcard.css";

export default function ProductCard({ produto }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 4px 24px #1976d244" }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="product-card"
    >
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <b>R$ {produto.preco}</b>
    </motion.div>
  );
}
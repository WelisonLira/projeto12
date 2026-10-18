import { motion } from "framer-motion";
import "./ProductCard.css";

export default function ProductCard({ produto }) {
  return (
    <motion.div className="product-card" whileHover={{ scale: 1.03, boxShadow: "0 4px 16px #4B9CD330" }}>
      <h3>{produto.nome}</h3>
      <p>{produto.descricao}</p>
      <b>R$ {produto.preco}</b>
    </motion.div>
  );
}
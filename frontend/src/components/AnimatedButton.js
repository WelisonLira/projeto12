import { motion } from "framer-motion";
export default function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.04, backgroundColor: "#1976d2", color: "#fff" }}
      transition={{ duration: 0.13 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
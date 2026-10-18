import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function DarkModeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <button aria-label="Alternar tema" className="darkmode-btn"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
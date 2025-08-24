"use client";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggler() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "6px 12px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        background: theme === "dark" ? "#333" : "#f0f0f0",
        color: theme === "dark" ? "#fff" : "#000",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

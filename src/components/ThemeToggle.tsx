import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      // Default to light (Airbnb is a light theme) unless the user chose dark.
      return savedTheme === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-1.5 rounded-full hover:bg-anthropic-text/5 transition-colors opacity-60 hover:opacity-100 flex items-center justify-center"
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}

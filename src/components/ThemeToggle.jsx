import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "dark" ? "light" : "dark"
        )
      }
      className="
        rounded-xl
        border
        border-gray-300
        dark:border-white/10
        bg-white/70
        dark:bg-white/5
        backdrop-blur-xl
        px-4
        py-2
        transition
        duration-300
        hover:scale-105
      "
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}


import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const isLight = storedTheme === "light";
    setLightMode(isLight);
    document.documentElement.classList.toggle("dark", !isLight);
  }, []);

  const toggleTheme = () => {
    setLightMode((prevLightMode) => {
      const newLightMode = !prevLightMode;
      document.documentElement.classList.toggle("dark", !newLightMode);
      localStorage.setItem("theme", newLightMode ? "light" : "dark");
      return newLightMode;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-none"
      )}
    >
      {lightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};

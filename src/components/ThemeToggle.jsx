import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
  const [lightMode, setLightMode] = useState(true);

  // Initialize theme on page load
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    const isLight = storedTheme === "light";
    setLightMode(isLight);
    document.documentElement.classList.toggle("dark", !isLight);
  }, []);

  const toggleTheme = () => {
    // Use functional update to ensure correct current state
    setLightMode((prevLightMode) => {
      const newLightMode = !prevLightMode; // false

      // Apply the correct class immediately
      document.documentElement.classList.toggle("dark", !newLightMode);

      // Save the new theme in localStorage
      localStorage.setItem("theme", newLightMode ? "light" : "dark");

      return newLightMode;
    });
  };

  return (
    <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden")}>
      {lightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};

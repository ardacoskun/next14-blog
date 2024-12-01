"use client";
import { useState } from "react";
import { useCookies } from "react-cookie";

const useDarkMode = (defaultTheme = "dark") => {
  const [theme, setTheme] = useState(defaultTheme);
  const [_, setCookie] = useCookies(["theme"]);

  const toggleTheme = () => {
    const selectedTheme = theme === "dark" ? "light" : "dark";

    setTheme(selectedTheme);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(selectedTheme);
    setCookie("theme", selectedTheme);
  };

  return { theme, toggleTheme };
};

export default useDarkMode;

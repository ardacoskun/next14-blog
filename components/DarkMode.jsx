"use client";
import useDarkMode from "@/hooks/useDarkMode";

const nextModeIcons = {
  light: "🌚",
  dark: "🌝",
};

const DarkMode = () => {
  const { theme, toggleTheme } = useDarkMode();

  return <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>;
};

export default DarkMode;

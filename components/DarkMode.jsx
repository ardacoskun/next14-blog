"use client";
import useDarkMode from "@/hooks/useDarkMode";

const nextModeIcons = {
  light: "🌚",
  dark: "🌝",
};

const DarkMode = ({ defaultTheme }) => {
  const { theme, toggleTheme } = useDarkMode(defaultTheme);

  return <button onClick={toggleTheme}>{nextModeIcons[theme]}</button>;
};

export default DarkMode;

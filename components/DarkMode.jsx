"use client";

import { useState } from "react";

const nextModeIcons = {
  light: "🌚",
  dark: "🌝",
};

const DarkMode = () => {
  const [theme, setTheme] = useState("dark");

  const toggleNextMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return <button onClick={toggleNextMode}>{nextModeIcons[theme]}</button>;
};

export default DarkMode;

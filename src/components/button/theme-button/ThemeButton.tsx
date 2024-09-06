"use client";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="border-l border-gray pl-4">
      {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
}

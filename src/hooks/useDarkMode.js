import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-dark-mode";

function getInitialValue() {
  if (typeof window === "undefined") return false;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored !== null) return JSON.parse(stored);
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  } catch {
    return false;
  }
}

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(getInitialValue);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    if (isDarkMode) {
      root.classList.add("dark-mode");
      body.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
      body.classList.remove("dark-mode");
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(isDarkMode));
    } catch {
      // ignore
    }
  }, [isDarkMode]);

  const toggle = () => setIsDarkMode((prev) => !prev);

  return [isDarkMode, toggle];
}

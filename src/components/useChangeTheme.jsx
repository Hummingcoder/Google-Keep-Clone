import React, { useEffect, useState } from "react";

const useChangeTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return [theme, toggleTheme];
};

export default useChangeTheme;

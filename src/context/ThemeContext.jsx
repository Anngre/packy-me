import { useMemo } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const THEMES = {
  GREEN: "greenTheme",
  BLUE: "blueTheme",
  YELLOW: "yellowTheme",
};

export const ThemeContextProvider = ({ children }) => {
  const [themeError, setThemeError] = useState(null);
  const settedTheme = useMemo(function () {
    try {
      return JSON.parse(localStorage.getItem("color"));
    } catch (err) {
      setThemeError(err.message);
    }
  });
  const [theme, setTheme] = useState(settedTheme || THEMES.GREEN);

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(theme));
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeError }}>
      {children}
    </ThemeContext.Provider>
  );
};

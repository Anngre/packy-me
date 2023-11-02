import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const THEMES = {
  GREEN: "greenTheme",
  BLUE: "blueTheme",
  YELLOW: "yellowTheme",
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(THEMES.GREEN);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

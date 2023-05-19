import React, { createContext, useState } from 'react';

const ThemeModeContext = createContext();

export function ThemeModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleThemeMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const themeModeValue = {
    isDarkMode,
    toggleThemeMode,
  };

  return (
    <ThemeModeContext.Provider value={themeModeValue}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export default ThemeModeContext;

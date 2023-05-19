import '@/styles/globals.css'
import { useState, useEffect } from 'react';
import { ThemeProvider, CssBaseline, Switch } from '@mui/material/styles';
import {theme, darkTheme} from '@/hooks/theme';
import {ThemeModeProvider} from '@/hooks/themeModeContext';
import ThemeToggle from '@/components/toggler/ThemeToggler';

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectedTheme = isDarkMode ? darkTheme : theme;
  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);


  return( 
    <ThemeModeProvider>
    <ThemeProvider theme={selectedTheme}>
    <ThemeToggle isDarkMode={isDarkMode} onThemeChange={handleThemeChange} /> 

    <Component {...pageProps} />
  </ThemeProvider>  
    </ThemeModeProvider>
  )
}

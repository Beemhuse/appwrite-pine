// theme.js

import { createTheme } from '@mui/material/styles';

// Define your custom typography, color, and other theme values
const typography = {
  fontFamily: 'Arial, sans-serif',
  fontSize: 16,
  fontWeight: 400,
};

const colors = {
  primary: '#007bff',
  secondary: '#6c757d',
};

const spacing = 8;

// Create the theme object with additional custom options
const theme = createTheme({
  typography: typography,
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    mode: 'light', // Set the default mode to light
  },
  spacing: spacing,
});

// Creates a dark mode variant of the theme
const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: 'dark', // Sets the mode to dark
    primary: {
      main: '#f50057', // Customize the primary color for dark mode
    },
  },
});

export { theme, darkTheme };

// ThemeToggle.js

import { Switch, Box } from '@mui/material';
// import {theme} from '../../hooks/theme'
import { useTheme } from '@mui/material/styles';
function ThemeToggle({ isDarkMode, onThemeChange }) {
    const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', background:theme.palette.primary.main, justifyContent:'end', border:'solid red' }}>
    <Switch checked={isDarkMode} onChange={onThemeChange} /> 
    </Box>
  );
}

export default ThemeToggle;

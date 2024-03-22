import React from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '../atoms/theme';
import MoonIcon from '@mui/icons-material/Brightness4';
import SunIcon from '@mui/icons-material/Brightness7';

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton onClick={toggleTheme}>
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};

export default ThemeSwitch;

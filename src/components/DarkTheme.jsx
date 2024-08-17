// DarkTheme.js
import React from 'react';
import { useTheme } from '../Context/ThemeContext';

function DarkTheme() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <i
      className={isDarkMode ? 'fa-solid fa-moon' : 'fa-solid fa-fire'}
      onClick={toggleDarkMode}
    ></i>
  );
}

export default DarkTheme;

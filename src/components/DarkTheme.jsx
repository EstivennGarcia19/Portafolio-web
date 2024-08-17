// DarkTheme.js
import React from 'react';
import { useTheme } from '../Context/ThemeContext';

function DarkTheme() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <i
      className={isDarkMode ? 'fa-solid fa-fire' : 'fa-solid fa-moon'}
      onClick={toggleDarkMode}
    ></i>
  );
}

export default DarkTheme;

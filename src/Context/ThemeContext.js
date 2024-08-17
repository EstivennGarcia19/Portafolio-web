// ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const ThemeContext = createContext();

// Crear el proveedor del contexto
export const ThemeProvider = ({ children }) => {
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('dark-mode');
        if (savedTheme) {
            setIsDarkMode(JSON.parse(savedTheme));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Crear un hook para usar el contexto fácilmente
export const useTheme = () => useContext(ThemeContext);

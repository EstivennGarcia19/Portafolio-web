import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import { useTheme } from './Context/ThemeContext';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useMode } from './Context/ModeContext'


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones
      easing: 'ease-in-out', // Efecto de aceleración
      once: true, // Las animaciones solo se ejecutan una vez
    });
  }, []);

  const { isDarkMode } = useTheme();
  const { modeSelected } = useMode();

  
  return (
    // Contenedor pricipal que encierra absolutamente todo
    <section 
      className={isDarkMode ? 'principal-container' : 'principal-container dark-mode'}
      style={modeSelected ? {fontFamily:'Satisfy'} : {} }> 
      <Navbar/>      
      <Hero/>  
      <AboutMe/>  
      <Projects/>
      <Skills/>    
    </section>
  )
}

export default App
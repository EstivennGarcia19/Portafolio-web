import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { useTheme } from './Context/ThemeContext';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useMode } from './Context/ModeContext'
import MobileNavBar from './components/MobileNavBar'


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
      <MobileNavBar/>
      <Navbar/>      
      <Hero/>  
      <Services/>  
      <Projects/>
      <Skills/>   

    </section>
  )
}

export default App
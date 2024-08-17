// Navbar.js
import React, { useState } from 'react';
import DarkTheme from './DarkTheme';
import { useMode } from '../Context/ModeContext';

function Navbar() {

    // Estado del menu que se muestra en mobiles, que por defecto el estado es no mostrar
    const [isActiveNavMobile, setIsActiveNavMobile] = useState(false)

    const toggleNavMobile = () => {

        setIsActiveNavMobile(!isActiveNavMobile)
    }

    const {changeMode, modeSelected} = useMode()
    
    
    return (
        <nav className="navBar" data-aos="fade-down">
            <article className={isActiveNavMobile ? 'menu-mobile show' : 'menu-mobile'}>
                <h2>Menú</h2>
                <ul>
                    <li className='option'>
                        <a href='#aboutMe'>Acerca de</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Servicios</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Tecnologias</a>
                    </li>

                </ul>
                <div className="change-mode-mobile">
                    <DarkTheme />
                </div>
                <div className="close-menu">
                    <i className="fa-regular fa-circle-xmark" onClick={toggleNavMobile}></i>
                </div>



            </article>

            <div className='container'>
                <article className='name-icon'>
                    <i className="fa-solid fa-code"></i>
                    <span>Estiven</span>
                </article>
                <ul className='menu-options'>
                    <li className='option'>
                        <a>Acerca de</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Servicios</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Tecnologias</a>
                    </li>
                    <li className='dark-light-mode'>
                        <DarkTheme />
                    </li>
                </ul>
                <article className='change-mode'>
                    <button onClick={changeMode}>
                        {/* <i className="fa-solid fa-wine-glass"></i> */}
                        <i className={modeSelected ? 'fa-solid fa-dumbbell' : 'fa-solid fa-wine-glass'}></i>
                        <span>{modeSelected ? 'Mewing' : 'Elegante'}</span>
                    </button>
                </article>
                <article className='btn-burger'>
                    <i className="fa-solid fa-burger" onClick={toggleNavMobile}></i>
                </article>
            </div>
        </nav>
    );
}

export default Navbar;

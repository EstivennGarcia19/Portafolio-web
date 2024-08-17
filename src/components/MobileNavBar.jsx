import React from 'react'
import DarkTheme from './DarkTheme'
import { useMobileNav } from '../Context/MobileNavContext'
import { useMode } from '../Context/ModeContext';

export default function MobileNavBar() {

    const { isActiveNavMobile, toggleNavMobile } = useMobileNav();    
    const {modeSelected, changeMode} = useMode() 
    
    return (
        <article className={isActiveNavMobile ? 'menu-mobile show' : 'menu-mobile'}>
            <h2>Menú</h2>
            <ul>
                <li className='option'>
                    <a href='#services'>Servicios</a>
                </li>
                <li className='option'>
                    <a href='#projects'>Proyectos</a>
                </li>                            
                <li className='option'>
                    <a href='#skills'>Habilidades</a>
                </li>
            </ul>
            <div className="change-mode-mobile">
                <DarkTheme />  
                <i className={modeSelected ? 'fa-solid fa-masks-theater' : 'fa-solid fa-champagne-glasses'} onClick={changeMode}></i>
            </div>
            <div className="close-menu">
                <i className="fa-regular fa-circle-xmark" onClick={toggleNavMobile}></i>
            </div>

        </article>
    )
}

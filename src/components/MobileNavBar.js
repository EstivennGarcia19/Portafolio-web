import React from 'react'
import DarkTheme from './DarkTheme'
import { useMobileNav } from '../Context/MobileNavContext'

export default function MobileNavBar() {

    const { isActiveNavMobile, toggleNavMobile } = useMobileNav();    
    
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
            </div>
            <div className="close-menu">
                <i className="fa-regular fa-circle-xmark" onClick={toggleNavMobile}></i>
            </div>

        </article>
    )
}

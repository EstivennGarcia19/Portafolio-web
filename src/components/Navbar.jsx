// Navbar.js
import React, { useState } from 'react';
import DarkTheme from './DarkTheme';
import { useMode } from '../Context/ModeContext';
import { useMobileNav } from '../Context/MobileNavContext';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

function Navbar() {

    const { changeMode, modeSelected } = useMode()
    const { toggleNavMobile } = useMobileNav()

    const [t, i18n] = useTranslation("global");
    



    return (
        <nav className="navBar" data-aos="fade-down">
            <div className='container'>
                <article className='name-icon'>
                    <i className="fa-solid fa-code"></i>
                    <span>Estiven</span>
                </article>
                <ul className='menu-options'>
                    <li className='option'>
                        <a href='#services'>{t("navBar.services")}</a>
                    </li>
                    <li className='option'>
                        <a href='#projects'>{t("navBar.projects")}</a>
                    </li>
                    <li className='option'>
                        <a href='#skills'>{t("navBar.skills")}</a>
                    </li>
                    <li className='dark-light-mode'>
                        <DarkTheme />
                    </li>
                </ul>
                <article className='change-mode'>

                    <LanguageToggle></LanguageToggle>

                    <button onClick={changeMode}>
                        {/* <i className="fa-solid fa-wine-glass"></i> */}
                        <i className={modeSelected ? 'fa-solid fa-masks-theater' : 'fa-solid fa-champagne-glasses'}></i>
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

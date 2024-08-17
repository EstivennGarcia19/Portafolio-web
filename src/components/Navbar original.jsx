import React, { useEffect, useState } from 'react'


function Navbar() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {

        const savedTheme = localStorage.getItem('dark-mode')

        if (savedTheme) {
            setIsDarkMode(JSON.parse(savedTheme))
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    




    return (
        // <nav className='navBar'>
            <nav className={isDarkMode ? 'navBar dark-mode' : 'navBar'}>
            <div className='container'>

                <article className='name-icon'>
                    <i className="fa-solid fa-code"></i>
                    <span>Estiven</span>
                </article>

                <ul className='menu-options'>
                    <li className='option'>
                        <a href='#'>Acerca de</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Servicios</a>
                    </li>
                    <li className='option'>
                        <a href='#'>Tecnologias</a>
                    </li>
                    <li className='dark-light-mode'>
                        <i className="fa-solid fa-moon" onClick={toggleDarkMode}></i>
                    </li>
                </ul>

                <article className='change-mode'>
                    <button>
                        <i className="fa-solid fa-wine-glass"></i>
                        <span>Elegante</span>
                    </button>
                </article>
            </div>
        </nav>
    )
}

export default Navbar
import React, { useState } from 'react'
import i18next from 'i18next';

// Images
import spanish from '../media/lang-esp.png'
import english from '../media/lang-eng.png'

function LanguageToggle() {

    const [currentLang, setCurrentLang] = useState("es")

    const handleChangeLanguage = () => {

        const newLang = currentLang === 'es' ? 'en' : 'es';

        i18next.changeLanguage(newLang)
        setCurrentLang(newLang);

    }

    return (
        <div className="change-language">
            <p>{currentLang === 'es' ? 'ES' : 'EN'}</p>
            {/* <img src="media/lang-esp.png" onClick={handleChangeLanguage} alt="" /> */}
            <img src={currentLang === 'es' ? spanish : english} onClick={handleChangeLanguage} alt="Bandera" />

            <i className={currentLang === 'es' ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
        </div>
    )
}

export default LanguageToggle
import React, { useState } from 'react'
import i18next from 'i18next';

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
            <img src={currentLang === 'es' ? 'media/lang-esp.png' : 'media/lang-eng.png'} onClick={handleChangeLanguage} alt="" />

            {/* <i class="fa-solid fa-chevron-down"></i> */}
            <i className={currentLang === 'es' ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'}></i>
        </div>
    )
}

export default LanguageToggle
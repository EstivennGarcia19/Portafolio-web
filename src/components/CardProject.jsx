import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function CardProject({ proImg, title, descrip, languages = [], websiteUrl }) {

    
    const [isVisibleText, setIsVisibleText] = useState(false);
    const urlImg = `/media/project-img-${proImg}.png`;
    const [t, i18n] = useTranslation("global");
    
    const showDescription = () => {
        
        setIsVisibleText(prevState => !prevState)
        
        
    }

    return (
        <article className='card-project' data-aos="zoom-out-up" duration="2500">

            <div className="cont-img-project">
                <img src={urlImg} alt="" />
            </div>

            <div className="cont-info-project">
                <h2>{title}</h2>

                <p style={{display: isVisibleText ? 'block' : 'none'}}>{descrip}</p>
                <span className='showTextOnlyInBigScreen'>{descrip}</span>

                <span className='read-more' onClick={showDescription}>
                    {isVisibleText ? 'Ocultar' : 'Leer mas'}
                </span>

                <div className="btn-and-langs">
                    <a href={websiteUrl} target='_blanked'>{t("projects.btn")}</a>
                    <article className="languages">

                        {
                            languages.map((lang, index) => (
                                <img key={index} src={`/media/${lang}.png`} alt="" />
                            ))
                        }

                    </article>
                </div>
            </div>


        </article>
    )
}

export default CardProject
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';

function CardProject({ proImg, title, descrip, languages = [], websiteUrl }) {

    const [isVisibleText, setIsVisibleText] = useState(false);
    const [t, i18n] = useTranslation("global");

    // Con el process.env.PUBLUC_URL es como acceder globalmente a cualquier parte de la carpeta public
    const projImg = `${process.env.PUBLIC_URL}/dinamic-media/project-img-${proImg}.png`;

    const showDescription = () => {
        setIsVisibleText(prevState => !prevState)
    }

    return (
        <article className='card-project' data-aos="zoom-out-up" duration="2500">

            <div className="cont-img-project">
                <img src={projImg} alt={proImg} />
            </div>

            <div className="cont-info-project">
                <h2>{title}</h2>

                <p style={{ display: isVisibleText ? 'block' : 'none' }}>{descrip}</p>
                <span className='showTextOnlyInBigScreen'>{descrip}</span>

                <button className='read-more' onClick={showDescription}>
                    {isVisibleText ? t("projects.read-less") : t("projects.read-more")}
                </button>

                {/* <span className='read-more' onClick={showDescription}>
                    {isVisibleText ? t("projects.read-less") : t("projects.read-more")}
                </span> */}

                <div className="btn-and-langs">
                    <a href={websiteUrl} target='_blanked'>{t("projects.btn")}</a>
                    <article className="languages">
                        {
                            languages.map((lang, index) => (
                                <img key={index} src={`${process.env.PUBLIC_URL}/dinamic-media/${lang}.png`} alt="Lang" />
                            ))
                        }
                    </article>
                </div>
            </div>
        </article>
    )
}

export default CardProject
import React from 'react'
import ServiceCard from './ServiceCard'
import { useTranslation } from 'react-i18next';

function Services() {

    const [t, i18n] = useTranslation("global");  
    return (
        <section id='services'>
            <div className="container">

                <article className='title' data-aos="fade-up">
                    <h2>{t("services.title")}</h2>
                </article>


                <article className='description' data-aos="fade-up">
                    <p>{t("services.description")}</p>
                </article>                
                
                <ServiceCard 
                    title={t("services.title-ux")}
                    text={t("services.description")}
                    icon="fa-solid fa-brush">

                </ServiceCard>

                <ServiceCard
                    title={t("services.title-back")}
                    text={t("services.description-back")}
                    icon="fa-solid fa-database">
                </ServiceCard>

                <ServiceCard
                    title={t("services.title-front")}
                    text={t("services.description-front")}
                    icon="fa-solid fa-laptop-code">
                </ServiceCard>


            </div>
        </section>
    )
}

export default Services
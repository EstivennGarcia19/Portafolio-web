import React from 'react'
import CardProject from './CardProject'
import {projectsLinks} from './Links'
import { useTranslation } from 'react-i18next';

// Images
import iconTitle from '../media/title-project-icon-front.png';

function Projects() {

  const [t, i18n] = useTranslation("global"); 
  return (
    <section id='projects'>

      <div className="container">

        <article className='title-projects' data-aos="fade-up">
          <img src={iconTitle} alt="Projects"  loading='lazy'/>
          <span>{t("projects.title")}</span>
        </article>

        <article className='text-project' data-aos="fade-up">
          <p>{t("projects.desc")}</p>
        </article>

        <CardProject 
          proImg="controlmoney"
          title={t("projects.title-CM")}
          descrip={t("projects.desc-CM")}
          languages={['laravel', 'mysql', 'bootstrap', 'js', 'css', 'html']}
          websiteUrl={projectsLinks.controlMoney}
          
          />

        <CardProject 
          proImg="withyou"
          title={t("projects.title-WY")}
          descrip={t("projects.desc-WY")}
          languages={['php', 'mysql', 'bootstrap', 'js', 'css', 'html']}
          websiteUrl={projectsLinks.withyou}
          
          />

        <CardProject 
          proImg="gympage"
          title={t("projects.title-GYM")}
          descrip={t("projects.desc-GYM")}          
          languages={['css', 'html', 'bootstrap']}
          websiteUrl={projectsLinks.gym}
          />

        <CardProject 
          proImg="airport"
          title={t("projects.title-AP")} 
          descrip={t("projects.desc-AP")}          
          languages={['css', 'html']}
          websiteUrl={projectsLinks.airport}
          />
            
          

      </div>

    </section>
  )
}

export default Projects
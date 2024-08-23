import React from 'react';
import { useMode } from '../Context/ModeContext';
import { socialMediaLinks } from './Links';
import { useTranslation } from 'react-i18next';

// Images
import avatar from "../media/me-avatar.png";
import avatarMewing from "../media/me-avatar-mewing.png";

function Hero() {

  const { modeSelected } = useMode()  

  // Importamos esto para manejar los idiomas
  const [t, i18n] = useTranslation("global");  
  return (

    <section id='hero'>
      <div className='container'>
        <article className='info-details'>
          <span className='title-welcome'>{t('hero.welcome')}</span>
          <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">{t("hero.my-name")}<br /> {t("hero.rol")}</h1>

          <div className="hero-btns">

            <a href={socialMediaLinks.linkedin} target='_blank' data-aos="fade-right" data-aos-easing="ease" data-aos-delay="400" className='btn-call-me'>
              <i className="fa-solid fa-paper-plane"></i>
              <span>{t("hero.btn-call-me")}</span>              
            </a>

            <a href="assets/estivenngarcia_cv.pdf" target='_blank' className="my-cv">{t("hero.cv")}</a>
          </div>

          <div className='information' data-aos="fade-left" data-aos-easing="ease" data-aos-delay="400">
            <p className='hero-text'>{t("hero.description")}</p>
          </div>

          <article className='social-media'>
            <span>{t("hero.social-media")}</span>
            <div className='icons-social-media'>
              <article className='github'>
                <a href={socialMediaLinks.github} target='_blank' rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </article>
              <article className='linkedin'>
                <a href={socialMediaLinks.linkedin} target='_blank' rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </article>
              <article className='whatsapp'>
                <a href={socialMediaLinks.whatsapp} target='_blank' rel="noopener noreferrer">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </article>
            </div>
          </article>
        </article>


        {/* Foto mia suquistruquis */}
        <article className='sexy-photo'>
          <aside className='decoration-cicle-one'><div className="circle"></div></aside>
          <aside className='decoration-cicle-two'><div className="circle"></div></aside>
          <div className='container-sexy-photo' data-aos="zoom-in">
            {/* <img src={modeSelected ? '/media/me-avatar-mewing2.png' : '/media/me-avatar.png'} alt="Foto del sexi programador" loading='lazy' /> */}
            <img src={modeSelected ? avatarMewing  : avatar} alt="Foto del sexi programador" loading='lazy' />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;

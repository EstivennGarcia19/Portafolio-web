import React from 'react';
import { useMode } from '../Context/ModeContext';
import { socialMediaLinks } from './Links';

function Hero() {

  const { modeSelected } = useMode()
  const lanitaRicaRhoades = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17d210ad-d7df-4953-bd00-756345ddbbd8/dfu7uil-3ce4a480-bac9-43d5-bce7-5cbdc4507b9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZDIxMGFkLWQ3ZGYtNDk1My1iZDAwLTc1NjM0NWRkYmJkOFwvZGZ1N3VpbC0zY2U0YTQ4MC1iYWM5LTQzZDUtYmNlNy01Y2JkYzQ1MDdiOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LwqYxN-SGXszgb9UWLM5iuACUhpg9Bpo5EMQfozM5PA'
  return (

    <section id='hero'>
      <div className='container'>
        <article className='info-details'>
          <span className='title-welcome'>Bienvenido</span>
          <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Soy Estiven <br /> Desarrollador Web</h1>

          <div className="hero-btns">

            <a href={socialMediaLinks.linkedin} target='_blank' data-aos="fade-right" data-aos-easing="ease" data-aos-delay="400" className='btn-call-me'>
              <i className="fa-solid fa-paper-plane"></i>
              <span>Contacto</span>              
            </a>

            <a href="assets/estivenngarcia_cv.pdf" target='_blank' className="my-cv">Descargar CV</a>
          </div>

          <div className='information' data-aos="fade-left" data-aos-easing="ease" data-aos-delay="400">
            <p className='hero-text'>Creo experiencias web modernas y elegantes que fusionan diseño impactante con un rendimiento excepcional.</p>
          </div>

          <article className='social-media'>
            <span>Redes:</span>
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
            <img src={modeSelected ? '/media/me2.png' : '/media/me-avatar.png'} alt="Foto del sexi programador" loading='lazy' />
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;

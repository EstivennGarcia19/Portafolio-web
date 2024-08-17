import React from 'react';
import { useMode } from '../Context/ModeContext';

function Hero() {
  
  const {modeSelected} = useMode()
  return (

    <section id='hero'>
      <div className='container'>
        <article className='info-details'>
          <span className='title-welcome'>Bienvenido</span>
          <h1 data-aos="fade-up" data-aos-easing="ease" data-aos-delay="400">Soy Estiven <br /> Desarrollador Web</h1>
          <a href="#" data-aos="fade-right" data-aos-easing="ease" data-aos-delay="400" className='btn-call-me'>
            <i className="fa-solid fa-paper-plane"></i>
            <span>Háblemos</span>
          </a>

          <div className='information' data-aos="fade-left" data-aos-easing="ease" data-aos-delay="400">
            <p>Creo experiencias web modernas y elegantes que fusionan diseño impactante con un rendimiento excepcional.</p>
          </div>

          <article className='social-media'>
            <span>Redes:</span>
            <div className='icons-social-media'>
              <article className='github'>
                <a href="https://github.com/EstivennGarcia19" target='_blank' rel="noopener noreferrer">
                  <i className="fa-brands fa-github"></i>
                </a>
              </article>
              <article className='linkedin'>
                <a href="https://www.linkedin.com/in/estivennGarcia19" target='_blank' rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </article>
              <article className='whatsapp'>
                <a href="https://api.whatsapp.com/send/?phone=573227370699&text&type=phone_number&app_absent=0" target='_blank' rel="noopener noreferrer">
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
            { modeSelected ? <img src='media/lanarhoades.png' alt='Desarrollador Web' loading='lazy'/> : <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17d210ad-d7df-4953-bd00-756345ddbbd8/dfu7uil-3ce4a480-bac9-43d5-bce7-5cbdc4507b9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZDIxMGFkLWQ3ZGYtNDk1My1iZDAwLTc1NjM0NWRkYmJkOFwvZGZ1N3VpbC0zY2U0YTQ4MC1iYWM5LTQzZDUtYmNlNy01Y2JkYzQ1MDdiOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LwqYxN-SGXszgb9UWLM5iuACUhpg9Bpo5EMQfozM5PA'></img>}
            {/* <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17d210ad-d7df-4953-bd00-756345ddbbd8/dfu7uil-3ce4a480-bac9-43d5-bce7-5cbdc4507b9f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3ZDIxMGFkLWQ3ZGYtNDk1My1iZDAwLTc1NjM0NWRkYmJkOFwvZGZ1N3VpbC0zY2U0YTQ4MC1iYWM5LTQzZDUtYmNlNy01Y2JkYzQ1MDdiOWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LwqYxN-SGXszgb9UWLM5iuACUhpg9Bpo5EMQfozM5PA' alt='Desarrollador Web' loading='lazy'/> */}
            {/* <img src='/media/mewing.png' alt='Desarrollador Web' loading='lazy'/> */}
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero;

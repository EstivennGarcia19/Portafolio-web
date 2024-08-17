import React from 'react'
import CardProject from './CardProject'

function Projects() {
  return (
    <section id='projects'>

      <div className="container">

        <article className='title-projects' data-aos="fade-up">
          <img src="/media/title-project-icon-front.png" alt="Projects"  loading='lazy'/>
          <span>Projects</span>
        </article>

        <article className='text-project' data-aos="fade-up">
          <p>Aquí encontrarás una muestra de mis proyectos personales, donde aplico mi creatividad y habilidades técnicas para resolver problemas y crear soluciones efectivas. Explora estos trabajos para ver cómo llevo mis ideas a la realidad</p>
        </article>

        <CardProject 
          proImg="controlMoney"
          title="Control de gastos" 
          descrip="Aplicacion web para registrar y gestionar tus gastos diarios. Permite visualizar tus gastos por categoría y tener un control más claro sobre tu presupuesto personal."
          languages={['laravel', 'mysql', 'bootstrap', 'js', 'css', 'html']}
          websiteUrl="https://es.pornhub.com/"
          
          />

        <CardProject 
          proImg="withyou"
          title="Gestion de citas medicas" 
          descrip="Plataforma web desarrollada como parte de mi proyecto de graduación en el SENA. Permite a los usuarios registrarse, agendar, reprogramar y cancelar citas médicas de manera sencilla y eficiente."
          languages={['php', 'mysql', 'bootstrap', 'js', 'css', 'html']}
          websiteUrl="https://es.pornhub.com/"
          
          />

        <CardProject 
          proImg="gympage"
          title="Landing page GYM" 
          descrip="Diseño de una landing page para un gimnasio utilizando diversos componentes de Bootstrap. Este enfoque facilita el desarrollo al aprovechar los elementos predefinidos y la flexibilidad de Bootstrap para crear una página atractiva y funcional."          
          languages={['css', 'html', 'bootstrap']}
          websiteUrl="https://es.pornhub.com/"
          />
            
          

      </div>

    </section>
  )
}

export default Projects
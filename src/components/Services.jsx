import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
    return (
        <section id='services'>
            <div className="container">

                <article className='title' data-aos="fade-up">
                    <h2>Te ayudo ;)</h2>
                </article>


                <article className='description' data-aos="fade-up">
                    <p>Mi enfoque está en construir interfaces intuitivas y responsivas que no solo cautiven a los usuarios, sino que también brinden soluciones completas y efectivas.</p>
                </article>                
                
                <ServiceCard 
                    title="Diseño UX"
                    text="Capas de crear interfaces atractivas y funcionales, enfocándome en la experiencia del usuario y en la estética visual."
                    icon="fa-solid fa-brush">

                </ServiceCard>

                <ServiceCard
                    title="Desarrollo Backend"
                    text="Experto en lógica de programación para la resolución de problemas y en la gestión de bases de datos"
                    icon="fa-solid fa-database">
                </ServiceCard>

                <ServiceCard
                    title="Desarrollo Frontend"
                    text="Convierto diseños en interfaces gráficas operativas, asegurando una integración eficaz entre la apariencia visual y la funcionalidad."
                    icon="fa-solid fa-laptop-code">
                </ServiceCard>


            </div>
        </section>
    )
}

export default Services
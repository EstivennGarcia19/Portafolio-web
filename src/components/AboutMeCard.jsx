import React from 'react'

function AboutMeCard({title, text, icon}) {
    return (
        <div className="about-card" data-aos="fade-up">

            <article className='title-and-icon'>
                <i className={icon}></i>
                <span>{title}</span>
            </article>

            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default AboutMeCard
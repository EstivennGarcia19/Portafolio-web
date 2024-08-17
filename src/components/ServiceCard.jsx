import React from 'react'

function ServiceCard({title, text, icon}) {
    return (
        <div className="service-card" data-aos="fade-up">

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

export default ServiceCard
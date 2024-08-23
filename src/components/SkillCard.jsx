import React from 'react';

function SkillCard({ nameimg }) {
    // Con el process.env.PUBLUC_URL es como acceder globalmente a cualquier parte de la carpeta public
    const image = `${process.env.PUBLIC_URL}/dinamic-media/${nameimg}.png`;

    return (
        <div className="skill-card">
            <img src={image} alt={nameimg} loading='lazy' />            
        </div>
    );
}
export default SkillCard;

import React from 'react'

function SkillCard({nameimg}) {
    
    // const image = `/media/${nameimg}.png`
    const image = `/media/${nameimg}.png`
    
    return (
        <div className="skill-card">
            <img src={image} alt="HTML" loading='lazy' />
            
        </div>
    )
}

export default SkillCard
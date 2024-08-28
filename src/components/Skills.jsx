import React from 'react'
import SkillCard from './SkillCard'
import { useTranslation } from 'react-i18next';


function Skills() {

    const [t, i18n] = useTranslation("global");
    return (
        <section id='skills'>
            <div className="container">
                <article className="title" data-aos="flip-up">                    
                    <i className="fa-solid fa-brain"></i>
                    <h2>{t("skills.title")}</h2>
                </article>


                <article className="frontend-skills">
                    <div className="title-fro-sk" data-aos="fade-up">
                        <span>Frontend</span>
                    </div>

                    <div className="cont-front-skills" data-aos="fade-up">
                        <SkillCard nameimg="html"></SkillCard>
                        <SkillCard nameimg="css"></SkillCard>
                        <SkillCard nameimg="js"></SkillCard>
                        <SkillCard nameimg="bootstrap"></SkillCard>
                        <SkillCard nameimg="react"></SkillCard>
                    </div>
                </article>

                <article className="backend-skills">
                    <div className="title-back-sk" data-aos="fade-up">
                        <span>Backend</span>
                    </div>


                    <div className="cont-back-skills" data-aos="fade-up">                        

                        <SkillCard nameimg="php"></SkillCard>
                        <SkillCard nameimg="mysql"></SkillCard>
                        <SkillCard nameimg="laravel"></SkillCard>
                        <SkillCard nameimg="icon"></SkillCard>
                        <SkillCard nameimg="git"></SkillCard>
                    </div>

                </article>

            </div>
        </section>
    )
}

export default Skills
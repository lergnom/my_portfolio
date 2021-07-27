import React from "react";
import style from "./Skills.module.css"
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Опыт</h2>
                <div className={style.skills}>
                    <Skill skillTitle={'JS'} skillDesc={'TypeScript, UnitTests, Git'}/>
                    <Skill skillTitle={'React'} skillDesc={'HOC, HOOK, REDUX'}/>
                    <Skill skillTitle={'HTML'} skillDesc={'Разработка веб сайтов'}/>
                </div>
            </div>
        </div>
    )

}

export default Skills

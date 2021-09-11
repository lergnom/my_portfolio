import React from "react";
import style from "./Skills.module.scss"
import styleContainer from './../common/styles/Container.module.css'
import Skill from "./skill/Skill";


const Skills = () => {

    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skillTitle={'JS'} skillDesc={'ES6+, SPA, MVC, TypeScript, UnitTests, work with DOM'}
                           circleOneB={85} circleColorOne={"#ffcd10"} /*circleBackgroundColor={"#000000"}*//>
                    <Skill skillTitle={'React'} skillDesc={'HOC, HOOK, REDUX'} circleOneB={55}
                           circleColorOne={"#61dbfb"}/>
                    <Skill skillTitle={'HTML/CSS'} skillDesc={'Gulp, Pug, SCSS, LESS, BEM naming, Git/hub/pages'}
                           circleOneB={90} circleColorOne={"#e00007"} circleColorTwo={"#708ae0"} circleTwoB={50}/>
                    <Skill skillTitle={'PHP'} skillDesc={'MVC,RedBean, MySQL, PDO'} circleOneB={70}
                           circleColorOne={"#474a8a"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills

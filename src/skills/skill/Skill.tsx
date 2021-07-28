import React from "react";
import style from "./Skill.module.css"

type SkillType = {
    skillTitle: string
    skillDesc: string
}

const Skill = ({skillTitle, skillDesc}: SkillType) => {

    return (
        <div className={style.skill}>
            <div className={style.skillIcon}></div>
            <h3 className={style.skillTitle}>{skillTitle}</h3>
            <p className={style.skillDesc}>{skillDesc}</p>
        </div>
    )

}

export default Skill

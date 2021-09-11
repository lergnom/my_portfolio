import React from "react";
import style from "./Skill.module.scss"

type SkillType = {
    skillTitle: string
    skillDesc: string
}

const Skill = ({skillTitle, skillDesc}: SkillType) => {

    return (
        <div className={style.skill}>
            <div className={style.skillIcon}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                    <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke="#d2d3d4" stroke-width="3"></circle>
                    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke="#ce4b99" stroke-width="3" stroke-dasharray="85 15"
                            stroke-dashoffset="25"></circle>
                    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke="#b1c94e" stroke-width="3" stroke-dasharray="15 85"
                            stroke-dashoffset="25"></circle>
                </svg>
            </div>
            <h3 className={style.skillTitle}>{skillTitle}</h3>
            <p className={style.skillDesc}>{skillDesc}</p>
        </div>
    )

}

export default Skill

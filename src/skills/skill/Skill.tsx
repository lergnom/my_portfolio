import React from "react";
import style from "./Skill.module.scss"

type SkillType = {
    skillTitle: string
    skillDesc: string
    circleOneB: number
    circleTwoB?: number
    circleColorOne?: string
    circleColorTwo?: string
    circleBackgroundColor?: string
}

const Skill = ({
                   skillTitle,
                   skillDesc,
                   circleOneB,
                   circleColorOne,
                   circleBackgroundColor,
                   circleTwoB,
                   circleColorTwo
               }: SkillType) => {
    let strCircleTwo, strCircleOne = `${circleOneB} ${100 - circleOneB}`;
    if (circleTwoB) {
        strCircleTwo = `${circleTwoB} ${100 - circleTwoB}`
    }

    return (
        <div className={style.skill}>
            <div className={style.skillIcon}>
                <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                    {/*<circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"> </circle>*/}
                    <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke={circleBackgroundColor ? circleBackgroundColor : "#d2d3d4"}
                            stroke-width="3"></circle>
                    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke={circleColorOne ? circleColorOne : "#ce4b99"} stroke-width="3"
                            stroke-dasharray={strCircleOne}
                            stroke-dashoffset="25"></circle>
                    {circleTwoB &&
                    <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                            stroke={circleColorTwo ? circleColorTwo : "#b1c94e"} stroke-width="3"
                            stroke-dasharray={strCircleTwo}
                            stroke-dashoffset="25"></circle>}
                    <g className={style.chartText}>
                        <text x="50%" y="50%" className={style.chartNumber}>
                            {circleOneB} {circleTwoB && circleTwoB}
                        </text>
                        {/*<text x="50%" y="50%" className={style.chartLabel}>*/}
                        {/*    Beers*/}
                        {/*</text>*/}
                    </g>
                </svg>
            </div>
            <h3 className={style.skillTitle}>{skillTitle}</h3>
            <p className={style.skillDesc}>{skillDesc}</p>
        </div>
    )

}

export default Skill

import React from "react";
import style from "./Work.module.css"

type WorkType = {
    workTitle: string
    workDesc: string
    workImg: string
}

const Work = ({workTitle, workDesc, workImg}: WorkType) => {

    return (
        <div className={style.work}>
            <h3 className={style.workTitle}>{workTitle}</h3>
            <span className={style.workDesc}>{workDesc}</span>
        </div>
    )

}

export default Work

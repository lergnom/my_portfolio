import React from "react";
import style from "./Work.module.scss"

type WorkType = {
    workTitle: string
    workDesc: string
    workImg: string
    workLink: string
}

const Work = ({workTitle, workDesc, workImg, workLink}: WorkType) => {

    return (
        <div className={style.work}>
            <a href={workLink}>
                <div className={style.workImgBackground}>
                    <img src={workImg} alt={workTitle}/>
                </div>

            </a>
            <div className={style.wokInfo}>
                <h4 className={style.workTitle}>{workTitle}</h4>
                <p className={style.workDesc}>{workDesc}</p>
            </div>

        </div>
    )

}

export default Work

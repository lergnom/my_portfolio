import React from "react";
import style from "./Works.module.css"
import styleContainer from './../common/styles/Container.module.css'


const Works = () => {

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <div>asd</div>
                </div>
            </div>
        </div>
    )

}

export default Works

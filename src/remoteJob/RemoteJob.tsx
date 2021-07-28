import React from "react";
import style from "./RemoteJob.module.css"
import styleContainer from './../common/styles/Container.module.css'

const RemoteJob = () => {
    const takeMe = () => {
        alert('Благодарю')
    }
    return (
        <div className={style.remoteJob}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Рассмотрю варианты удаленной работы</h3>
                <button name={'takeMe'} onClick={takeMe}>Нанять меня</button>
            </div>
        </div>
    )

}

export default RemoteJob

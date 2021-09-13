import React from "react";
import style from "./RemoteJob.module.scss"
import styleContainer from './../common/styles/Container.module.css'

const RemoteJob = () => {
    const takeMe = () => {
        alert('Благодарю!!! уже Лечу...')
    }
    return (
        <div className={style.remoteJob}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>I will consider options for remote work</h3>
                <div className={style.linkWrap}>
                    <a className={'toHireMe'} onClick={takeMe}>Hire me</a>
                </div>
            </div>
        </div>
    )

}

export default RemoteJob

import React from "react";
import style from "./AboutMe.module.css"
import styleContainer from './../common/styles/Container.module.css'

const AboutMe = () => {

    return (
        <div className={style.aboutMe}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.info}>
                    <span>Привет!</span>
                    <h1>Меня зовут Асмоловский Антон</h1>
                    <p>Я человек с планеты Земля</p>
                </div>
                <div className={style.photo}>Photo</div>
            </div>
        </div>
    )

}

export default AboutMe

import React from "react";
import style from "./AboutMe.module.scss"
import styleContainer from './../common/styles/Container.module.css'


const AboutMe = () => {

    return (
        // <div className={style.aboutMe}>
        //     <div className={`${styleContainer.container} ${style.container}`}>
        //         <div className={style.info}>
        //             <span>Привет!</span>
        //             <h1>Меня зовут Асмоловский Антон</h1>
        //             <p>Я человек с планеты Земля</p>
        //         </div>
        //         <div className={style.photo}>Photo</div>
        //     </div>
        // </div>

        <section className={style.aboutMe}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <div className={style.info}>
                    <div>
                        <h1>Anton</h1>
                        <h2>smolovskiy</h2>
                    </div>

                    <p className={style.intro}>I'm a lead programmer && service engeener, from Russia.</p>
                    <p className={style.description}>At work, I program industrial controllers, make sure that everyone
                        has a stable Internet and peripheral equipment does not fail.
                        In my spare time, I do web development, play with children and travel on a motorcycle.</p>
                </div>
                <div className={style.photo}>
                    <img src="#"
                         alt="anton asmolovskiy"/>
                    <svg width="100px" height="100px" viewBox="0 0 42 42" className="donut">
                        <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"> </circle>
                        <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                stroke="#d2d3d4" stroke-width="3"> </circle>
                        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                stroke="#ce4b99" stroke-width="3" stroke-dasharray="85 15"
                                stroke-dashoffset="25"> </circle>
                        <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                                stroke="#b1c94e" stroke-width="3" stroke-dasharray="15 85"
                                stroke-dashoffset="25"> </circle>
                    </svg>

                </div>
            </div>
        </section>
    )

}

export default AboutMe



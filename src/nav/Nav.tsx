import React from "react";
import style from "./Nav.module.css"

const Nav = () => {

    return (
        <div className={style.nav}>
            <a href="main">Главная</a>
            <a href="skills">Опыт</a>
            <a href="works">Проекты</a>
            <a href="contacts">Контакты</a>
        </div>
    )

}

export default Nav

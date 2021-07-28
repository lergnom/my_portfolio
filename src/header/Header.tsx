import React from "react";
import style from "./Header.module.css"
import Nav from "../nav/Nav";
import container from "./../common/styles/Container.module.css"

const Header = () => {

    return (
        <div className={style.header}>
            <div className={container.container}>
                <Nav/>
            </div>
        </div>
    )

}

export default Header

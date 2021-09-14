import React from "react";
import style from "./Header.module.scss"
import Nav from "../nav/Nav";
import container from "../common/styles/Container.module.scss";



const Header = () => {

    return (
        <div className={style.header}>
            {/*<div className={container.container}>*/}
                <Nav/>
            {/*</div>*/}
        </div>
    )

}

export default Header

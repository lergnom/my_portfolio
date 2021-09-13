import React from "react";
import style from "./Footer.module.scss"
import container from "./../common/styles/Container.module.css"

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.container}`}>
                <h3 className={style.title}>Anton Asmolovskiy</h3>
                <div className={style.social}>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                </div>
                <p className={style.copyright}>© 2021 All rights reserved</p>

            </div>
        </div>
    )

}

export default Footer

import React from "react";
import style from "./Footer.module.css"
import container from "./../common/styles/Container.module.css"

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.container}`}>
                <h3 className={style.title}>Антон Асмоловский</h3>
                <div className={style.social}>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                    <a  className={style.socialIcon} href="#"></a>
                </div>
                <p className={style.copyright}>© 2021 Все права защищены</p>

            </div>
        </div>
    )

}

export default Footer

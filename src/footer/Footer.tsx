import React from "react";
import style from "./Footer.module.scss"
import container from "./../common/styles/Container.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faLinkedinIn, faVk} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    return (
        <div className={style.footer}>
            <div className={`${container.container} ${style.container}`}>
                <h3 className={style.title}>Anton Asmolovskiy</h3>
                <ul className={style.social}>
                    <li><a href="https://github.com/lergnom"
                           title="Follow me on GitHub"
                           target="_blank"><FontAwesomeIcon icon={faGithub}/></a></li>
                    <li><a href="https://au.linkedin.com/in/lergnom"
                           title="Connect with me on Linkedin"
                           target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                    </li>
                    <li><a href="https://www.facebook.com/lergnom"
                           title="Like me on Facebook"
                           target="_blank"><FontAwesomeIcon icon={faFacebookF}/></a></li>
                    <li><a href="https://vk.com/lergnom"
                           title="Like me on VK" target="_blank"><FontAwesomeIcon icon={faVk}/></a>
                    </li>

                </ul>
                <p className={style.copyright}>© 2021 All rights reserved</p>

            </div>
        </div>
    )

}

export default Footer

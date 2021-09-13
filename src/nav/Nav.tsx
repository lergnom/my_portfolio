import React from "react";
import style from "./Nav.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCodepen, faFacebookF, faGithub, faLinkedinIn, faVk} from '@fortawesome/free-brands-svg-icons';

const Nav = () => {

    return (
        <nav className={style.nav}>
            <FontAwesomeIcon icon={["fal", "coffee"]}/>

            <ul>
                <li>
                    <a href="main">portfolio</a>
                </li>
                <li>
                    <a href="main">skills</a>
                </li>
                <li>
                    <a href="main">contacts</a>
                </li>
                <li>
                    <ul className={style.social}>
                        <li><FontAwesomeIcon icon={faCodepen}/></li>
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
                </li>
            </ul>


        </nav>
    )

}

export default Nav

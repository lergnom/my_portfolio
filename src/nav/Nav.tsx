import React from "react";
import style from "./Nav.module.scss"

const Nav = () => {

    return (
        <nav className={style.nav}>
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
                        <li className={style.twitter}><a href="https://www.twitter.com/AdhamDannaway"
                                                         title="Follow me on Twitter"
                                                         target="_blank">twitter</a></li>
                        <li className={style.linkedin}><a href="https://au.linkedin.com/in/adhamdannaway"
                                                          title="Connect with me on Linkedin"
                                                          target="_blank">linkedin</a></li>
                        <li className={style.facebook}><a href="https://www.facebook.com/ilikeadham"
                                                          title="Like me on Facebook"
                                                          target="_blank">facebook</a></li>
                        <li className={style.instagram}><a href="https://www.instagram.com/adham.dannaway"
                                                           title="Follow me on Instagram" target="_blank">instagram</a>
                        </li>
                    </ul>
                </li>
            </ul>


        </nav>
    )

}

export default Nav

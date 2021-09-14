import React from "react";
import style from "./Contacts.module.scss"
import styleContainer from '../common/styles/Container.module.scss'

const Contacts = () => {

    return (
        <div className={style.contacts}>
            <a id={"contacts"}></a>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Contacts</h3>
                <form className={style.form} action="">
                    <div className={style.leftSide}>
                        <label>Name:</label>
                        <input className={style.input} type="text" name="fio" placeholder="Anton"/>

                        <label>Email address</label>
                        <input className={style.input} type="text" name="mail" placeholder="lergnom@mail.ru"/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea className={`${style.input} ${style.rightSide}`} name="description"></textarea>
                        <button className={`toHireMe ${style.submit}`} name="sendForm" value="formButton"
                                type="submit">send
                        </button>
                    </div>


                </form>
            </div>

        </div>
    )

}

export default Contacts

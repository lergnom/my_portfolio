import React from "react";
import style from "./Contacts.module.css"
import styleContainer from './../common/styles/Container.module.css'

const Contacts = () => {

    return (
        <div className={style.contacts}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3 className={style.title}>Контакты</h3>
                <form className={style.form} action="">
                    <label>Ваше имя:</label>
                    <input type="text" name="fio" placeholder="Антон" value=""/>
                    <label>Телефон:</label>
                    <input type="text" name="tel" placeholder="9210707007" value=""/>
                    <label>Почта:</label>
                    <input type="text" name="mail" placeholder="mail@gmail.com" value=""/>
                    <label>Сообщение:</label>
                    <textarea name="description"></textarea>
                    <button name="sendForm" value="formButton" type="submit">Отправить
                    </button>
                </form>
            </div>

        </div>
    )

}

export default Contacts

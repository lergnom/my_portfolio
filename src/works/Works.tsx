import React from "react";
import style from "./Works.module.css"
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";
import {logRoles} from "@testing-library/react";


const Works = () => {

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works}>
                    <Work workTitle={"Социальная сеть"} workDesc={'Пример работы'}
                          workImg={'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg'}
                          workLink={'#'}/>
                    <Work workTitle={"Список дел"}
                          workDesc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cupiditate eveniet harum provident? Ab\n' +
                          '    consequatur corporis dolores earum eius eligendi esse ex in incidunt itaque iusto, optio quae, tenetur.'}
                          workImg={'sdfsdf'} workLink={'#'}/>
                </div>
            </div>
        </div>
    )

}

export default Works

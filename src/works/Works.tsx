import React from "react";
import style from "./Works.module.scss"
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";

import forestTravel from './myworks/HTML/forestTravel.jpg'


const Works = () => {

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h3>My works</h3>
                <div className={style.works}>
                    <Work workTitle={"Социальная сеть"} workDesc={'Пример работы'}
                          workImg={forestTravel}
                          workLink={'#'}/>
                    <Work workTitle={"Список дел"}
                          workDesc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cupiditate eveniet harum provident? Ab\n' +
                          '    consequatur corporis dolores earum eius eligendi esse ex in incidunt itaque iusto, optio quae, tenetur.'}
                          workImg={'sdfsdf'} workLink={'#'}/>
                    <Work workTitle={"Список дел"}
                          workDesc={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aspernatur cupiditate eveniet harum provident? Ab\n' +
                          '    consequatur corporis dolores earum eius eligendi esse ex in incidunt itaque iusto, optio quae, tenetur.'}
                          workImg={'sdfsdf'} workLink={'#'}/>
                    <Work workTitle={"Социальная сеть"} workDesc={'Пример работы'}
                          workImg={'_59728757-stock-photo-waiting-for-a-new-day.jpg'}
                          workLink={'#'}/>

                </div>
            </div>
        </div>
    )

}

export default Works

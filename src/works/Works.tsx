import React from "react";
import style from "./Works.module.scss"
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";

import forestTravel from './myworks/HTML/forestTravelnew.jpg';
import unitLanding from './myworks/HTML/unit.jpg'
import protectBuy from './myworks/HTML/protectBuy.jpg'


const Works = () => {

    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h3>My works</h3>
                <div className={style.works}>
                    <Work workTitle={"Forest Travel"} workDesc={'Travel site layout. Training work.'}
                          workImg={forestTravel}
                          workLink={'http://forest.ogsr.ru/index.html'}/>
                    <Work workTitle={"Unit. "}
                          workDesc={'Example landing page product. Training work.'}
                          workImg={unitLanding} workLink={'http://unit.ogsr.ru/'}/>
                    <Work workTitle={"Protect buy. Delivery."}
                          workDesc={'Development of a web page for an entrepreneur engaged in the delivery of goods from online stores to customers.'}
                          workImg={protectBuy} workLink={'https://ogsr.ru'}/>
                    <Work workTitle={"Социальная сеть"} workDesc={'Пример работы'}
                          workImg={'_59728757-stock-photo-waiting-for-a-new-day.jpg'}
                          workLink={'#'}/>

                </div>
            </div>
        </div>
    )

}

export default Works

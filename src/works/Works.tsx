import React from "react";
import style from "./Works.module.scss"
import styleContainer from './../common/styles/Container.module.css'
import Work from "./work/Work";

import forestTravel from './myworks/HTML/forestTravelnew.jpg';
import unitLanding from './myworks/HTML/unit.jpg';
import protectBuy from './myworks/HTML/protectBuy.jpg';
import smsGoi from './myworks/HTML/sendsmsGoi.jpg';
import socialProject from './myworks/HTML/social.jpg';
import todolistProject from './myworks/HTML/todolist.jpg';


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

                    <Work workTitle={"Social network "}
                          workDesc={'Single page application with React/Redux. Training work.'}
                          workImg={socialProject} workLink={'https://github.com/lergnom/social'}/>

                    <Work workTitle={"Todolist "}
                          workDesc={'Single page application with React/Redux. Training work.'}
                          workImg={todolistProject} workLink={'https://github.com/lergnom/Todolist'}/>


                    <Work workTitle={"Protect buy. Delivery."}
                          workDesc={'Development of a web page for an entrepreneur engaged in the delivery of goods from online stores to customers.'}
                          workImg={protectBuy} workLink={'https://ogsr.ru'}/>
                    <Work workTitle={"Secretary's room"}
                          workDesc={'Secretary\'s office designed for the pandemic. For prompt notification of the Institute staff. Using sending messages through a mobile operator and via the Viber messenger.'}
                          workImg={smsGoi}
                          workLink={'https://sendsms.ogsr.ru/'}/>

                </div>
            </div>
        </div>
    )

}

export default Works

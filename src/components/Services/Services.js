
import React from "react";
import { BiAlarm, BiTaxi, BiArchiveIn } from 'react-icons/bi';

import "./Services.css"

function Services(){
    return(
        <>
            <div className="section_flex section_title">
                Services
            </div>
            <div className="section_flex">
                <div className="service_card">
                    <div className="service_icon">
                        <BiAlarm color="#728780" size={50} />
                    </div>
                    <p>ON TIME</p>
                </div>
                <div className="service_card">
                    <div className="service_icon">
                        <BiTaxi color="#728780" size={50} />
                    </div>
                    <p>DELIVERY</p>
                </div>
                <div className="service_card">
                    <div className="service_icon">
                        <BiTaxi color="#728780" size={50} />
                    </div>
                    <p>DELIVERY</p>
                </div>
            </div>
        </>
    )
}

export default Services

import React from "react";
import { BiAlarm, BiTaxi, BiArchiveIn } from 'react-icons/bi';

import "./Services.css"

function Services(){
    return(
        <>
            <div className="section_flex service_flex_div">
                <div className="service_card">
                    <div className="service_icon">
                        <BiAlarm color="var(--primary)" size={70} />
                    </div>
                    <p>ON TIME</p>
                    <span>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                </div>
                <div className="service_card">
                    <div className="service_icon">
                        <BiTaxi color="var(--primary)" size={50} />
                    </div>
                    <p>DELIVERY</p>
                    <span>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                </div>
                <div className="service_card">
                    <div className="service_icon">
                        <BiArchiveIn color="var(--primary)" size={50} />
                    </div>
                    <p>DELIVERY</p>
                    <span>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</span>
                </div>
            </div>
        </>
    )
}

export default Services
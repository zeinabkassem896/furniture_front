import React, { useState, useEffect } from "react";
import Img6 from "../../Images/matas-katinas-7ITfJfAxxY4-unsplash.jpg";
import Img7 from "../../Images/ilya-mondryk-gR9Iyu7eYUI-unsplash.jpg";
import Img8 from "../../Images/the-ian-ZCoqcrWp9GY-unsplash.jpg";
import "./Testimonial.css";


import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { Carousel } from '@trendyol-js/react-carousel';



function Testimonial(){
    const [showSlides, setShowSlides] = useState(3);

    useEffect(()=>{
        if(window.innerWidth <= 480)
            setShowSlides(1);

    },[])

    return(
        <>
        <div >
        <Carousel className="section_flex testimonial_carousel"
            show={showSlides} slide={1} 
            swiping={true} 
            responsive={true} 
            useArrowKeys={false} 
            autoplay={true} 
            rightArrow={<BiChevronRight className="testimonial_icon testimonial_icon_right" size={50}/>}
            leftArrow={<BiChevronLeft className="testimonial_icon testimonial_icon_left" size={50}/>}>
            <div className="testimonial_div">
                <img alt="shirt 1" src={Img6}/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 2" src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 4" src={Img8} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 5" src={Img6} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 6" src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 7" src={Img8} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img alt="shirt 8" src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
        </Carousel>
        </div>
        </>
    )
}

export default Testimonial;
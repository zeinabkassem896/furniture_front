import React, { useState } from "react";
import Img6 from "../../Images/matas-katinas-7ITfJfAxxY4-unsplash.jpg";
import Img7 from "../../Images/ilya-mondryk-gR9Iyu7eYUI-unsplash.jpg";
import Img8 from "../../Images/the-ian-ZCoqcrWp9GY-unsplash.jpg";
import "./Testimonial.css";
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';

import { Carousel } from '@trendyol-js/react-carousel';



function Testimonial(){
    return(
        <>
        <div className="section_flex section_title">
            Testimonials
        </div>
        <div >
        <Carousel className="section_flex" show={3} slide={3} swiping={true} responsive={true} useArrowKeys={false} autoplay={true} rightArrow={<BiChevronRight className="testimonial_icon" size={50}/>} leftArrow={<BiChevronLeft className="testimonial_icon" size={50}/>}>
            <div className="testimonial_div">
                <img src={Img6}/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img8} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img6} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img8} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
            <div className="testimonial_div">
                <img src={Img7} className="testimonial_img"/>
                <p>lorem ipsem</p>
            </div>
        </Carousel>
        </div>
        </>
    )
}

export default Testimonial;
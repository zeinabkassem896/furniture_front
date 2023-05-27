import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Img6 from "../../Images/matas-katinas-7ITfJfAxxY4-unsplash.jpg";



function Testimonial(){
    const handleDragStart = (e) => e.preventDefault();

    const items = [
    <img src={Img6} onDragStart={handleDragStart} role="presentation" />,
    <img src={Img6} onDragStart={handleDragStart} role="presentation" />,
    <img src={Img6} onDragStart={handleDragStart} role="presentation" />,
    ];
    return(
        <>
        <div className="section_flex section_title">
            Testimonials
        </div>
        <div className="section_flex">
            <AliceCarousel mouseTracking items={items} />
        </div>
        </>
    )
}

export default Testimonial;
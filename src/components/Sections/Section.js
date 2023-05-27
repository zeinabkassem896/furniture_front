import React from "react";
import "./Section.css";
import Img1 from "../../Images/fast-fashion-vs-slow-sustainable-fashion.jpg";
import Img2 from "../../Images/im3.jpg";
import Img3 from "../../Images/young-handsome-man-choosing-cloth-shop.jpg";

function Section(){
    return(
    <>
        <div className="section_flex section_title">
            Media
        </div>
        <div className="section_flex section_flex_div">
            <div className="section_flex_part1">
                    <img src={Img1}/>
            </div>
            <div className="section_part2">
                <div><img className="section_part2_img" src={Img2}/></div>
                <div><img className="section_part2_img" src={Img3}/></div>
            </div>
        </div>
    </>
    )
}
export default Section;
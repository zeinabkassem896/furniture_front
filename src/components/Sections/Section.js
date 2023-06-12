import React, { useState } from "react";
import "./Section.css";
import Img1 from "../../Images/fast-fashion-vs-slow-sustainable-fashion.jpg";
import Img2 from "../../Images/im3.jpg";
import Img3 from "../../Images/young-handsome-man-choosing-cloth-shop.jpg";

function Section() {
  return (
    <>
      <div className="section_flex section_title">
            Media
      </div>
      <div className="section_grid">
        <div className="section_grid_item1">
          <img src={Img1}/>
        </div>
        <div className="section_grid_item2">
          <img src={Img2}/>
        </div>
        <div className="section_grid_item2" >
          <img src={Img3}/>
        </div>
      </div>
    </>
  );
}
export default Section;

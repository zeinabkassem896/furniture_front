import React from "react";
import Img1 from "../../Images/reza-delkhosh-iRAOJYtPHZE-unsplash.jpg"
import Img2 from "../../Images/judeus-samson-0UECcInuCR4-unsplash.jpg";
import Img3 from "../../Images/juri-gianfrancesco-UCEtRnp8qR0-unsplash.jpg";
import Img4 from "../../Images/laura-chouette-zU8hYK_yWLI-unsplash.jpg";
import Img5 from "../../Images/sincerely-media-9ShY-Tq70Mc-unsplash.jpg";
import Img6 from "../../Images/matas-katinas-7ITfJfAxxY4-unsplash.jpg";
import Img7 from "../../Images/ilya-mondryk-gR9Iyu7eYUI-unsplash.jpg";
import Img8 from "../../Images/the-ian-ZCoqcrWp9GY-unsplash.jpg";
import Rating from "../Rating/Rating";
import "./Category.css"

function Category(){
    return(
        <>
        <div className="section_flex section_title">
            Categories
        </div>
        <div className="section_flex">
            <button className="category_button category_active">All Categories</button>
            <button className="category_button">Men's Categories</button>
            <button className="category_button">Women's Categories</button>
        </div>
        <div className="section_flex category_flex">
            <div className="category_card">
                <img src={Img1}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={3}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img2}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={4}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img3}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={2}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img4}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={4}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img5}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={3}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img6}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={2}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img7}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={5}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img8}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={1}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img6}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={1}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img2}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={1}/></p>
                </div>
            </div>
            <div className="category_card">
                <img src={Img5}/>
                <div>
                    <p>title</p>
                    <p><Rating fill={1}/></p>
                </div>
            </div>
        </div>
        <div className="category_button_div">
            <button className="category_button">Load More</button>
        </div>
    </>
    )
}

export default Category;
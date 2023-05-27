import React from "react";
import "./Category.css"

function Category(){
    return(
        <>
        <div className="section_flex section_title">
            Categories
        </div>
        <div className="section_flex">
            <button className="category_button">All Categories</button>
            <button className="category_button">Men's Categories</button>
            <button className="category_button">Women's Categories</button>
        </div>
        <div className="section_flex">
            <div className="category_card">zeinab</div>
            <div className="category_card">zeinab</div>
            <div className="category_card">zeinab</div>
            <div className="category_card">zeinab</div>
        </div>
    </>
    )
}

export default Category;
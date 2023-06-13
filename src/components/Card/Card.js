import React from 'react';
import Rating from "../Rating/Rating";

import './Card.css';

function Card({image, title, rating}){
    return(
        <div className="category_card">
            <img alt="category 1" src={image}/>
            <div>
                <p>{title}</p>
                <p><Rating fill={rating}/></p>
            </div>
        </div>
    )
}

export default Card;
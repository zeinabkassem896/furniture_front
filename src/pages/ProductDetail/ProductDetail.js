import React, { useEffect, useContext } from "react";
import { AppContext } from "../../Context";
import Title from "../../components/Title/Title";
import Rating from "../../components/Rating/Rating";
import RoundButton from "../../components/RoundButton/RoundButton";

import Img1 from "../../Images/clothes-store-with-rack-clothes.jpg";

import './ProductDetail.css';

function ProductDetail(){
    const { dispatchUserEvent } = useContext(AppContext);

    useEffect(()=>{
        dispatchUserEvent('/product-detail');
    },[])

    return(
        <>
        <Title title={'Product Detail'}/>
        <div className="product_detail_flex">
            <div className="product_detail_div1">
                <img src={Img1}/>
            </div>
            <div className="product_detail_div1">
                <div>
                    <h1>Title</h1>
                    <Rating fill={3}/>
                    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s standard dummy text ever since the 1500s
                        standard dummy text ever since the 1500s standard dummy text ever since the 1500s
                        standard dummy text ever since the 1500s
                    </p>
                    <h1>$100</h1>
                </div>
                <div className="product_detail_buttons">
                    <RoundButton title="Add to Cart" greenButton='greenButton'/>
                    <RoundButton title="Continue Shopping"/>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default ProductDetail;
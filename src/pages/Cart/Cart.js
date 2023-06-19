import React, { useEffect, useContext } from 'react';
import { AppContext } from "../../Context";
import Title from '../../components/Title/Title';

import Img1 from "../../Images/alexandra-gorn-WF0LSThlRmw-unsplash.jpg"

import './Cart.css';


function Cart(){
    const { dispatchUserEvent } = useContext(AppContext);

    useEffect(()=>{
        dispatchUserEvent('/cart');
    },[])

    return(
        <>
        <Title title={'Cart'}/>
        <table className="cart_table">
            <tr>
                <th>image</th>
                <th>title</th>
                <th>qty</th>
                <th>price</th>
            </tr>
            <tr>
                <td>
                    <img src={Img1} className='cart_image'/>
                </td>
                <td>title</td>
                <td>
                    <button className="cart_button">+</button>
                    <input className="cart_quantity" value={1} readOnly/>
                    <button className='cart_button'>-</button>
                </td>
                <td>price</td>
            </tr>
            <tr>
                <td>
                    <img src={Img1} className='cart_image'/>
                </td>
                <td>title</td>
                <td>qty</td>
                <td>price</td>
            </tr>
            <tr>
                <td>
                    <img src={Img1} className='cart_image'/>
                </td>
                <td>title</td>
                <td>qty</td>
                <td>price</td>
            </tr>
            <tr>
                <td>
                    <img src={Img1} className='cart_image'/>
                </td>
                <td>title</td>
                <td>qty</td>
                <td>price</td>
            </tr>
            <tr>
                <td>
                    <img src={Img1} className='cart_image'/>
                </td>
                <td>title</td>
                <td>qty</td>
                <td>price</td>
            </tr>
        </table>
        </>
    )
}

export default Cart
import React from "react";
import "./Header.css";
import { BiUser, BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";


function Header(){

    return(
            <div className={window.location.pathname === '/' ? 'header header_home' : 'header'}>
                <div className="header_div header_flex">
                    <Link className="header_menu" to="/">Logo</Link>
                    <div className="header_flex header_rest"> 
                        <Link className="header_menu" to="/">Home</Link>
                        <Link className="header_menu" to="/product">Products</Link>
                        <Link className="header_menu" to="/about">ABOUT</Link>
                        <Link to="/contact"><button className="header_button">CONTACT ME</button></Link>
                    </div>
                    <div className="header_flex header_icons">
                    <div className="header_menu">
                        <BiCart size={35}/>
                        <div className="header_counter header_flex">20</div>
                    </div>
                    <div className="header_menu">
                        <BiUser size={30}/>
                    </div>
                    </div>
                </div>
            </div>
    )
}

export default Header;
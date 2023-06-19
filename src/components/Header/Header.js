import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from '../../Context';


import { ClickAwayListener } from '@mui/base';
import { BiUser, BiCart } from 'react-icons/bi';

import "./Header.css";


function Header(){
    const { path } = useContext(AppContext);
    const[ openMobileMenu , setOpenMobileMenu] = useState(0);

    const toggleMobileMenu = ()=>{
        if(openMobileMenu === 1){
            document.body.style.overflow = "scroll";
            setOpenMobileMenu(0);
        }
        else{
            setOpenMobileMenu(1);
            document.body.style.overflow = "hidden"
        }
    }

    const handleClickAway = ()=>{
        document.body.style.overflow = "scroll";
        document.getElementById("checkbox").click()
        setOpenMobileMenu(0);
    }
   

    return(
            <div className={path === '/' ? 'header header_home' : 'header'}>

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
                            <Link to="/cart"><BiCart size={35} color="var(--secondary)"/></Link>
                            <div className="header_counter header_flex">20</div>
                        </div>
                        <div className="header_menu">
                            <BiUser size={30}/>
                        </div>
                    </div>
                </div>
                <ClickAwayListener onClickAway={handleClickAway}>

                <div className="mobile_menu">
                    <Link className="mobile_menu_home_list" to="/"> Logo </Link>

                    <div>
                        <input type="checkbox" id="checkbox" />
                        <label htmlFor="checkbox" className="toggle" onClick={toggleMobileMenu}>
                            <div className="bars" id="bar1"></div>
                            <div className="bars" id="bar2"></div>
                            <div className="bars" id="bar3"></div>
                        </label>
                        
                        <div className={openMobileMenu === 0 ? "mobile_menu_page_hidden" : "mobile_menu_page" }>
                            <Link className="mobile_menu_list" to="/" onClick={handleClickAway}>Home</Link>
                            <Link className="mobile_menu_list" to="/product" onClick={handleClickAway}>PRODUCTS</Link>
                            <Link className="mobile_menu_list" to="/about" onClick={handleClickAway}>ABOUT</Link>
                            <Link className="mobile_menu_list" to="/contact" onClick={handleClickAway}>CONTACT US</Link>
                        </div>
                        
                    </div>
               
                </div>
                </ClickAwayListener>

            </div>
    )
}

export default Header;
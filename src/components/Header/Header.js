import React, { useEffect, useState } from "react";
import { ClickAwayListener } from '@mui/base';
import "./Header.css";
import { BiUser, BiCart, BiMenu } from 'react-icons/bi';
import { Link } from "react-router-dom";


function Header(){

    const[ openMobileMenu , setOpenMobileMenu] = useState(0)

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
                <ClickAwayListener onClickAway={handleClickAway}>

                <div className="mobile_menu">
                    <div> logo</div>
                    <div>
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox" class="toggle" onClick={toggleMobileMenu}>
                            <div class="bars" id="bar1"></div>
                            <div class="bars" id="bar2"></div>
                            <div class="bars" id="bar3"></div>
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
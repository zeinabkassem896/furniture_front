import React from "react";
import "./Header.css";
import { BiUser, BiCart, BiMenu } from 'react-icons/bi';


function Header(){
    return(
        <div className="header">
            <div className="header_div header_flex">
                <div>LOGO</div>
                <div className="header_flex header_rest">
                  <div className="header_menu">HOME</div>
                  <div className="header_menu">CATEGORY</div>
                  <div className="header_menu">ABOUT</div>
                  <button className="header_button">CONTACT ME</button>
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
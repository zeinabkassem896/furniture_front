import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsDot, BsGithub } from 'react-icons/bs';
import { FaPhone } from "react-icons/fa";
import { FiMail } from 'react-icons/fi'

import "./Footer.css";
import '../Header/Header.css'

function Footer(){
    return(
        <>
            <div className='footer_div'>
                <div>Logo</div>
                <div className='footer_div_flex'>
                  <div className="header_menu footer_a">HOME</div>
                  
                  <div className="header_menu footer_a">CATEGORY</div>
                  <div className="header_menu footer_a">ABOUT</div>
                </div>
                <div className='footer_div_flex'>
                    <div className='header_menu footer_a'>All Categories</div>
                    <div className='header_menu footer_a'>Women's Category</div>
                    <div className='header_menu footer_a'>Men's Category</div>
                </div>
                <div className='footer_icon'>
                    <a href="tel:+96171120512"><FaPhone size={23}/></a>
                    <a href="mailto:zeinabkassem896@gmail.com"><FiMail size={25}/></a>
                    <a href="https://github.com/"><BsGithub size={25}/></a>
                    
                </div>
            </div>
            <div className='footer_copyright'>
                <BiCopyright size={25}/> copyright 2023 <BsDot size={25}/> Zeinab Kassem
            </div>
        </>
        
    )
}

export default Footer;
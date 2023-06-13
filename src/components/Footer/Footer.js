import React from 'react';
import { BiCopyright } from 'react-icons/bi';
import { BsDot, BsGithub } from 'react-icons/bs';
import { FaPhone } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';

import { Link } from "react-router-dom";


import "./Footer.css";
import '../Header/Header.css'

function Footer(){
    return(
        <>
            <div className='footer_div'>
                <div className='footer_logo'>Logo</div>
                <div className='footer_div_flex footer_div_flex_1'>
                  <Link to="/" className="header_menu footer_a">HOME</Link>
                  <Link to="/product" className="header_menu footer_a">CATEGORY</Link>
                  <Link to="/about" className="header_menu footer_a">ABOUT</Link>
                </div>
                <div className='footer_div_flex footer_div_flex_2'>
                    <Link to="/product" className='header_menu footer_a'>All Categories</Link>
                    <Link to="/product" className='header_menu footer_a'>Women's Category</Link>
                    <Link to="/product" className='header_menu footer_a'>Men's Category</Link>
                </div>
                <div className='footer_icon'>
                    <a href="tel:+96171120512" className='header_menu footer_a header_icon'><FaPhone className='footer_icon' size={23}/></a>
                    <a href="mailto:zeinabkassem896@gmail.com" className='header_menu footer_a header_icon'><FiMail className='footer_icon' size={25}/></a>
                    <a href="https://github.com/" className='header_menu footer_a header_icon'><BsGithub className='footer_icon' size={25}/></a>
                    
                </div>
            </div>
            <div className='footer_copyright'>
                <BiCopyright size={25}/> copyright 2023 <BsDot size={25}/> Zeinab Kassem
            </div>
        </>
        
    )
}

export default Footer;
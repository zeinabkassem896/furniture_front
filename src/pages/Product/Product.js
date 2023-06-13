import React, { useState } from 'react';
import './Product.css';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import RoundButton from '../../components/RoundButton/RoundButton';
import { BiSearch } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';


import Img1 from '../../Images/clothes-store-with-rack-clothes.jpg'

function Product(){
    const [showSearch, setShowSearch] = useState(true)
    return(
        <>
        <Title title={'Products'}/>
        <div className='section_flex'>
            <RoundButton title='all' active={true}/>
            <RoundButton title='women'/>
            <RoundButton title='men'/>

        </div>
        <div className='home_page product_search'>
            {showSearch ? 
                <BiSearch size={30} onClick={()=> setShowSearch(false)}/> :
                <div>
                    <input placeholder="search by name.."/>
                    <BsX size={30} onClick={()=> setShowSearch(true)}/>
                </div>
            }
          
        </div>
        <div className='home_page product_flex'>
            <div className='product_filter'>Filtering</div>
            <div className='product_card'>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>
                <Card title={'title'} image={Img1} rating={3}/>

            </div>
        </div>
        
        </>
     
    )
}

export default Product
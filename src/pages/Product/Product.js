import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../Context';
import Card from '../../components/Card/Card';
import Title from '../../components/Title/Title';
import RoundButton from '../../components/RoundButton/RoundButton';

import { BiSearch } from 'react-icons/bi';
import { BsX } from 'react-icons/bs';

import Img1 from '../../Images/clothes-store-with-rack-clothes.jpg'

import './Product.css';


function Product(){
    const { dispatchUserEvent } = useContext(AppContext);

    const [showSearch, setShowSearch] = useState(true);
    const [items, setItems] = useState([
        {title:'name', rating: 5},
        {title:'zeinab', rating: 3},
        {title:'kassem', rating: 4},
        {title:'shirt', rating: 4},
        {title:'dress', rating: 5},
        {title:'skirt', rating: 5},
        {title:'saada', rating: 3},
        {title:'rayan', rating: 2},
        {title:'wissam', rating: 3},
        {title:'walid', rating: 3},
        {title:'hasan', rating: 4},
        {title:'eva', rating: 5},
        {title:'tania', rating: 4},
        {title:'tia', rating: 2},
    ]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [searchContent, setSearchContent] = useState('')


    useEffect(()=>{
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setFilteredItems(items);
        dispatchUserEvent('/product');

    },[])


    useEffect(()=>{
        changeFilteredItem();
    },[searchContent])

    const changeFilteredItem = ()=>{
        if(searchContent !== ''){
            let filterSearch = items.filter((each) => each.title.includes(searchContent));
            setFilteredItems(filterSearch)
        }
        else
            setFilteredItems(items)
    }

    return(
        <>
        <Title title={'Products'}/>
        <div className='section_flex'>
            <RoundButton title='all' active={true}/>
            <RoundButton title='women'/>
            <RoundButton title='men'/>

        </div>
        
            {showSearch ? 
                <div className='home_page product_search'>
                    <BiSearch size={30} onClick={()=> setShowSearch(false)}/>
                </div> :
                <div className='home_page product_search product_search_icon'>
                    <div>
                        <input placeholder="search by name.." value={searchContent} onChange={(e)=> setSearchContent(e.target.value)} autoFocus/>
                        <BsX size={30} onClick={()=> (setSearchContent(''),setShowSearch(true))}/>
                    </div>
                </div>
            }
          
        <div className='home_page product_flex'>
            <div className='product_filter'>Filtering</div>
            <div className='product_card'>
                {filteredItems.map((each,index)=>(
                    <Card key={index} title={each.title} image={Img1} rating={each.rating}/>
                ))}
            </div>
        </div>
        
        </>
     
    )
}

export default Product
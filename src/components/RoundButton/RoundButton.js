import React from 'react'
import './RoundButton.css';

function RoundButton({ title, active=false}){
    return(
        <button className={active ? 'category_button category_active' : 'category_button'}>{title}</button>

    )
}

export default RoundButton;
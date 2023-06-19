import React from 'react'
import './RoundButton.css';

function RoundButton({ title, active=false, greenButton=''}){
    return(
        <button className={active ? `${greenButton} category_button category_active` : `category_button ${greenButton}`}>{title}</button>
    )
}

export default RoundButton;
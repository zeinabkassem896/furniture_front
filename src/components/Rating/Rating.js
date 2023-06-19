import React from "react";
import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

function Rating({fill}){
    const fakeArray= Array(5).fill(0);
    return(
        <>
        {fakeArray.map((each,index)=>(
            index+1 > fill ?  <BiStar color='var(--primary)' key={index}/> :  <FaStar key={index} color="var(--primary)"/>
        ))}
        </>
    )
}

export default Rating
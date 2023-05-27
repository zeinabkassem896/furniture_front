import React, {useState} from "react";
import { BiStar } from "react-icons/bi";
import { FaStar } from "react-icons/fa";

function Rating({fill}){
    const [fakeArray, setFakeArray]= useState(Array(5).fill(0));
    return(
        <>
        {fakeArray.map((each,index)=>(
            index+1 > fill ?  <BiStar color="#728780" key={index}/> :  <FaStar key={index} color="#728780"/>
        ))}
        </>
    )
}

export default Rating
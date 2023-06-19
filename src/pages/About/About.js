import React, { useEffect, useContext } from 'react';
import { AppContext } from '../../Context';



function About(){
    const { dispatchUserEvent } = useContext(AppContext);

    useEffect(()=>{
        dispatchUserEvent('/about');
    },[])

    return(
        <h1>About</h1>
    )
}

export default About;
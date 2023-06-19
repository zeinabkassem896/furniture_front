import React, { useEffect, useContext } from 'react';
import { AppContext } from "../../Context";

import './NotFound.css';

function NotFound(){
    const { dispatchUserEvent } = useContext(AppContext);

    useEffect(()=>{
        dispatchUserEvent('/product-detail');
    },[])
    
    return(
        <div className='notfound'>
            <h1>Page Not Found</h1>

        </div>
    )
}

export default NotFound;
import React, { useState, useEffect } from "react";
import "./style.css";



// How chats/numbers are shown on whatsapp tab tiltle when you receive a message

const UseEffect = () => {

    const [myNum, setMyNum] = useState(0);

    useEffect (()=> {
        document.title = `Chats(${myNum})`;
    });
 

    return (
        <>
            <div className="center_div">
                <p>{ myNum }</p>
                <div className="button2" onWheel={() => setMyNum(myNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
            </div>
        </>
    )
}

export default UseEffect

import React from "react";
import "./style.css";

const UseEffect = () => {
    // const initialData = 10;
    const [myNum, setMyNum] = React.useState(0);
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

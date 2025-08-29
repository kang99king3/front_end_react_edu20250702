import React, { useState } from 'react';

const Test = () => {
    let [count,setCount]=useState(0);

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>{setCount(count+1)}}>버튼이다</button>        
        </div>
    );
};

export default Test;

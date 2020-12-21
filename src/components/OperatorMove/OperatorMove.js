import React,{useState} from 'react';

let OperatorMove = ()=>{
    return (
        <>  
            <div className="OperatorMove">
                <span>X方向：</span>
                <input/>
                <span>Y方向：</span>
                <input/>
                <span>持续时间：</span>
                <input/>
            </div>
        </>
    )
}

export default OperatorMove
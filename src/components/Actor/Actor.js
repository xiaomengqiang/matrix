import React,{useState} from 'react';

let Actor = ()=>{
    const [name,setName] = useState("hello");

    return (
        <>
            <div className="Actor">
                <div className="actor-inner"></div>
            </div>
        </>
    )
}

export default Actor;
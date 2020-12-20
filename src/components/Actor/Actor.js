import React,{useState} from 'react';
import tv from '../../assets/image/tv.svg';

let Actor = ()=>{
    const [name,setName] = useState("hello");

    return (
        <>
            <div className="Actor">
                <img src={tv}/>
                <div className="actor-inner"></div>
            </div>
        </>
    )
}

export default Actor;
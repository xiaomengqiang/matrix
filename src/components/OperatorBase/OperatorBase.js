import React,{useState} from 'react';
import OperatorMove from '../OperatorMove';

const OPERATOR_TYPE = [
    {name:'位移',rotate:'-30deg',classname:"svg-color-move"},
    {name:'旋转',rotate:'-70deg',classname:"svg-color-move"},
    {name:'缩放',rotate:'-110deg',classname:"svg-color-move"},
    {name:'拉伸',rotate:'-150deg',classname:"svg-color-move"}
]

let OperatorBase = ()=>{

    return (
        <>
            <div className="OperatorBase">
                <div className="operator-name">
                    平移
                    <div className="operator-svgs">
                        {
                            OPERATOR_TYPE.map((type)=>{
                                return (
                                    <div className="svg-warpper" style={{'transform':'rotate(' + type.rotate + ')'}}>
                                        <svg width="200" height="200" viewBox="0 0 200 200">
                                            <filter id="f1" x="0" y="0" width="150%" height="150%">
                                                <feOffset result="offOut" in="SourceAlpha" dx="-1" dy="-1" />
                                                <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
                                                <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                                            </filter>
                                            <circle cx="100" cy="100" r="60" filter="url(#f1)" fill="rgba(0,0,0,0)" strokeWidth="60" className={type.classname}/>
                                        </svg>
                                        <span className="svg-name">{type.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="operator-content">
                    <OperatorMove></OperatorMove>
                    <div className="operator-handler-warpper">
                        <div className="operator-add operator-handler"></div>
                        <div className="operator-delete operator-handler"></div>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default OperatorBase
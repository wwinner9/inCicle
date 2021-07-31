import React from 'react'
import './style.css'

export default function Widget(props){
    return(
        <div className="widget" style={{background:props.backColor,width:props.size}}> 
            <p>{props.name} <br/>{props.equival}</p>
            <p id='percents'>{props.percent}</p> 
        </div>
    );
}
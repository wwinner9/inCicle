import React from 'react' 
import {FcLeave} from 'react-icons/fc'
import './style.css'


export default function Card(props){
    return(
        <div className="cardContainer">
            <article>
                <header>
                <h3><FcLeave/> {props.title}</h3>
                </header>
                <div className="dateDiv">
                    <p>{props.date}</p>
                </div>
                <div className="cardContent">
                    {props.children}
                </div>
            </article>
        </div>
       
    );
} 
import React from 'react' 
import {FiEdit, FiImage, FiVideo} from 'react-icons/fi'
import './style.css'

export default function Newpost(){
    return(
        <div className='newPostContainer'>
            <header>
                <a href="#a"><FiEdit/></a>
                <textarea name="New Post" id="textAreaPost" cols="30" rows="10" placeholder="Escreva Uma publicacao..."></textarea>
                <a href="#a"><FiImage/></a>
                <a href="#a"><FiVideo/></a>
            </header>
            <div className='bottomNewPost'>
                <p>ou <strong>public um artigo</strong> na InCicle</p>
            </div>
        </div>
    );
}

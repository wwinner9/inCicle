import React,{useState} from 'react'
import {FiChevronDown, FiClock,FiLock} from 'react-icons/fi'
import {FaThumbsUp,FaRegCommentAlt} from 'react-icons/fa'
import {IoMdShareAlt,IoMdThumbsUp} from 'react-icons/io'
import './style.css'

import userImg from '../../assets/nga1.jpg'

export default function Post(){

    //like's State to count How many clicks we got
    const [likes, setLikes] =useState(0)
    const [isLiked, setIsLiked] =useState(false)
    const [legend,setLegend]= useState('Seja o primeiro a curtir')
    const [likeIcon,setLikeIcon]= useState('var(--otherGrey)')

    //Variable to verify is the user just liked
    

    //Function to like a post using useState to save the likes
    function handleLike(e){     
        //prevent the default behaivor of the page
        e.preventDefault();

            //Condition that Verify is the user hasn't liked !isLiked
            if(!isLiked){ 
                //Change the state of likes increment +1
                setLikes(likes+1)
                //Change the state of isLiked by True
                setIsLiked(true) 
                setLikeIcon('var(--otherBluelegend)')

                //Change the legends of the like
                setLegend('Pessoas Curtiram isso')
            }else{ 
                //Change the state of likes decrement -1
                setLikes(likes-1)  
                console.log(likes)
                
                setLegend('Seja o primeiro a curtir') 
                setLikeIcon('var(--otherGrey)')                    

                //Change the state of isLiked by False
                setIsLiked(false) 
            } 
        
    }


    return(
       <div className="postContainer">
            <header> 
                <div className="postLeftSide">
                    <img src='https://resizing.flixster.com/kbPDj6apEyATyhgAGKO55GrN-os=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/953916/953916_v9_bd.jpg' id='posterImg' className="circleImg" alt=""/>
                    <div className="posterInfo">
                        <a href="#a" id='posterName'><h4 >Patricia Santos</h4></a> 
                        <div className="timeInfo">
                            <p><FiClock/> Ha Cerca de 8 Horas</p>
                            <p><FiLock/> Somente eu</p>                    
                        </div>
                    </div>
                </div>  
                <div className="postRightSide">
                    <FiChevronDown/>
                </div>               
                
            </header>
            <div className="postContent">
                <p>Essa publicacao esta configurado no modo privado</p>
            </div>
            <section id='bottomPost'>
                <div className="reactionInfo">
                    <div className="leftReactionInfo">
                        <IoMdThumbsUp/>
                        <p id='likes'>{likes}</p> <p id='likeCount'>{legend}</p>
                    </div>  
                    <div className="rightReactionInfo">
                        <p>0 comentarios</p>
                        <p >0 Compartilhamentos</p>
                    </div>                   
                    
                </div>
                <div className="postActions" onClick={handleLike}>
                    <button id='btnLike' className='btnReaction' ><p><FaThumbsUp color={likeIcon}/></p>Curtir</button>
                    <button id='btnComment' className='btnReaction'><p><FaRegCommentAlt /></p>Comentarios</button>
                    <button id='btnShare' className='btnReaction'><p><IoMdShareAlt /></p> Compartilhar</button>
                </div>
            </section>
       </div>
    );
}
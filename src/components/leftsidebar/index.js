import './style.css'
import {AiOutlineBank,AiOutlineCodeSandbox,AiOutlineEnvironment} from 'react-icons/ai'
import userImg from '../../assets/juicy1.jpg'

export default function Leftside(){
    return(
        <div className='leftSideContainer'>
            <header>                
                <img src='https://portalrapmais.com/wp-content/uploads/2021/07/Juice-Wrld.jpg' id='avatar' className="circleImg" alt="user avatar"/>              
            </header>
            
            <section>
                <div className="userInfo">                
                    <a href="#a" target='_blank' id='userName'>Kenedy Morais</a>
                    <h4 id='userEmail'>@kenedymorais</h4>
                    <p id='userTech'>Front-End Developer</p>                    
                </div>
            </section>

            <footer>
                <p><AiOutlineEnvironment/> Rio Branco/Acre - Brasil</p>
                <div className="otherInfo">
                    <p><AiOutlineCodeSandbox/> InCicle</p>
                    <p><AiOutlineBank/> Uninorte</p>
                </div>
            </footer>
        </div>
    );
}
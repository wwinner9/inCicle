import avatar from '../../assets/juicy1.jpg'
import {FaHome, FaSearch, FaBell, FaMoon,FaFacebookMessenger} from 'react-icons/fa'
import './style.css'

export default function Menu(){
    return(
        <div className="menuContainer">
            <nav>
                <ul>
                    <img src={avatar} id='menuAvatar' className='circleImg' alt=""/>
                   
                    <li><a href="#a"><FaHome size='18' color='var(--otherGrey)'/></a></li>
                    <li><a href="#a"><FaSearch size='18' color='var(--otherGrey)'/></a></li>
                    <li><a href="#a"><FaFacebookMessenger size='18' color='var(--otherGrey)'/></a></li>
                    <li><a href="#a"><FaMoon size='18' color='var(--otherGrey)'/></a></li>
                    <li><a href="#a"><FaBell size='18' color='var(--otherGrey)'/></a></li>
                </ul>
            </nav>
        </div>
    );
}
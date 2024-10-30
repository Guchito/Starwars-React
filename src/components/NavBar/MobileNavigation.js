import NavLinks from './NavLinks';
import './NavBar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import {MdClose} from 'react-icons/md';
import { Link } from 'react-router-dom'
import { useState } from "react";



const MobileNavigation = () =>{
    const [click, setClick] = useState(false)

    const Hamburger = <GiHamburgerMenu className="HamburgerMenu"
        size="30px" 
        color="white"
        onClick={() => setClick(!click)}
    />
    const Close = <MdClose className="HamburgerMenu"
        size="30px" 
        color="white"
        onClick={() => setClick(!click)}
    />
    const closeMenu = () => setClick(false); 
    const isClicked = true;


    return(
        <nav className='MobileNavigation'>
            <ul>
                <li onClick={() => isClicked && closeMenu()}>
                    <Link to='/' className="navbar"> <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"></img> </Link>
                </li>
            </ul>
            { click ? Close : Hamburger} 
            {click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
        </nav>
    )
}
    

export default MobileNavigation;
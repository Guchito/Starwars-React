import { Link } from 'react-router-dom'
import './NavBar.css';

const NavLinks = ({isClicked, closeMenu}) =>{


    return(
        <nav className="NavLinks">
        <ul>
            <li onClick={() => isClicked && closeMenu()}>
                <Link to='/characters' className="navbar"> Characters </Link>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <Link to='/planets' className="navbar"> Planets  </Link>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <Link to='/vehicles' className="navbar"> Vehicles </Link>
            </li>
            <li onClick={() => isClicked && closeMenu()}>
                <Link to='/species'className="navbar"> Species  </Link>
            </li>
        </ul>
    </nav>
    )
}

export default NavLinks;
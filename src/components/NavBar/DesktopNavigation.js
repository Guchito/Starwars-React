import NavLinks from './NavLinks';
import { Link } from 'react-router-dom'
import './NavBar.css';

 const DesktopNavigation = () =>{
     return(
        <nav className='DesktopNavigation'>
            <Link to='/' className="navbar"> <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png" alt="Star Wars logo"></img> </Link>
            <NavLinks/>
        </nav>
     )
 }

 export default DesktopNavigation;
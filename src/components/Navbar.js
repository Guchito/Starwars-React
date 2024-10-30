import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar(){
    return (<nav> 
        <Link to='/' className="navbar"> <img src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png"></img> </Link>
        <Link to='/characters' className="navbar"> Characters </Link>
        <Link to='/planets' className="navbar"> Planets  </Link>
        <Link to='/vehicles' className="navbar"> Vehicles </Link>
        <Link to='/starships'className="navbar"> Starships  </Link>
     </nav>)
}

export default Navbar;
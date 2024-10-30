
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation'
import './NavBar.css'


function NavBar(){
    return (
        <div>
            <DesktopNavigation />
            <MobileNavigation />

        </div>
    )
}

export default NavBar;
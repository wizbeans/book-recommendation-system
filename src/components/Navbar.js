import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerwidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    window.addEventListener('resize', showButton);
    return (
       <>
       <nav className="navbar">
           <div className="navbar-container">
            <Link to= "/" className = "navbar-logo" onClick = {closeMobileMenu}>   
              <i className= ' far fa-comment-dots' />
               
              </Link>
              <div className= 'menu-icon' onClick={handleClick}>
                  <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li><Link to= "/" className = "navbar-logo" onClick = {closeMobileMenu}>   
              <i  />SuggestEX
              </Link></li>
              </ul>
              {/* {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>} */}
           </div>
           </nav>
       </>
    )
}

export default Navbar

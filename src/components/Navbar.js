import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className="leftSide">Laura Koomen</div>
        <div className="rightSide">
            <div><Link to="/laura-koomen">HOME</Link></div>
            <div className='dropdown'>
                <button class="dropbtn">PORTFOLIO</button>
                <div class="dropdown-content">
                    <Link>LANDSCAPES</Link>
                    <Link>ANI</Link>
                    <Link>PORTRAITS</Link>
                </div>
            </div>
            <div><Link to="/">ABOUT</Link></div>
            <div><Link to="/">CONTACT</Link></div>
        </div>
    </div>
  )
}

export default Navbar
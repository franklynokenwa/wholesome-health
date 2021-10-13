import React from 'react';
import "../css/NavBar.css"

const NavBar = () => {
    return (
        <nav>
            <h3>WholeSome Health</h3> 
            <div className="nav-items">
                <a href="/"><p>Home</p></a>
                <a href="/"><p>About Us</p></a>
                <a href="/"><p>Our Services</p></a>
                <a href="/"><p>Contact us</p></a>
            </div>
            <div className="nav-buttons">
               <a href="/"><button className="nav-buttons__sign-up">Sign Up</button></a>
               <a href="/"><button className="nav-buttons__login">Login</button></a>
            </div>            
        </nav>
    )
}

export default NavBar

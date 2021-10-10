import React from 'react';
import "../css/NavBar.css"

const NavBar = () => {
    return (
        <nav className="flex">
            <h3>WholeSome Health</h3> 
            <div className="nav-items flex  ">
                <a href="/"><p>Home</p></a>
                <a href="/"><p>About Us</p></a>
                <a href="/"><p>Our Services</p></a>
                <a href="/"><p>Contact us</p></a>
            </div>
            <div className="nav-buttons">
                <button className="sign-up">Sign Up</button>
                <button className="login">Login</button>
            </div>            
        </nav>
    )
}

export default NavBar

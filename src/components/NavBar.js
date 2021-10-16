import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import "../css/NavBar.css"
import SignUpComponent from './SignUpComponent';
import LogInComponent from './LogInComponent';

const NavBar = () => {
    const [logInText] = useState('Log In');
    const [signUpText] = useState('Sign Up');


    return (
        <nav>
            <Link to={`/`} className="nav-logo" >
                <h3>WholeSome Health</h3> 
            </Link>
            <div className="nav-items">
                <Link to={`/`} className="link">
                    <p>Home</p>                
                </Link>
                <Link to={`/about`} className="link">
                    <p>About Us</p>                
                </Link>
                <Link to={`/services`} className="link">
                    <p>Our Services</p>                
                </Link>
                <Link to={`/contact`} className="link">
                    <p>Contact us</p>                
                </Link>
        
            </div>
            <div className="nav-buttons">
               <SignUpComponent signUpText={signUpText}/>
               <LogInComponent  logInText={logInText} />
            </div>  
        </nav>
    )
}

export default NavBar

import React, {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Link} from 'react-router-dom'
import "../css/NavBar.css"
import SignUpComponent from './SignUpComponent';
import LogInComponent from './LogInComponent';
import LogOutComponent from './LogOutComponent';
import UserDashBoard from './UserDashBoard';

const NavBar = () => {
    const {loginWithRedirect} = useAuth0();
    const [logInText, setLogInText] = useState('Log In');
    const [signUpText, setSignUpText] = useState('Sign Up');


    return (
        <nav>
            <h3>WholeSome Health</h3> 
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
               <SignUpComponent  onClick={() => loginWithRedirect()} signUpText={signUpText}/>
               <LogInComponent  onClick={() => loginWithRedirect()} logInText={logInText} />
               <LogOutComponent/>
            </div>  
        </nav>
    )
}

export default NavBar

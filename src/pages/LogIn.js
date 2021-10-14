import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import signInImage from '../images/sign-up.jpg';
import '../css/LogIn.css'


const LogIn = () => {
    return (
        <section className="sign-in">
            <div className="sign-in__image_container">
                <img src={signInImage} className="sign-in__image" alt=""/>               
            </div>
            <div className="sign-in__details">
                <h2>Sign In</h2>
                <form>
                    <input type="email" placeholder="Email address"/>
                     <br/><br/>
                    <input type="password" placeholder="Password"/> <br/><br/>
                    <button>Sign In</button>

                </form>
            </div>
            
        </section>
    )
}

export default LogIn

import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import '../css/LogIn.css'


const LogIn = () => {
    return (
        <section className="log-in">
            <div className="log-in__image">
                <img src={serviceImage} className="Team-details__data__image" alt=""/>               
            </div>
            <div className="log-in__details">
                <form>
                    <input type="email" placeholder="Email address"/> <br/><br/>
                    <input type="password" placeholder="Password"/> <br/><br/>
                    <button>Log in</button>
                </form>
            </div>
        </section>
    )
}

export default LogIn

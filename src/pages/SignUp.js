import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import '../css/SignUp.css'

const SignUp = () => {
    return (
        <section className="sign-up">
            <div className="sign-up__image">
                <img src={serviceImage} className="Team-details__data__image" alt=""/>               
            </div>
            <div className="sign-up__details">
                <form>
                    <input type="text" placeholder="First Name"/> <br/><br/>
                    <input type="text" placeholder="Last Name"/>  <br/><br/>
                    <input type="email" placeholder="Email address"/> <br/><br/>
                    <input type="password" placeholder="Password"/> <br/><br/>
                    <div>
                        <input type="checkBox" />
                        <p>I agree to the <a href="/">term's of service</a> and <a href="/">privacy policy</a> </p>
                    </div>
                    <button>Sign Up</button>

                </form>
            </div>
            
        </section>
    )
}

export default SignUp

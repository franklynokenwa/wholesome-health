import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import signUpImage from '../images/sign-up.jpg';
import '../css/SignUp.css'

const SignUp = () => {
    return (
        <section className="sign-up">
            <div className="sign-up__image_container">
                <img src={signUpImage} className="sign-up__image" alt=""/>               
            </div>
            <div className="sign-up__details">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="First Name"/> <br/><br/>
                    <input type="text" placeholder="Last Name"/>  <br/><br/>
                    <input type="email" placeholder="Email address"/> <br/><br/>
                    <input type="password" placeholder="Password"/> <br/><br/>
                    <div className="sign-up__check_container">
                        <input type="checkBox" id="sign-up__check-box" />
                        <p>I agree to the <a href="/">term's of service</a> and <a href="/">privacy policy</a> </p>
                    </div>
                    <button>Sign Up</button>

                </form>
            </div>
            
        </section>
    )
}

export default SignUp

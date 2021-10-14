import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import signUpImage from '../images/sign-up.jpg';
import { useForm } from 'react-hook-form';

import '../css/SignUp.css'

const SignUp = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);
    
    return (
        <section className="sign-up">
            <div className="sign-up__image_container">
                <img src={signUpImage} className="sign-up__image" alt=""/>               
            </div>
            <div className="sign-up__details">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input 
                    {...register("firstName", { required: true, maxLength: 10 })}
                    type="text" 
                    placeholder="First Name"/><br/>
                    {errors.firstName && <span className="error-message">Please enter a valid first name</span>}
                    <br/>

                    <input
                    {...register("lastName", { required: true, maxLength: 10 })}
                    type="text" 
                    placeholder="Last Name"/><br/>
                    {errors.lastName && <span className="error-message">Please enter a valid last name</span>}
                    <br/>

                    <input 
                    {...register("email",
                    {required:true , pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, minLength: 8 } )}
                    type="email" 
                    placeholder="Email address"/><br/>
                    {errors.email && <span className="error-message">Email address is required</span>}
                    <br/>

                    <input 
                    {...register("password", 
                    {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}
                    type="password" 
                    placeholder="Password"/><br/>
                    {errors.password && <span className="error-message">Please enter a valid password</span>}
                    <br/>

                    <div className="sign-up__check_container">
                        <input
                        {...register("checkBox",
                        {required:true})}
                        type="checkBox" 
                        id="sign-up__check-box" 
                        />                        
                        <p>I agree to the <a href="/">term's of service</a> and <a href="/">privacy policy</a> </p>
                    </div>
                    <div className="checkBox__error">{errors.checkBox && 'Please check the box'}</div>
                    <button>Sign Up</button>

                </form>
            </div>
            
        </section>
    )
}

export default SignUp

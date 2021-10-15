import React from 'react'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import signInImage from '../images/sign-up.jpg';
import '../css/LogIn.css'
import { useForm } from 'react-hook-form';



const LogIn = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {};


    return (
        <section className="sign-in">
            <div className="sign-in__image_container">
                <img src={signInImage} className="sign-in__image" alt=""/>               
            </div>
            <div className="sign-in__details">
                <h2>Sign In</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("email",
                    {required:true , pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, minLength: 8 } )} 
                    type="email" 
                    placeholder="Email address"
                    /><br/>
                    {errors.email && <span className="error-message">Please enter a valid email address</span>}
                     <br/>
                    <input {...register("password", 
                    {required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/})}
                     type="password"
                     placeholder="Password"
                     /> <br/>
                     {errors.password && <span className="error-message">Please enter a valid password</span>}
                     <br/>
                    <button>Sign In</button>

                </form>
            </div>
            
        </section>
    )
}

export default LogIn

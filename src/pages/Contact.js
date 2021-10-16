import React from 'react'
import { useForm } from 'react-hook-form';

import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/Contact.css'
import blackFemaleDoctor from '../images/black-female-doctor.png';


const Contact = () => {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <section className="contact">
            <NavBar/>
                <div className="contact__header">
                    <img src={blackFemaleDoctor} className="contact__header__image" alt=""/>
                    <div className="contact__header__text">
                        <h3>Contact Us</h3>
                    </div>
                </div>
                <div className="contact__details">
                    <h2>GET IN TOUCH</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input 
                        {...register("yourName", { required: true, maxLength: 20 })}
                        type="text" 
                        placeholder="Your Name"/><br/>
                        {errors.yourName && <span className="error-message">Please enter a valid name</span>}
                        <br/>

                        <input 
                        {...register("email",
                        {required:true , pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, minLength: 8 } )}
                        type="email" 
                        placeholder="Email address"/><br/>
                        {errors.email && <span className="error-message">Email address is required</span>}
                        <br/>

                        <textarea 
                        {...register("yourMessage", { required: true})}
                        placeholder="Your Message"
                        /><br/>
                        {errors.yourMessage && <span className="error-message">Please enter a message</span>}
                        <br/>

                        <button>Submit</button>
                        </form>
                </div>
            <Footer/>
        </section>
    )
}

export default Contact

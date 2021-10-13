import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/Contact.css'
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';


const Contact = () => {
    return (
        <section>
            <NavBar/>
            <div>
                <img src={serviceImage} className="Team-details__data__image" alt=""/>
                <h3>Contact Us</h3>
            </div>
            <div>
                <h2>GET IN TOUCH</h2>
                <form>
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="message" placeholder="Your Name"/>
                </form>
            </div>
            <Footer/>
        </section>
    )
}

export default Contact

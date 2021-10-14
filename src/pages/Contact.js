import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/Contact.css'
import blackFemaleDoctor from '../images/black-female-doctor.png';


const Contact = () => {
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
                    <form>
                        <input type="text" placeholder="Your Name"/>
                        <input type="email" placeholder="Your Email"/>
                        <textarea placeholder="Your Message"/>
                        <button>Submit</button>
                    </form>
                </div>
            <Footer/>
        </section>
    )
}

export default Contact

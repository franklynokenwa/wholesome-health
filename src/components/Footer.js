import React from 'react'
import '../css/Footer.css'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <section className="footer">
            <h3>WholeSome Health</h3> 
            <div className="footer__links">
                <Link to={`/`} className="footer-link">
                    <p>Home</p>                
                </Link>
                <Link to={`/about`} className="footer-link">
                    <p>About Us</p>                
                </Link>
                <Link to={`/services`} className="footer-link">
                    <p>Our Services</p>                
                </Link>
                <Link to={`/contact`} className="footer-link">
                    <p>Contact us</p>                
                </Link>
            </div>
            <div className="footer__details">
                <h2>Contact us</h2>
                <div className="footer__details_phone">
                    <a href="tel:08164656509"> 
                        <FontAwesomeIcon icon={faPhoneSquareAlt} className="footer__phone-icon"/>
                    </a>
                    <a href="tel:08164656509"> <p>08164656509</p> </a>
                </div>
                <div className="footer__details_email">
                    <a href="mailto:info@wholesomehealth.com"> 
                        <FontAwesomeIcon icon={faEnvelope} className="footer__email-icon"/>
                    </a>
                    <a href="mailto:info@wholesomehealth.com"><p>info@wholesomehealth.com</p> </a>
                </div>
                <div className="footer__details_social-icons">
                    <a href="www.facebook.com"> 
                        <FontAwesomeIcon icon={faFacebook} className="footer__facebook-icon"/>
                    </a> 
                    <a href="www.twitter.com"> 
                        <FontAwesomeIcon icon={faTwitter} className="footer__twitter-icon"/> 
                    </a>
                    <a href="www.instagram.com"> 
                        <FontAwesomeIcon icon={faInstagram} className="footer__instagram-icon"/>
                    </a>
                </div>
            </div>
            <div className="footer__media-icons">
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
        </section>
    )
}

export default Footer

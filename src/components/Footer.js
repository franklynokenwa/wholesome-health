import React from 'react'
import '../css/Footer.css'

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__links">
                <a href="/"><p>About</p></a>
                <a href="/"><p>About</p></a>
                <a href="/"><p>About</p></a>
                <a href="/"><p>About</p></a>
            </div>
            <div className="footer__details">
                <h2>Contact us</h2>
                <div>
                    <img src="" alt=""/>
                    <p>08164656509</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p>a@gmail.com</p>
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

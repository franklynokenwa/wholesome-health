import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import doc from '../images/clipart-doctor-lady-doctor-11.png';
import '../css/Services.css'


const Services = () => {
    return (
        <section>
            <NavBar/>
            <div className="services-intro">
                <img className="services-intro__image" src={doc} alt=""/>
                <div className="services-intro__text">
                    <h2>Our Services</h2>
                    <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                </div>
            </div>

            <section className="services-info">
                <h2>Our Services</h2>
                <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
            </section>

            <section className="services-details">
                <div className="services-details__container">    
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                </div>

                <div className="services-details__container">    
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default Services

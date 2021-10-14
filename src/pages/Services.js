import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import hospitaFacility2 from '../images/hospital-facilty2.webp';
import doc from '../images/clipart-doctor-lady-doctor-11.png';
import '../css/Services.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrescriptionBottleAlt } from '@fortawesome/free-solid-svg-icons'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faDiagnoses } from '@fortawesome/free-solid-svg-icons'
import { faAmbulance } from '@fortawesome/free-solid-svg-icons'
import { faFirstAid } from '@fortawesome/free-solid-svg-icons'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'





const Services = () => {
    return (
        <section>
            <NavBar/>
            <div className="services-intro">
                <div className="services-intro__image__container">
                    <img className="services-intro__image" src={hospitaFacility2} alt=""/>
                </div>
                <div className="services-intro__text_container">
                    <div className="services-intro__text">
                        <h2>Our Services</h2>
                        <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                    </div>
                </div>
            </div>

            <section className="services-info">
                <h2>Our Services</h2>
                <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
            </section>

            <section className="services-details">
                <div className="services-details__container">    
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faPrescriptionBottleAlt} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faStethoscope} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faDiagnoses} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>World Class Diagnosis</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>
                    </div>
                </div>

                <div className="services-details__container">    
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faFirstAid} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faUserMd} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>Qualified Doctors</h3>
                            <p>Occaecat ad pariatur cupidatat cillum laboris voluptate amet elit consequat ullamco magna ad.</p>
                        </div>

                    </div>
                    <div className="services-details__info">
                        <FontAwesomeIcon icon={faAmbulance} className="services__details__data_icon"/>
                        <div className="services-details__info_text">
                            <h3>Ambulance Services</h3>
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

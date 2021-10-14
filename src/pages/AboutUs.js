import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ExpertTeam from '../components/ExpertTeam';

import '../css/AboutUs.css';

import doc from '../images/clipart-doctor-lady-doctor-11.png';
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import aboutDoctors from '../images/about-doctors.png';
import youngDoctor from '../images/young-doctor.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import { faProcedures } from '@fortawesome/free-solid-svg-icons'
import { faUserMd } from '@fortawesome/free-solid-svg-icons'
import { faLungs } from '@fortawesome/free-solid-svg-icons'
import { faWeight } from '@fortawesome/free-solid-svg-icons'


const AboutUs = () => {
    return (
        <section classname="about">
            <NavBar/>
            <section className="about__header">
                <div className="about__header__image_container">
                    <img className="about__header__image" src={aboutDoctors} alt=""/>
                </div>
                <div className="about__header__details">
                    <div className="about__header__details_text">
                        <h2>Provide best health care treatment</h2>
                        <p>Elit aute pariatur laborum voluptate ipsum non cillum dolor. Aute sit quis excepteur non ex. Veniam quis excepteur nostrud in deserunt aliquip occaecat voluptate pariatur non elit duis amet ipsum.</p>
                    </div>
                    <img className="about__header__details__image" src={youngDoctor} alt=""/>
                </div>
            </section>
            <section className="departments">
                <h2>Our Departments</h2>
                <div className="departments__details">
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faXRay} className="departments__details__data_icon"/> 
                        <h3>Cardiology</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faStethoscope} className="departments__details__data_icon"/>
                        <h3>Pediatrics</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faProcedures} className="departments__details__data_icon"/>
                        <h3>Surgery</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                </div>

                <div className="departments__details">
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faUserMd} className="departments__details__data_icon"/>
                        <h3>Medical Diagnosis</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faLungs} className="departments__details__data_icon"/>
                        <h3>Clinical Operations</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                    <div className="departments__details__data">
                        <FontAwesomeIcon icon={faWeight} className="departments__details__data_icon"/>
                        <h3>Testing</h3>
                        <p className="departments__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                    </div>
                    
                </div>
            </section>
            <section className="impact">
                <div className="impact__data">
                    <h2>1000</h2>
                    <p>Clinic Reviews</p>
                </div>
                <div>
                    <h2>3.5M</h2>
                    <p>Patients served</p>
                </div>
                <div>
                    <h2>8600</h2>
                    <p>Medicine distributed</p>
                </div>
                <div>
                    <h2>150</h2>
                    <p>Clinic rooms</p>
                </div>
            </section>
            <ExpertTeam/>
            <Footer/>
        </section>
    )
}

export default AboutUs

import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import '../css/Home.css'
import doc from '../images/clipart-doctor-lady-doctor-11.png';
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';
import groupDoctors from '../images/group-doctors.png'
import twoDoc from '../images/two-doc.png'
import surgery from '../images/surgery.jpg'
import qualifiedDoc from '../images/qualified-doc.png'
import hospitalFacility from '../images/hospital-facility.png'
import hospitalRoom from '../images/hospital-room.jpg'
import surgeon from '../images/surgeon.jpg'
import darkDoctor from '../images/dark-doctor.png'
import experiecedDoctor from '../images/experienced-doctor.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStethoscope } from '@fortawesome/free-solid-svg-icons'
import { faXRay } from '@fortawesome/free-solid-svg-icons'
import { faProcedures } from '@fortawesome/free-solid-svg-icons'



const Home = () => {
    return (
        <main>
            <NavBar/>
            <section className="home-section1">
                <div className="home-section1__container">
                    <div className="home-section1__text">
                        <h1>Take the World's best quality treatment</h1>
                        <p>Fugiat adipisicing ut esse mollit minim reprehenderit laborum in. <br/> Commodo labore aliqua sit fugiat anim pariatur eu aute eiusmod id consectetur voluptate fugiat. Qui irure exercitation consectetur excepteur irure fugiat magna occaecat.</p>
                        <button>Get Appointment</button>
                    </div> 
                    <img src={groupDoctors} className="home-service-info__container__image" alt=""/>
                </div>
            </section>
            <section className="choose">
                <div className="choose__container">
                    <h2>Why Choose Us?</h2>
                    <div className="choose__details">
                        <div className="choose__details__data1">
                            <FontAwesomeIcon icon={faXRay} className="choose__details__data_icon"/> 
                            <h3>Cardiology</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                        <div className="choose__details__data2">
                            <FontAwesomeIcon icon={faStethoscope} className="choose__details__data_icon"/>
                            <h3>Pediatrics</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                        <div className="choose__details__data3">
                            <FontAwesomeIcon icon={faProcedures} className="choose__details__data_icon"/>
                            <h3>Surgery</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-service-info">
                <div className="home-service-info__container">
                    <img className="home-section1__image" src={twoDoc} alt=""/>  
                    <div className="home-service-info__text">
                        <h3>Service we provide</h3>
                        <p>Cupidatat nisi qui veniam amet excepteur.Nulla commodo aliqua esse eiusmod eu exercitation duis culpa culpa. Anim eu ad proident sint nisi. Adipisicing pariatur reprehenderit veniam ad laboris consectetur nisi. Irure laborum adipisicing ut officia duis commodo. Amet eu eu dolore proident et ad nisi ullamco sunt adipisicing officia. Est nulla laborum dolore nostrud Lorem sunt dolore esse.</p>
                    </div>
                </div>
            </section>
            <section className="home-services">
                <div className="home-services__container">
                    <div className="home-services__heading">
                        <h2> Services</h2>
                        <p>Eu eiusmod aute nulla amet minim consequat cillum do nulla aliqua aliqua cillum.</p>
                    </div>
                    <div className="home-services-details__container">
                        <div className="home-services-details__data">
                            <img src={surgery} className="home-services-details__data__image" alt=""/>
                            <div className="home-services-details__data__text">
                                <h2>Surgical Operations</h2>
                                <p>Ad reprehenderit labore labore sit Lorem excepteur.</p>
                            </div>
                        </div>
                        <div className="home-services-details__data">
                            <img src={qualifiedDoc} className="home-services-details__data__image" alt=""/>
                            <div className="home-services-details__data__text">
                                <h2>Experienced Doctors</h2>
                                <p>Ad reprehenderit labore labore sit Lorem excepteur.</p>
                            </div>
                        </div>
                        <div className="home-services-details__data">
                            <img src={hospitalRoom} className="home-services-details__data__image" alt=""/>
                            <div className="home-services-details__data__text">
                                <h2>Modern Facilities</h2>
                                <p>Ad reprehenderit labore labore sit Lorem excepteur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Team">
                <div className="Team__container">
                    <div className="Team__heading">
                        <h2> Our Expert Team </h2>
                        <p>Eu eiusmod aute nulla amet minim consequat cillum do nulla aliqua aliqua cillum.</p>
                    </div>
                    <div className="Team-details__container">
                        <div className="Team-details__data">
                            <img src={surgeon} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr Helen Paul</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                        <div className="Team-details__data">
                            <img src={darkDoctor} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr Victor Fernandez</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                        <div className="Team-details__data">
                            <img src={experiecedDoctor} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr John Maxwell</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Home

import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../css/AboutUs.css';
import doc from '../images/clipart-doctor-lady-doctor-11.png';
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';




const AboutUs = () => {
    return (
        <section classname="about">
            <NavBar/>
            <section className="about__header">
                <img className="about__header__image" src={doc} alt=""/>
                <div className="about__header__details">
                    <div className="about__header__details_text">
                        <h2>Provide best health care treatment</h2>
                        <p>Elit aute pariatur laborum voluptate ipsum non cillum dolor. Aute sit quis excepteur non ex. Veniam quis excepteur nostrud in deserunt aliquip occaecat voluptate pariatur non elit duis amet ipsum.</p>
                    </div>
                    <img className="about__header__details__image" src={doc} alt=""/>
                </div>
            </section>
            <section className="departments">
                <h2>Our Departments</h2>
                <div className="departments__details">
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                </div>

                <div className="departments__details">
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                    <div className="departments__details__data">
                        <img className="departments__details__data_image" src={doc} alt=""/>
                        <h3>Cardiology</h3>
                        <p>Esse ad aliqua incididunt id ut reprehenderit minim exercitation commodo mollit eu. Quis ipsum labore commodo dolor id ex ea aliqua culpa elit incididunt labore. Est aliquip nostrud irure magna proident sint est ex cupidatat nulla duis nulla ea. Consectetur laborum aute deserunt ut quis laboris. Sint aliquip nisi consectetur eu dolore exercitation irure et tempor. Duis Lorem cillum eiusmod adipisicing. Non consequat laborum incididunt duis voluptate ipsum anim esse deserunt occaecat incididunt dolor nisi.</p>
                    </div>
                    
                </div>
            </section>
            <section className="impact">
                <div className="impact__data">
                    <h2>900</h2>
                    <p>Clinic Reviews</p>
                </div>
                <div>
                    <h2>900</h2>
                    <p>Clinic Reviews</p>
                </div>
                <div>
                    <h2>900</h2>
                    <p>Clinic Reviews</p>
                </div>
                <div>
                    <h2>900</h2>
                    <p>Clinic Reviews</p>
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
                            <img src={serviceImage} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr Victor Fernandez</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                        <div className="Team-details__data">
                            <img src={serviceImage} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr Victor Fernandez</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                        <div className="Team-details__data">
                            <img src={serviceImage} className="Team-details__data__image" alt=""/>
                            <div className="Team-details__data__text">
                                <h2>Dr Victor Fernandez</h2>
                                <p>Cardiac Surgeon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}

export default AboutUs

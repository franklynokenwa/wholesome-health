import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar'
import '../css/Home.css'
import doc from '../images/clipart-doctor-lady-doctor-11.png';
import serviceImage from '../images/pexels-tima-miroshnichenko-5452201.jpg';



const Home = () => {
    return (
        <main>
            <NavBar/>
            <section className="home-section1">
                <div className="home-section1__container">
                    <div className="home-section1__text">
                        <h1>Take the World's bets quality treatment</h1>
                        <p>Fugiat adipisicing ut esse mollit minim reprehenderit laborum in. <br/> Commodo labore aliqua sit fugiat anim pariatur eu aute eiusmod id consectetur voluptate fugiat. Qui irure exercitation consectetur excepteur irure fugiat magna occaecat.</p>
                        <button>Get Appointment</button>
                    </div> 
                    <img className="home-section1__image" src={doc} alt=""/>  
                </div>
            </section>
            <section className="choose">
                <div className="choose__container">
                    <h2>Why Choose Us?</h2>
                    <div className="choose__details">
                        <div className="choose__details__data1">
                            <img src="" alt=""/>
                            <h3>Cardiology</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. <br/> Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                        <div className="choose__details__data2">
                            <img src="" alt=""/>
                            <h3>Cardiology</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. <br/> Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                        <div className="choose__details__data3">
                            <img src="" alt=""/>
                            <h3>Cardiology</h3>
                            <p className="choose__details__paragraph">Ut ea pariatur est anim adipisicing adipisicing dolor enim. <br/> Veniam enim do esse consequat. Lorem anim eiusmod ea veniam.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-info">
                <div className="service-info__container">
                    <img src={serviceImage} className="service-info__container__image" alt=""/>
                    <div className="service-info__text">
                        <h3>Service we provide</h3>
                        <p>Cupidatat nisi qui veniam amet excepteur.Nulla commodo aliqua esse eiusmod eu exercitation duis culpa culpa. Anim eu ad proident sint nisi. Adipisicing pariatur reprehenderit veniam ad laboris consectetur nisi. Irure laborum adipisicing ut officia duis commodo. Amet eu eu dolore proident et ad nisi ullamco sunt adipisicing officia. Est nulla laborum dolore nostrud Lorem sunt dolore esse.</p>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="services__container">
                    <div className="services__heading">
                        <h2> Services</h2>
                        <p>Eu eiusmod aute nulla amet minim consequat cillum do nulla aliqua aliqua cillum.</p>
                    </div>
                    <div className="services-details__container">
                        <div className="services-details__data">
                            <img src={serviceImage} className="services-details__data__image" alt=""/>
                            <div className="services-details__data__text">
                                <h2>HBOT Treatment</h2>
                                <p>Ad reprehenderit labore labore sit Lorem excepteur.</p>
                            </div>
                        </div>
                        <div className="services-details__data">
                            <img src={serviceImage} className="services-details__data__image" alt=""/>
                            <div className="services-details__data__text">
                                <h2>HBOT Treatment</h2>
                                <p>Ad reprehenderit labore labore sit Lorem excepteur.</p>
                            </div>
                        </div>
                        <div className="services-details__data">
                            <img src={serviceImage} className="services-details__data__image" alt=""/>
                            <div className="services-details__data__text">
                                <h2>HBOT Treatment</h2>
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
        </main>
    )
}

export default Home

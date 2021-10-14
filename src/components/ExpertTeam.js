import React from 'react'
import '../css/ExpertTeam.css'
import surgeon from '../images/surgeon.jpg'
import darkDoctor from '../images/dark-doctor.png'
import experiecedDoctor from '../images/experienced-doctor.png'

const ExpertTeam = () => {
    return (
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
    )
}

export default ExpertTeam

import React from 'react'
import {Link} from 'react-router-dom'


const LogInComponent = (props) => {
    const {logInText} = props
    return (
        <Link to={`/login`} className="sign-in-link">
            <button className="nav-buttons__login">{logInText}</button>
        </Link>
    )
}

export default LogInComponent

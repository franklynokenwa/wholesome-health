import React from 'react'
import {Link} from 'react-router-dom'


const SignUpComponent = (props) => {
    const {signUpText} = props

    return (
        <Link to={`/signup`} className="sign-up-link">
            <button className="nav-buttons__sign-up">{signUpText}</button>
        </Link>
    )
}

export default SignUpComponent

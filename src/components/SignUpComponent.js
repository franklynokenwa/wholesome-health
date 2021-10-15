import React from 'react'

const SignUpComponent = (props) => {
    const {onClick, signUpText} = props

    return (
        <div>
            <a href="/"><button className="nav-buttons__sign-up"  onClick={onClick}>{signUpText}</button></a>
        </div>
    )
}

export default SignUpComponent

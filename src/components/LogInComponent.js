import React from 'react'

const LogInComponent = (props) => {
    const {onClick, logInText} = props
    return (
        <div>
            <a href="/"><button className="nav-buttons__login" onClick={onClick}>{logInText}</button></a>
        </div>
    )
}

export default LogInComponent

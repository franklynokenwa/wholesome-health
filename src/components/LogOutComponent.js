import React from 'react'
import {Link} from 'react-router-dom'


const LogOutComponent = () => {
    return (
        <Link to={`/`}>
            <button className="nav-buttons__login">Log Out</button>
        </Link>
    )
}

export default LogOutComponent

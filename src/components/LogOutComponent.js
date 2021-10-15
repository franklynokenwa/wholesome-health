import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LogOutComponent = () => {
    const {logout} = useAuth0();
    return (
        <div>
            <a href="/"><button className="nav-buttons__login" onClick={() => logout()}>Log Out</button></a>
        </div>
    )
}

export default LogOutComponent

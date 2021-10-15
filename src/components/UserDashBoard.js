import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import JSONPretty from 'react-json-pretty'
import LogOutComponent from './LogOutComponent';


const UserDashBoard = () => {
    const {user, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
        <div className="a">
            <LogOutComponent />
            <h2>WELCOME</h2>
            <p>{user.given_name}</p>          
            <JSONPretty data={user} />
            {/*JSON.stringify(user, null, 2) */}
        </div>
        )
    )
}

export default UserDashBoard

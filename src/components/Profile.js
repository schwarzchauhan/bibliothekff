import React from 'react';
import {Navigate } from 'react-router-dom';

function Profile(props) {
    if(!props.authorized){
        return (
            <Navigate  to="/user/login" />
        );
    }
    return (
        <div>
            You are successfully logged in
            {props.name}
        </div>
    )
}
export default Profile;
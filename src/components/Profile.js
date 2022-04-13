import React, { useEffect, useState } from 'react';
import {Navigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import Image from 'react-bootstrap/Image'
import Toast from 'react-bootstrap/Toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/css/global.css'


function Profile(props) {
    // console.warn("props", props)
    // taking username as a parameter in the dashboard routes
    let params = useParams();
    // console.warn("params", params);

    const [profileData, setProfileData] = useState("");
    const [showLoginSuccess, setShowLoginSuccess] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const userService = new UserService();
                const response = await userService.getProfileData({username : params.username});
                // console.warn("response getProfileData", response);
                setProfileData(response);
            } catch (error) {
                console.error("error while fetching the profile data in dashboard page", error);
            }
        };

        fetchData();
    }, []);

    if(!props.authorized){
        return (
            <Navigate  to="/user/login" />
        );
    }

    const toggleShowLoginSuccess = () => setShowLoginSuccess(!showLoginSuccess);

    return (
        <div>
            <div className='centered-axis-x top10p'>
                <Toast show={showLoginSuccess} onClose={toggleShowLoginSuccess}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">BIBLIOTHEK</strong>
                    </Toast.Header>
                    <Toast.Body>You are successfully logged in {profileData.name}</Toast.Body>
                </Toast>
            </div>
            <div className="profile-header">
                {/* <img src={profileData.imgUrl} alt="Profile image not available" /> */}
                <Image src={profileData.imgUrl} roundedCircle />
            </div>
        </div>
    )
}
export default Profile;
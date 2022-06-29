import React, { useEffect, useState } from 'react';
import {Navigate, useParams } from 'react-router-dom';
import UserService from '../services/UserService';
import Image from 'react-bootstrap/Image'
import Toast from 'react-bootstrap/Toast'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/css/global.css'
import CustomProfileCard from '../components/Custom/CustomProfileCard'
import '../assets/styles/sass/Profile.scss'

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

    const toggleShowLoginSuccess = () => setShowLoginSuccess(!showLoginSuccess);

    return (
        <div className='profile-cont'>
            <div className='cstm-ldr-icon'>
                <Toast show={showLoginSuccess} onClose={toggleShowLoginSuccess}>
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">BIBLIOTHEK</strong>
                    </Toast.Header>
                    <Toast.Body>You are successfully logged in {profileData.name}</Toast.Body>
                </Toast>
            </div>
            <div className="profile-header">
                <div className='bg-dark p-3 text-light text-uppercase fw-bold fs-3'>{profileData.name}</div>
                {/* <img src={profileData.imgUrl} alt="Profile image not available" /> */}
            </div>
            <div className='bg-info'>
                <CustomProfileCard {...profileData} />
            </div>
        </div>
    )
}
export default Profile;
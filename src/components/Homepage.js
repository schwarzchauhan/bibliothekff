import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ControlledCarousel from '../components/Custom/ControlledCarousel'
import '../assets/styles/sass/Homepage.scss'
import '../assets/styles/css/global.css'

function Homepage(props) {
    var bgImg = {
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg')"
    };

    return (
        <div className='bg-cover' style={bgImg}>
            <Navbar />
            <ControlledCarousel />
            <Footer />
        </div>
    )
}

export default Homepage;
import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ControlledCarousel from '../components/Custom/ControlledCarousel'
import '../assets/styles/sass/Homepage.scss'

function Homepage(props) {
    return (
        <div>
            <Navbar />
            <ControlledCarousel />
            <Footer />
        </div>
    )
}

export default Homepage;
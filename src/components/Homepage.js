import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import ControlledCarousel from '../components/Custom/ControlledCarousel'
import '../assets/styles/sass/Homepage.scss'
import '../assets/styles/css/global.css'
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from "react";

function Homepage(props) {
    const [isTypWriting, setIsTypWriting] = useState(true);

    var bgImg = {
        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/3/3b/Siegessaeule_Aussicht_10-13_img4_Tiergarten.jpg')"
    };

    const onLoadEffect = () => {
        setTimeout(() => {
            setIsTypWriting(false);
        }, 5000);
    };

    useEffect(onLoadEffect, []);    

    return (
        <div className='hght100pr'>
            {(!isTypWriting) ? 
                (
                    <div className='bg-cover' style={bgImg}>
                        <Navbar />
                        <ControlledCarousel />
                        <Footer />
                    </div>
                ) : (
                    <div className='bg-dark hght100pr'>
                        <div className='cstm-ldr-icon tp30per text-white display-2'>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Bibiliothek 🐧🐦🦉🦚')
                                    .callFunction(() => {
                                        console.log('Bibiliothek 🐧🐦🦉🦚');
                                    })
                                    .pauseFor(2500)
                                    // .deleteAll()
                                    // .callFunction(() => {
                                    //     console.log('All strings were deleted');
                                    // })
                                    .start();
                                }}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Homepage;
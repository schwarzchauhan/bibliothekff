import React from 'react';
import "../../assets/styles/css/global.css";
import { useLocation } from 'react-router-dom';

export default function PreviewPage() {
    const { state } = useLocation(); // here state is the html response we get from our api
    console.error(state);
    return (
        <div>
            <div className='txtAlgnCenter'>
                PREVIEW THE RESPONSE HERE 
                <span> DOWNLOAD </span>
            </div>
            <div></div>
        </div>
    )
}
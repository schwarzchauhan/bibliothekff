import React from 'react';
import "../../assets/styles/css/global.css";

export default function Error404Pg() {
    return (
        <div>
            <div className='txtAlgnCenter'>
                Page Not Found
            </div>
            <div className='blink-image txtAlgnCenter'>
                <img src="https://ps.w.org/all-404-redirect-to-homepage/assets/icon-128x128.png?rev=1515215" alt="404 not found image" srcset="" />
            </div>
        </div>
    )
}
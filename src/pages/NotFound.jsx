import React from 'react'
import Lottie from 'lottie-react';
import notFound from '../jsons/notFound.json';

const NotFound = () => {
    return (
        <div className='pages not-found-page'>
            <Lottie
                animationData={notFound}
                loop={true}
                autoplay={true}
            />
        </div>
    )
}

export default NotFound
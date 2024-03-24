import React from 'react';
import backgroundImage from '../assets/todoo.avif';

function LandingPage() {
    return (
        <div className="relative min-h-screen bg-no-repeat bg-cover bg-center">
            <div
                className="absolute inset-0 bg-bg-light dark:bg-bg-dark"
                aria-hidden="true"
            />
            <img
                src={backgroundImage}
                alt="bg"
                className="absolute z-0 inset-0 object-cover w-full h-full opacity-40 dark:opacity-0 sm:block"
            />
            {/* Content will be placed here */}
        </div>
    );
}

export default LandingPage;

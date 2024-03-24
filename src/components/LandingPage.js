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
                className="absolute z-0 inset-0 object-cover w-full h-full opacity-40  sm:block"
            />
            <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-black mb-8">To Do List </h1>
                <p className="text-lg text-black mb-8">Organize your tasks efficiently with our Todo List app.</p>
            </div>
        </div>
    );
}

export default LandingPage;

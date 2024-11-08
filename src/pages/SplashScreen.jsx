import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
    const [fadeIn, setFadeIn] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Fade In when the component mounts
        setFadeIn(true);

        // After 3 seconds, start fading out the text
        const timeout = setTimeout(() => {
            setFadeOut(true);
        }, 3000); // Adjust time to your preference (3 seconds here)

        // Cleanup the timeout when the component unmounts
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-red-600 text-white">
            {/* Text with fade-in and fade-out effects */}
            <h1
                className={`text-4xl font-bold transition-opacity duration-1000 ${
                    fadeIn ? 'opacity-100' : 'opacity-0'
                } ${fadeOut ? 'opacity-0' : ''}`}
            >
                BBQ Your Way
            </h1>
        </div>
    );
};

export default SplashScreen;

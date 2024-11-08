import { useState, useEffect } from 'react';
import hero1 from '../assets/heroburger.jpg';
import hero2 from '../assets/heroplater.jpg';
import hero3 from '../assets/herodessert.jpg';

const HomeComp = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const heroImages = [hero1, hero2, hero3];

    // Auto-play functionality: change slides every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000); // Change slide every 5 seconds

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [heroImages.length]);

    const handleSelect = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="home-page bg-slate-800 text-white min-h-screen p-14">
            <div className="max-w-7xl mx-auto flex justify-between items-start">
                {/* Carousel */}
                <div className="w-full sm:w-[90%] mx-auto h-3/4 p-6 relative">
                    <div className="carousel relative mb-8">
                        <div className="overflow-hidden relative">
                            {/* Left and Right Fade Overlay */}
                            <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-slate-800 via-transparent to-transparent z-10" />
                            {/*<div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-slate-800 via-transparent to-transparent z-10" />*/}

                            {/* Carousel Images */}
                            <div
                                className="flex transition-all duration-1000 ease-in-out"
                                style={{
                                    transform: `translateX(-${currentIndex * 100}%)`,
                                    opacity: currentIndex !== null ? 1 : 0,
                                }}
                            >
                                {heroImages.map((image, index) => (
                                    <div key={index} className="flex-shrink-0 w-full relative">
                                        {/* Image with fade filter */}
                                        <img
                                            src={image}
                                            alt={`Hero ${index + 1}`}
                                            className="w-full h-[450px] object-cover rounded-lg transition-opacity duration-1000"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {heroImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(index)}
                                    className={`w-3 h-3 rounded-full bg-white ${currentIndex === index ? 'opacity-100' : 'opacity-50'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeComp;

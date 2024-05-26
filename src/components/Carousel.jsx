import { RiArrowLeftLine, RiArrowRightLine, RiHeadphoneFill, RiPlugFill, RiRefreshFill } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            title: "Premium Divi Plugin",
            description: "We use the Divi Developer API by ElegantThemes carefully to ensure the quality of the Divi Supreme plugin.",
            icon: <RiPlugFill color='#00bfa5' />,
        },
        {
            title: "Regular Updates",
            description: "Divi Supreme Pro has auto-update notifications built-in so you will get notified of new updates in real-time without any hassle.",
            icon: <RiRefreshFill color='#00bfa5' />,
        },
        {
            title: "Premium Support",
            description: "Ask us anything! The skilled support team will promptly handle your question. We provide premium support for all of our products.",
            icon: <RiHeadphoneFill color='#00bfa5' />,
        },
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative w-full max-w-5xl mx-auto p-4">
            <div className="flex items-center justify-between">
                <button onClick={handlePrev} className="absolute left-0 p-2 rounded-full bg-white shadow-lg z-10">
                    <RiArrowLeftLine color='#00bfa5' />
                </button>
                <div className="flex overflow-hidden w-full justify-center">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full transition-transform transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0' : 'hidden'}`}
                        >
                            <div className="border border-[#00bfa5] rounded-lg p-6 mx-2 flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="absolute right-0 p-2 rounded-full bg-white shadow-lg z-10">
                    <RiArrowRightLine color='#00bfa5' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;

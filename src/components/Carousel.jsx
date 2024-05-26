import { RiArrowLeftLine, RiArrowRightLine, RiCameraLensLine, RiComputerLine, RiHeadphoneFill, RiPlugFill, RiRefreshFill, RiSpeakerFill } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const items = [
        {
            title: "Speaker",
            description: "Imagine an ecommerce entrepreneur poised at the forefront of a bustling digital marketplace, their presence magnetic as they prepare to unveil insights that will deeply resonate with online shoppers.With unwavering confidence, they captivate the virtual room, seamlessly weaving together a mosaic of strategies and tactics that ignite the imagination of aspiring digital merchants.Each word they utter carries the weight of experience, resonating with the power and conviction of proven success, leaving an indelible mark on the strategies and approaches of those fortunate enough to be in their audience.Their voice, akin to a skilled conductor, orchestrates emotions, guiding online sellers through a transformative journey of enlightenment and inspiration.They transcend mere conveyers of information, emerging as beacons of ecommerce wisdom, illuminating the path forward with every carefully curated tip and insight.",
            icon: < RiSpeakerFill color='#1B5A7D' />,
        },
        {
            title: "Desktop & laptop",
            description: "Welcome to our digital haven, where innovation meets convenience! Dive into the world of seamless computing with our extensive selection of desktops and laptops. Whether you're a creative professional seeking powerhouse performance or a casual user in pursuit of everyday efficiency, we've got you covered. Explore our curated collection featuring cutting-edge designs, lightning-fast processors, and immersive displays that redefine productivity. Elevate your digital experience with our range of sleek laptops and versatile desktops, meticulously crafted to meet your every need. Upgrade your tech game today and unlock a world of limitless possibilities!",
            icon: <RiComputerLine color='#1B5A7D' />,
        },
        {
            title: "DSLR camera",
            description: "Capture life's moments in stunning detail with our selection of DSLR cameras. Explore our range of high-performance cameras designed to elevate your photography game to new heights. From breathtaking landscapes to intimate portraits, our DSLRs offer unparalleled clarity and precision, ensuring every shot is a masterpiece. Whether you're a seasoned professional or an aspiring enthusiast, discover the perfect DSLR to unleash your creativity and capture memories that last a lifetime. Shop now and embark on a journey of visual storytelling like never before.",
            icon: <RiCameraLensLine color='#1B5A7D' />,
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
                <button onClick={handlePrev} className="absolute left-0 p-2 rounded-full bg-[#EDA415] hover:bg-white shadow-lg z-10">
                    <RiArrowLeftLine color='#1B5A7D' />
                </button>
                <div className="flex overflow-hidden w-full justify-center">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex-shrink-0 w-full transition-transform transform duration-500 ease-in-out ${index === currentIndex ? 'translate-x-0  ' : 'hidden'}`}
                        >
                            <div className="border shadow-lg border-[#1B5A7D] rounded-lg p-6 mx-2 flex flex-col items-center text-center">
                                {item.icon}
                                <h3 className="text-xl font-bold mt-4">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleNext} className="absolute right-0 p-2 rounded-full bg-[#EDA415] hover:bg-white shadow-lg z-10">
                    <RiArrowRightLine color='#1B5A7D' />
                </button>
            </div>
        </div>
    );
};

export default Carousel;

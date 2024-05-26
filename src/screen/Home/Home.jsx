import React from 'react'
import Carousel from '../../components/Carousel'

const Home = () => {
    return (

        <main>
            <article className='flex flex-col md:flex-row items-center justify-around bg-white p-4 md:p-8'>
                <div className='flex items-start flex-col mb-6 md:mb-0'>
                    <span className='text-[#1B5A7D] font-bold text-4xl'>Canon</span>
                    <span className='text-[#1B5A7D] font-bold text-4xl'>camera</span>
                    <div className='flex mt-4 items-center gap-4 md:gap-10'>
                        <button className='text-white bg-[#EDA415] rounded-xl px-6 py-4'>
                            Shop now
                        </button>
                        <button className='text-[#316887] border-[#316887] border rounded-xl px-6 py-4'>
                            View more
                        </button>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/bnner.png" alt="camera" className='w-full md:w-auto ' />
                    <div className='absolute flex flex-col px-4 py-3 md:px-[50px] md:py-[45px] top-[60%] md:top-[200px] right-[10%] md:right-[-30px] bg-[#EDA415] rounded-full text-lg md:text-xl font-semibold text-white'>
                        <span>Only</span>
                        <span>$120</span>
                    </div>
                </div>
            </article>


            <article>
                <Carousel />
            </article>


















        </main>


    )
}

export default Home
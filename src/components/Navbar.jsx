import { RiArrowDownSFill, RiCloseFill, RiHeart3Line, RiMapPinLine, RiMenuFill, RiShoppingCartFill, RiTruckLine, RiUserLine } from '@remixicon/react';
import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const [mouseHover, setMousehover] = useState(false)


    return (
        <main onMouseLeave={() => setMousehover(false)}>

            <article className='flex items-center justify-between p-4 lg:text-lg  lg:font-medium font-normal ' >
                <div className='' >
                    Need help? Call us: (+98) 0234 456 789
                </div>

                <div className='lg:flex hidden items-center gap-10'>
                    <div className='flex items-center gap-4' >
                        <span><RiMapPinLine size={30} /></span>
                        <span>Our store</span>
                    </div>
                    <div className='flex items-center gap-4' >
                        <span><RiTruckLine size={30} /></span>
                        <span>Track your order</span>
                    </div>
                </div>

            </article>



            <article className="flex items-center lg:justify-evenly justify-between p-6 bg-[#003F62] text-white">
                <div className='shrink-0'>
                    <img className='shrink-0' src="/logo.png" alt="Logo" />
                </div>
                <div className="lg:flex hidden">
                    <input className=' text-[#292D32] placeholder:text-[#292D32] placeholder:text-lg  relative w-[400px] p-2 py-[13px] rounded-xl ' placeholder='Serach any things' type="search" />
                    <button className='absolute bg-[#EDA415] border px-[20px] py-[12px] ml-[19.5rem] rounded-xl' >
                        search
                    </button>
                </div>


                <ul className='lg:flex hidden  items-center justify-center gap-10 text-xl'>
                    <li className='flex items-center gap-4' >
                        <span><RiUserLine size={24} /></span>
                        <span>Sign in</span>
                    </li>
                    <li className='flex items-center gap-2' >
                        <span><RiHeart3Line /></span>
                        <span className='rounded-full px-2 bg-[#EDA415]'>
                            0
                        </span>
                        <span>Favourite</span>
                    </li>
                    <li className='flex items-center gap-2' >
                        <span><RiShoppingCartFill /></span>
                        <span className='rounded-full px-2 bg-[#EDA415]'>
                            0
                        </span>
                        <span>Cart</span>
                    </li>
                </ul>

                <button className="lg:hidden block" onClick={toggleMenu}>
                    {isOpen ? <RiCloseFill size={40} /> : <RiMenuFill size={40} />}
                </button>
            </article>
            <article className={`lg:hidden overflow-hidden transition-all duration-300     ${isOpen ? 'max-h-screen absolute w-full ' : 'max-h-0 absolute w-full '}`}>

                <ul className="flex flex-col justify-start items-start bg-[#003F62] text-white p-4 gap-6 text-xl border-t  ">
                    <li className='flex items-center  gap-2' >
                        <span><RiUserLine size={30} /></span>
                        <span>Sign in</span>
                    </li>
                    <li className='flex items-center gap-2' >
                        <span><RiHeart3Line size={30} /></span>
                        <span className='rounded-full px-2 bg-[#EDA415]'>
                            0
                        </span>
                        <span>Favourite</span>
                    </li>
                    <li className='flex items-center gap-2' >
                        <span><RiShoppingCartFill size={30} /></span>
                        <span className='rounded-full px-2 bg-[#EDA415]'>
                            0
                        </span>
                        <span>Cart</span>
                    </li>

                    <li className='' >
                        <div className="flex">
                            <input className=' text-[#292D32] placeholder:text-[#292D32] placeholder:text-lg  p-2 py-[13px] w-[300px] rounded-xl ' placeholder='Serach any things' type="search" />
                            <button className='relative bg-[#EDA415] border px-[20px] py-[12px] right-[90px] rounded-xl' >

                                search
                            </button>
                        </div>
                    </li>

                </ul>
            </article>

            <article className='bg-[#F4F4F4] flex items-center justify-evenly  ' >

                <div onMouseEnter={() => setMousehover(true)}
                    className=' flex gap-6 bg-[#EDA415] p-4 text-white w-fit  ' >
                    <span  >Browse categories</span>
                    <span  ><RiArrowDownSFill size={30} /></span>
                </div>


                <ul className='flex items-center gap-6 ' >
                    <li className='flex items-center justify-center'>
                        <span className='flex gap-2'>
                            Home
                            <span><RiArrowDownSFill size={30} /></span>
                        </span>
                    </li>
                    <li className='flex items-center justify-center'>
                        <span className='flex gap-4' >
                            Catalog
                            <span><RiArrowDownSFill size={30} /></span>
                        </span>
                    </li>
                    <li className='flex items-center justify-center'>
                        <span className='flex gap-4' >
                            Blog
                            <span><RiArrowDownSFill size={30} /></span>
                        </span>
                    </li>
                    <li className='flex items-center justify-center'>
                        <span className='flex gap-4' >
                            Pages
                            <span><RiArrowDownSFill size={30} /></span>
                        </span>
                    </li>
                    <li className='flex items-center justify-center'>
                        <span className='flex gap-4'>
                            About us
                            <span><RiArrowDownSFill size={30} /></span>
                        </span>
                    </li>
                </ul>

                <div className='text-lg font-bold text-[#003F62] ' >
                    30 Days Free Return
                </div>

            </article>

            <ul className={`bg-[#F4F4F4] absolute rounded-lg shadow-xl flex items-start w-fit p-4 top-[218px] right-[977px] flex-col transform transition-all duration-300 ease-in-out ${mouseHover ? 'opacity-100 translate-y-15 cursor-pointer ' : 'opacity-0 -translate-y-[100%]'
                }`}
            >
                <a href='#' >Laptops</a>
                <a href='#' >Mobiles</a>
                <a href='#' >Grocery</a>
                <a href='#' >Widgets</a>
                <a href='#' >Men Collection Brands</a>
                <a href='#' >Women Collection Brands</a>
            </ul>

        </main >
    );
};

export default Navbar;

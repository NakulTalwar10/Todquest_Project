import React from 'react';
import Logo from '../img/logo.png';

const Navbars = () => {
    return (
        <div className='py-4'>
            <nav className='mx-10 lg:mx-36 flex flex-col lg:flex-row justify-center items-center lg:items-stretch'>

                <div className='mx-auto lg:mr-auto mb-4 lg:mb-0 my-2'>
                    <img src={Logo} alt="Logo" className='w-24 h-auto' /> {/* Adjust width as needed */}
                </div>

                <div className="w-full lg:w-auto lg:flex-shrink my-2">
                    <form className='w-full lg:w-auto mx-auto lg:mx-0 lg:mr-4'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-black sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 ml-4 pointer-events-none">
                                {/* Your SVG code */}
                            </div>
                            <input type="search" id="default-search" className="pl-10 w-full lg:w-96 h-9 p-4 border rounded-lg bg-[#EEE]" required placeholder='Search For brand, category, coupon' />
                        </div>
                    </form>
                </div>

                <div className='mx-auto lg:ml-auto my-2'>
                    <div className='px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex'>
                        <button className='text-white text-sm font-semibold uppercase'>Login / Sign Up</button>
                    </div>
                </div>

            </nav>

            <nav className='bg-[#091431]'>
                <ul className='flex flex-col lg:flex-row justify-center items-center py-2 lg:py-0'>
                    <li className='text-[white] mx-5 my-1 lg:my-0 hover:text-red-500 hover:border-b-2 border-transparent hover:border-red-500 duration-300 cursor-pointer'>Home</li>
                    <li className='text-[white] mx-5 my-1 lg:my-0 hover:text-red-500 hover:border-b-2 border-transparent hover:border-red-500 duration-300 cursor-pointer'>Deals</li>
                    <li className='text-[white] mx-5 my-1 lg:my-0 hover:text-red-500 hover:border-b-2 border-transparent hover:border-red-500 duration-300 cursor-pointer'>Coupon</li>
                    <li className='text-[white] mx-5 my-1 lg:my-0 hover:text-red-500 hover:border-b-2 border-transparent hover:border-red-500 duration-300 cursor-pointer'>Stores</li>
                    <li className='text-[white] mx-5 my-1 lg:my-0 hover:text-red-500 hover:border-b-2 border-transparent hover:border-red-500 duration-300 cursor-pointer'>Contact us</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbars;

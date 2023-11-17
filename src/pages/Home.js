import React, { useState, useRef } from 'react'
import Navbars from '../components/Navbar'

import Offers from '../img/offers.png'
import Brands from '../img/brand.png'
import Fashion from '../img/fashion.png'
import Food from '../img/food.png'
import Beauty from '../img/beauty care.png'
import Toys from '../img/toys.png'
import Cloud from '../img/hosting.png'
import Gaming from '../img/gaming.png'
import Phones from '../img/mobile.png'
import Travel from '../img/travel.png'
import Movies from '../img/movies.png'
import Banner from '../img/sunglasses.png'
import FistImage from '../img/image 15.png'
import SecondImage from '../img/Rectangle 7.png'
import ThirdImage from '../img/image 14.png'
import ForthImage from '../img/image 16.png'
import Vectors from '../img/form-img.png'
import Signup from '../img/Login.png'
import Coupon from '../img/Coupon.png'
import Cards from '../img/Card.png'
import Application from '../img/application download.png'
import Summer from '../img/image 65.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from 'react-bootstrap/Card';
import Footer from '../components/Footer'

const Home = () => {
    const [activeDot, setActiveDot] = useState(0);
    const [activeBannerDots, setBannerDots] = useState(0);
    const [active, setActive] = useState(0);
    const [activeD, setActiveD] = useState(0);


    const sliderRef = useRef();
    const sliderRef2 = useRef();
    const sliderRef3 = useRef();
    const sliderRef4 = useRef();

    const settings = {
        centerMode: true,
        dots: true,
        fade: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        customPaging: () => <div className='hidden' />,
        appendDots: (dots) => (
            <div className='flex justify-center'>
                <div className='flex justify-center items-center space-x-2'>
                    {dots && dots.map((dot, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${activeBannerDots === index ? 'bg-black w-8 transition-all duration-300' : ''
                                }`}
                            onClick={() => {
                                setBannerDots(index);
                                sliderRef.current.slickGoTo(index); // Move to the clicked dot's slide
                            }}
                        />
                    ))}
                </div>
            </div>
        ),


    };


    const setting = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        centerPadding: '60px',
        slidesToScroll: 4,
        rows: 2,
        customPaging: () => <div className='hidden' />,
        appendDots: (dots) => (
            <div className='flex justify-center'>
                <div className='flex justify-center items-center space-x-2'>
                    {dots && dots.map((dot, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${activeDot === index ? 'bg-black w-8 transition-all duration-300' : ''
                                }`}
                            onClick={() => {
                                setActiveDot(index);
                                sliderRef2.current.slickGoTo(index); // Move to the clicked dot's slide
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2,
                }
            }

        ],
        afterChange: (currentSlide) => setActiveDot(currentSlide), // Update active dot on slide change
    };


    const settingss = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        centerPadding: '60px',
        slidesToScroll: 4,
        rows: 1,
        customPaging: () => <div className='hidden' />,
        appendDots: (dots) => (
            <div className='flex justify-center'>
                <div className='flex justify-center items-center space-x-2'>
                    {dots && dots.map((dot, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${active === index ? 'bg-black w-8 transition-all duration-300' : ''
                                }`}
                            onClick={() => {
                                setActive(index);
                                sliderRef3.current.slickGoTo(index); // Move to the clicked dot's slide
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ],
        afterChange: (currentSlide) => setActive(currentSlide),
    };

    const seting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerPadding: '60px',
        slidesToScroll: 4,
        arrows: false,
        rows: 1,
        customPaging: () => <div className='hidden' />,
        appendDots: (dots) => (
            <div className='flex justify-center'>
                <div className='flex justify-center items-center space-x-2'>
                    {dots && dots.map((dot, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full bg-gray-300 cursor-pointer ${activeD === index ? 'bg-black w-8 transition-all duration-300' : ''
                                }`}
                            onClick={() => {
                                setActiveD(index);
                                sliderRef4.current.slickGoTo(index); // Move to the clicked dot's slide
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }

        ],
        afterChange: (currentSlide) => setActiveD(currentSlide),
    };




    const Deals = [
        {
            text: "Fashion",
            img: Fashion,
        },
        {
            text: "Food",
            img: Food,
        },
        {
            text: "Beauty",
            img: Beauty,
        },
        {
            text: "Toys",
            img: Toys,
        },
        {
            text: "Cloud",
            img: Cloud,
        },
        {
            text: "Gaming",
            img: Gaming,
        },
        {
            text: "Phones",
            img: Phones,
        },
        {
            text: "Travel",
            img: Travel,
        },
        {
            text: "Movies",
            img: Movies,
        },
    ]

    const working = [
        {
            heading: "Signup",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
            icons: Signup
        },
        {
            heading: "Choose Coupon",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
            icons: Coupon
        },
        {
            heading: "Grab Coupon",
            description: "If you are going to use a passage of Lorem Ipsum, you need to be sure there",
            icons: Cards
        },
    ]

    const tableData = [
        ['Flight', 'Bus', 'Entertainment', 'Jewellery'],
        ['Medicines', 'Hosting', 'Flowers', 'Beauty'],
        ['OTT', 'Bilis', 'Kids', 'Travel'],
        ['Food', 'Eyewear', 'Lifestyle', 'Kitchen'],
        ['Recharge', 'Electronics', 'Hotel', 'Footwear'],
        ['Lab', 'Education', 'Services', 'Furniture'],
        ['Fashion', 'Pizza', 'bike', 'Novelties'],
    ];
    return (
        <div className=''>
            <Navbars />

            <section className='my-10 lg:mt-10 lg:mb-4 mx-auto px-4 lg:px-0 max-w-screen-xl'>
                <div className='text-center'>
                    <Slider {...settings} ref={sliderRef}>
                        <div>
                            <img src={Offers} className='w-full lg:w-[85%] mx-auto' alt="" />
                        </div>
                        <div>
                            <img src={Offers} className='w-full lg:w-[85%] mx-auto' alt="" />
                        </div>
                        <div>
                            <img src={Offers} className='w-full lg:w-[85%] mx-auto' alt="" />
                        </div>
                    </Slider>
                </div>
            </section>




            <section className='my-10 mx-auto px-4 lg:px-0 max-w-screen-xl'>
                <div className='flex justify-center overflow-x-auto'>
                    <ul className='flex items-center p-3 lg:w-auto'>

                        <li className='mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_1_66)">
                                    <path d="M6.5 8.469V9.5H9V10.5H3V9.5H5.5V8.469C4.53335 8.34711 3.64441 7.87663 3 7.14587C2.35559 6.41512 2.00002 5.47431 2 4.5V1.5H10V4.5C9.99998 5.47431 9.64441 6.41512 9 7.14587C8.35559 7.87663 7.46665 8.34711 6.5 8.469ZM3 2.5V4.5C3 5.29565 3.31607 6.05871 3.87868 6.62132C4.44129 7.18393 5.20435 7.5 6 7.5C6.79565 7.5 7.55871 7.18393 8.12132 6.62132C8.68393 6.05871 9 5.29565 9 4.5V2.5H3ZM0.5 2.5H1.5V4.5H0.5V2.5ZM10.5 2.5H11.5V4.5H10.5V2.5Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_66">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li className='hover:text-red-500 cursor-pointer font-semibold'>Popular Coupons</li>
                    </ul>

                    <ul className='flex items-center p-3 lg:w-auto'>
                        <li className='mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_1_69)">
                                    <path d="M8.809 2.984L9.5355 2.2575L10.2425 2.9645L9.516 3.691C10.2339 4.58958 10.5805 5.72894 10.4845 6.87507C10.3886 8.02119 9.8575 9.0871 9.00024 9.85386C8.14299 10.6206 7.02468 11.03 5.87499 10.998C4.7253 10.966 3.6315 10.495 2.81823 9.68176C2.00497 8.8685 1.53396 7.7747 1.50196 6.62501C1.46995 5.47532 1.87937 4.35701 2.64614 3.49976C3.4129 2.6425 4.4788 2.11138 5.62493 2.01546C6.77106 1.91954 7.91042 2.26612 8.809 2.984ZM6 10C6.45963 10 6.91475 9.90947 7.33939 9.73358C7.76403 9.55769 8.14987 9.29988 8.47487 8.97487C8.79988 8.64987 9.05769 8.26403 9.23358 7.83939C9.40947 7.41475 9.5 6.95963 9.5 6.5C9.5 6.04037 9.40947 5.58525 9.23358 5.16061C9.05769 4.73597 8.79988 4.35013 8.47487 4.02513C8.14987 3.70012 7.76403 3.44231 7.33939 3.26642C6.91475 3.09053 6.45963 3 6 3C5.07174 3 4.1815 3.36875 3.52513 4.02513C2.86875 4.6815 2.5 5.57174 2.5 6.5C2.5 7.42826 2.86875 8.3185 3.52513 8.97487C4.1815 9.63125 5.07174 10 6 10ZM5.5 4H6.5V7H5.5V4ZM4 0.5H8V1.5H4V0.5Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_69">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li className='hover:text-red-500 cursor-pointer font-semibold'>Ending Soon</li>
                    </ul>

                    <ul className='flex items-center p-3 lg:w-auto'>
                        <li className='mx-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <g clip-path="url(#clip0_1_72)">
                                    <path d="M6 11.5C6.99456 11.5 7.94839 11.1049 8.65165 10.4017C9.35491 9.69839 9.75 8.74456 9.75 7.75C9.75 7.317 9.635 6.9015 9.5 6.515C8.6665 7.3385 8.0335 7.75 7.6 7.75C9.5975 4.25 8.5 2.75 5.5 0.75C5.75 3.25 4.102 4.387 3.431 5.0185C2.88366 5.53334 2.50362 6.20074 2.34014 6.93416C2.17667 7.66759 2.2373 8.43321 2.51417 9.13177C2.79105 9.83032 3.27141 10.4296 3.89295 10.8519C4.5145 11.2741 5.24858 11.4999 6 11.5ZM6.355 2.6175C7.9755 3.9925 7.9835 5.061 6.7315 7.2545C6.351 7.921 6.8325 8.75 7.6 8.75C7.944 8.75 8.292 8.65 8.6595 8.4525C8.55057 8.86399 8.3476 9.24458 8.06658 9.56429C7.78556 9.884 7.43415 10.1341 7.04004 10.2949C6.64592 10.4558 6.21985 10.5229 5.79538 10.491C5.37091 10.4592 4.95962 10.3293 4.5939 10.1115C4.22819 9.89364 3.91803 9.59391 3.68784 9.23585C3.45766 8.87779 3.31374 8.47118 3.26741 8.04805C3.22108 7.62491 3.27361 7.1968 3.42087 6.79741C3.56812 6.39803 3.80608 6.03829 4.116 5.7465C4.179 5.6875 4.4985 5.404 4.5125 5.3915C4.7245 5.2015 4.899 5.033 5.0715 4.8485C5.6865 4.1895 6.1285 3.4585 6.3545 2.6175H6.355Z" fill="#0C1230" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_72">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                        <li className='hover:text-red-500 cursor-pointer font-semibold'>Latest Coupons</li>
                    </ul>
                </div>
            </section>


            <section className='md:mx-10 xl:mx-56 my-10'>
                <Slider {...setting} ref={sliderRef2} className=''>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
                        <div key={i} className='flex justify-center'>
                            <Card style={{ width: '12rem' }} className='p-4 my-4 sm:p-6 sm:my-6 lg:p-8 lg:my-8 xl:p-10 xl:my-10'>
                                <Card.Body className='flex flex-col justify-center items-center'>
                                    <Card.Title className='text-[#3BA615] text-center mb-3 sm:mb-4'>Upto 60% off on Appliances</Card.Title>
                                    <div className='flex justify-center'>
                                        <Card.Img src={Brands} className='my-2 w-16 sm:w-20' />
                                    </div>
                                    <Card.Text className='text-center text-[#878787] mb-3 sm:mb-4'>
                                        Upto 60% off on summer Appliances
                                    </Card.Text>
                                    <div className='flex justify-center'>
                                        <button className='bg-[#F01C21] text-white px-3 py-1 rounded-lg sm:px-4 sm:py-2 w-[108px] sm:w-[148px]'>Grab now</button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </section>




            <section className='lg:my-10 md:mx-10 xl:mx-56'>
                <div className='text-center'>
                    <div className='inline-block relative'>
                        <h1 className=' text-[24px] font-semibold mb-4 relative'>Deals Of The Day</h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-y-4 border-b border-[#F01C21] w-16 mt-1"></div>
                    </div>
                </div>
                <Slider {...settingss} ref={sliderRef3} className='my-10'>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
                        <div key={i} className='flex justify-center'>
                            <div style={{ width: '16rem' }} className='p-6'>
                                <Card.Body className='flex flex-col justify-center items-center'>
                                    <div className='flex justify-center'>
                                        <Card.Img src={Brands} className='my-2 w-20' />
                                    </div>
                                    <Card.Text className='text-center text-[#091431] text-[12px] mb-4 font-bold'>
                                        Amazon
                                    </Card.Text>
                                    <Card.Text className='text-center text-[#3BA615] mb-2 text-[12px] font-bold'>
                                        Flat 30% Off
                                    </Card.Text>
                                    <div className='flex justify-center'>
                                        <button className='bg-[#F01C21] text-white px-4 py-2 rounded-lg w-[148px]'>Grab now</button>
                                    </div>
                                </Card.Body>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>


            <section className='  bg-gradient-to-b mx-10 lg:mx-10 xl:mx-56 from-zinc-300 to-zinc-300'>
                <div className='text-center'>
                    <div className='inline-block relative'>
                        <h1 className=' text-[24px] font-semibold mb-4 relative'>Deals Of The Day</h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-y-4 border-b border-[#F01C21] w-16 mt-1"></div>
                    </div>
                </div>

                <div className='my-10'>
                    <div className='mx-auto lg:mx-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-4 justify-center'>
                        {Deals.map((item, i) => (
                            <div key={i} className='flex justify-center cursor-pointer hover:border-red-500'>
                                <Card className='p-6'>
                                    <div className='flex flex-col justify-center items-center'>
                                        <div className='flex justify-center'>
                                            <Card.Img src={item.img} className='my-2 w-20' />
                                        </div>
                                        <h1 className='text-center text-[#091431] text-[12px] mb-4 font-bold'>
                                            {item.text}
                                        </h1>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className='mx-auto xl:mx-56 bg-white rounded-b-2xl'>
                        <Slider {...seting} ref={sliderRef4} className='py-10 '>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, i) => (
                                <div key={i} className='flex justify-center '>
                                    <div style={{ width: '20rem' }} className='p-6'>
                                        <Card.Body className='flex flex-col justify-center items-center'>
                                            <div className='flex justify-center'>
                                                <Card.Img src={Brands} className='my-2 w-20' />
                                            </div>
                                            <Card.Text className='text-center text-[#091431] text-[12px] mb-4 font-bold'>
                                                Amazon
                                            </Card.Text>
                                            <Card.Text className='text-center text-[#3BA615] mb-2 text-[12px] font-bold'>
                                                Flat 30% Off
                                            </Card.Text>
                                            <div className='flex justify-center'>
                                                <button className='bg-[#F01C21] text-white px-4 py-2 rounded-lg w-[148px]'>Grab now</button>
                                            </div>
                                        </Card.Body>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className='p-4'>

                        </div>
                    </div>
                </div>
            </section>

            <section className='mx-10 lg:my-6'>
                <div className='flex justify-center'>
                    <img src={Banner} alt="" className='max-w-full  h-auto' style={{ maxHeight: '212px' }} />
                </div>
            </section>



            <section className='my-10'>
                <div className='text-center'>
                    <div className='inline-block relative'>
                        <h1 className='text-[24px] font-semibold mb-4 relative'>Popular Membership</h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-y-4 border-b border-[#F01C21] w-16 mt-1"></div>
                    </div>
                </div>

                <div className='mx-10 lg:mx-56'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 lg:my-10">
                        {/* First row */}
                        <div className="flex justify-center items-center">
                            <img
                                src={FistImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center ">
                            <img
                                src={SecondImage}
                                alt=""
                                className="relative w-full h-full object-cover"
                            />
                            <div className='grid grid-cols-2 absolute bg-white '>
                                {[1, 2, 3, 4].map((item, i) => (
                                    <Card key={i} className='flex justify-center items-center'>
                                        <div style={{ width: '15rem' }} className='p-6'>
                                            <Card.Body className='flex flex-col justify-center items-center'>
                                                <div className='flex justify-center'>
                                                    <Card.Img src={Brands} className='my-2 w-20' />
                                                </div>
                                                <Card.Text className='text-center text-[#091431] text-[12px] mb-4 font-bold'>
                                                    Amazon
                                                </Card.Text>
                                                <Card.Text className='text-center text-[#3BA615] mb-2 text-[12px] font-bold'>
                                                    Flat 30% Off
                                                </Card.Text>
                                                <div className='flex justify-center'>
                                                    <button className='bg-[#F01C21] text-white px-4 py-2 rounded-lg w-[148px]'>Grab now</button>
                                                </div>
                                            </Card.Body>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Second row */}
                        <div className="flex justify-center items-center">
                            <img
                                src={ThirdImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex justify-center items-center">
                            <img
                                src={ForthImage}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section className=' lg:py-10 lg:bg-gradient-to-b lg:from-zinc-300 lg:to-zinc-300'>
                <div className='grid grid-cols-1 lg:grid-cols-2 mx-10 lg:mx-56 bg-white p-2 rounded-xl gap-6 '>
                    <div className='bg-[#F5F5F5] rounded-xl'>
                        <img src={Vectors} alt="" className='py-4 px-7' />
                    </div>
                    <div className="left-[440px] top-[67px]  flex-col justify-start items-start gap-6 my-auto">
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="text-slate-900 text-[32px] font-semibold  leading-10">Subscribe to our<br />Newsletter!</div>
                            <div className="text-neutral-400 text-base font-normal  leading-normal">Be the first to get exclusive offers<br />ands the latest news</div>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 flex">
                            <div className="w-[420px] px-3 py-4 bg-white rounded-lg border border-neutral-300 justify-start items-start inline-flex">
                                <div className="text-stone-400 text-xs font-normal ">Enter your email address</div>
                            </div>
                            <div className="w-[148px] px-4 py-3 bg-red-600 rounded-lg justify-center items-center gap-2 inline-flex">
                                <button className="text-white text-xs font-semibold  uppercase">SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className='my-10 mx-10 lg:mx-56 bg-[##ECECEC]'>
                <div className='text-center'>
                    <div className='inline-block relative'>
                        <h1 className=' text-[24px] font-semibold mb-4 relative'>How It Works?</h1>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 border-y-4 border-b border-[#F01C21] w-16 mt-1"></div>
                    </div>
                </div>
                <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 lg:my-10'>
    {working.map((item, i) => (
        <Card key={i} className='flex justify-center items-center rounded-2xl'>
            <div style={{ width: '18rem' }} className='px-4 py-6'>
                <Card.Body className='flex flex-col justify-center items-center'>
                    <div className='flex justify-center bg-[pink] px-3 py-2 rounded-2xl my-4 lg:hidden'>
                        <Card.Img src={item.icons} className='my-2 w-7 h-7' />
                    </div>
                    <div className='hidden lg:flex justify-center bg-[pink] px-4 py-3 rounded-2xl my-6'>
                        <Card.Img src={item.icons} className='my-2 w-7 h-7' />
                    </div>
                    <Card.Text className='text-center text-[#091431] text-xl mb-4 font-bold'>
                        {item.heading}
                    </Card.Text>
                    <Card.Text className='text-center mb-2 text-sm '>
                        {item.description}
                    </Card.Text>
                </Card.Body>
            </div>
        </Card>
    ))}
</div>

            </section>

            <section className='my-10 mx-10 lg:mx-56'>
                <div className='flex justify-center '>
                    <img src={Application} alt="" className='w-[150vh]' />
                </div>
            </section>

            <section className='lg:mt-10 lg:mb-16 mx-10 lg:mx-56'>
    <div className='flex flex-col lg:flex-row gap-5'>
        <div>
            <img src={Summer} alt="Summer Sake" className='rounded-xl w-full h-auto lg:h-full' />
        </div>
        <div className='w-full'>
            <div className=''>
                <div className='inline-block relative'>
                    <h1 className='text-[20px] lg:text-[24px] font-semibold mb-2 lg:mb-4 relative'>Popular Membership</h1>
                    <div className="absolute bottom-0 border-y-3 lg:border-y-4 border-b border-[#F01C21] w-16 lg:w-28"></div>
                </div>
            </div>
            <div className="overflow-x-auto">
    <table className="w-full border-collapse border border-gray-300 text-sm">
        <tbody>
            {tableData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-3 lg:px-4 py-2">
                            {cell}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </div>
    </div>
</section>


            <Footer />
        </div>
    )
}

export default Home
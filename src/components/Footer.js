import React from 'react';
import FooterLogo from '../img/Footerlogo.png';
import Apple from '../img/btns.png';
import Google from '../img/btn1.png';

const Footer = () => {
  const company = [
    "About Us", "Privacy Policy", "Terms", "Blogs", "Branding", "Career"
  ];
  const general = [
    "Partner With Us", "Write to Us", "Mobile App", "Site Map"
  ];
  const pages = [
    "Amazon Offers", "Google Pay Offers", "PayPal Offers", "PhonePe Offers", "Festival Offers", "Bank Offers"
  ];
  const more = [
    "City Offers", "Brand Offers", "Product Deals", "Gift Cards"
  ];

  return (
    <div className='bg-[#091431] py-8'>
      <footer className='mx-10 lg:mx-56 sm:flex sm:flex-wrap sm:justify-around'>
        <div className='flex flex-col items-center sm:items-start sm:w-1/5 '>
          <div>
            <img src={FooterLogo} alt="" />
          </div>
          <h1 className='text-white my-3 r sm:text-left font-thin'>
            Lorem Ipsum is simply dummy of <br /> the printing and typesetting.
          </h1>
          <div className='flex flex-wrap justify-center lg:justify-start'>
            <img src={Apple} alt="" className='mt-[-40px] lg:mt-[-40px] mr-4 lg:mr-0' />
            <img src={Google} alt="" className='mt-[-100px] lg:mt-[-100px]' />
          </div>

        </div>

        <div className='text-[red] font-bold  my-6 sm:w-1/5'>
          <h1>Company</h1>
          <ul className='list-disc list-inside text-[white]'>
            {company.map((item, i) => (
              <li className='my-2 cursor-pointer hover:text-[red]' key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='text-[red] font-bold  my-6 sm:w-1/5'>
          <h1>General</h1>
          <ul className='list-disc list-inside text-[white]'>
            {general.map((item, i) => (
              <li className='my-2 cursor-pointer hover:text-[red]' key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='text-[red] font-bold  my-6 sm:w-1/5'>
          <h1>Pages</h1>
          <ul className='list-disc list-inside text-[white]'>
            {pages.map((item, i) => (
              <li className='my-2 cursor-pointer hover:text-[red]' key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div className='text-[red] font-bold  my-6 sm:w-1/5'>
          <h1>More</h1>
          <ul className='list-disc list-inside text-[white]'>
            {more.map((item, i) => (
              <li className='my-2 cursor-pointer hover:text-[red]' key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

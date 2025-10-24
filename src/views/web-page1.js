import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE1 = (props) => {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="w-full min-h-[1024px] flex overflow-visible relative items-start shrink-0 bg-black pb-8">
        {/* Menu - HORIZONTAL NAVIGATION */}
        <div className="w-full h-[51px] absolute top-[60px] left-0">
          <div className="w-full max-w-[1440px] mx-auto flex px-[98px] items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-white text-[18px] font-semibold font-vazirmatn">
                <span className="text-white">HomeGym</span>
                <span className="text-[#D90A14]">Essentials</span>
              </span>
            </div>
            
            {/* Search Bar */}
            <div className="h-[38px] flex p-1.5 items-center rounded-xl bg-grey-800">
              <img
                alt="basilsearchoutline2520"
                src="/basilsearchoutline2520-ay69.svg"
                className="w-[25px] h-[25px]"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="flex items-center gap-[50px]">
            <Link to="/" className="text-white text-center TypographyH3 border-b-2 border-[#FF6B35] pb-1">
              Home
            </Link>
              <Link to="/web-page2" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Shop Now</span>
                <img
                  alt="oouinextltr2520"
                  src="/oouinextltr2520-h2e.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page3" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Categories</span>
                <img
                  alt="oouinextltr2520"
                  src="/oouinextltr2520-4fa.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page4" className="flex items-center">
                <span className="text-white text-center TypographyH3">FAQ</span>
              </Link>
              <Link to="/web-page6" className="flex items-center">
                <span className="text-white text-center TypographyH3">Contact Us</span>
              </Link>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <Link to="/web-page7" className="h-9 flex px-4 py-1.5 items-center border border-[#CD4D17] border-solid rounded-xl justify-center">
                <span className="text-orangebutton-normal text-[14px] font-light font-vazirmatn drop-shadow">Login</span>
              </Link>
              <Link to="/web-page5" className="h-9 flex px-4 py-1.5 items-center rounded-xl justify-center bg-redbutton-normal">
                <span className="text-white text-[14px] font-light font-vazirmatn drop-shadow">Sign Up</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Color background elements */}
        <div className="gap-[1140px] top-[191px] left-[-149px] w-[1738px] h-[610px] flex absolute items-end shrink-0 justify-between">
          <img
            alt="Ellipse122520"
            src="/ellipse122520-ejxu-700h.png"
            className="w-[260px] h-[666px]"
          />
          <img
            alt="Ellipse112520"
            src="/ellipse112520-snh9-400w.png"
            className="w-[338px] h-[670px]"
          />
        </div>

        {/* Hero section - HORIZONTAL LAYOUT */}
        <div className="mt-[139px] w-[1440px] mx-auto flex px-[98px] items-center justify-between">
          {/* Left side - Text content */}
          <div className="w-[604px] flex flex-col items-start">
            <div className="w-full mb-6">
              <h1 className="text-white text-[48px] font-bold leading-tight mb-4">
                Transform Your Home Into A
              </h1>
              <h2 className="text-[#FF6B35] text-[48px] font-bold leading-tight mb-6">
                Premium Gym
              </h2>
            </div>
            <div className="w-full flex items-start justify-start">
              <span className="text-white text-left leading-normal text-[16px] font-light">
                Discover compact, high-quality fitness equipment designed
                specifically for home use. Build your perfect workout space
                without the bulk of commercial gym equipment.
              </span>
            </div>
          </div>
          
          {/* Right side - Image content */}
          <div className="w-[604px] h-[662px] flex relative items-start">
            <div className="relative w-[555.6357px] h-[609px] flex items-start">
              <img
                alt="Ellipse72520"
                src="/ellipse72520-2cta-600h.png"
                className="absolute top-[76px] left-0 w-[556px] h-[533px]"
              />
              <div className="absolute top-0 left-[16.7419px] w-[523.1976px] h-[609px] flex items-start">
                <img
                  alt="handsomemuscularblondmalewhitetshirtholdsdumbbellg2520"
                  src="/handsomemuscularblondmalewhitetshirtholdsdumbbellg2520-ah9c-700h.png"
                  className="w-[523px] h-[609px] rounded-[250px]"
                />
              </div>
            </div>
            <div className="top-2 left-0 w-[604.0002px] h-[654px] flex absolute items-start shrink-1">
              <img
                alt="Ellipse102520"
                src="/ellipse102520-2mhe-200h.png"
                className="top-0 left-[88.187px] w-[71px] h-[68px] absolute"
              />
              <img
                alt="Ellipse112520"
                src="/ellipse112520-vr0l-200h.png"
                className="top-[586px] left-[469.1324px] w-[71px] h-[68px] absolute"
              />
              <div className="top-[533px] left-[37.3097px] flex p-1.5 px-9 absolute shadow-[0_16px_24px_rgba(217,10,20,0.16)] items-center border border-solid rounded-[20px] flex-col justify-center bg-grey-900">
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyH2">+ 10</span>
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyTextSmall">
                  Categories
                </span>
              </div>
              <div className="top-[58px] left-[426.8495px] flex p-1.5 px-9 absolute shadow-[0_16px_24px_rgba(217,10,20,0.16)] items-center border border-solid rounded-[20px] flex-col justify-center bg-grey-900">
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyH2">+ 100</span>
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyTextSmall">
                  Positive Reviews
                </span>
              </div>
              <div className="top-[175px] left-0 flex p-1.5 px-9 absolute shadow-[0_16px_24px_rgba(217,10,20,0.16)] items-center border border-solid rounded-[20px] flex-col justify-center bg-grey-900">
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyH2">+ 100</span>
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyTextSmall">
                  Products
                </span>
              </div>
              <div className="top-[514px] left-[441.0001px] flex p-1.5 px-9 absolute shadow-[0_16px_24px_rgba(217,10,20,0.16)] items-center border border-solid rounded-[20px] flex-col justify-center bg-grey-900">
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyH2">PREMIUM</span>
                <span className="text-white h-auto self-stretch text-center leading-normal TypographyTextSmall">
                  Equipments
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE1
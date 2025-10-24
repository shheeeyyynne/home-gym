import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE6 = (props) => {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="w-full min-h-[1024px] flex overflow-visible relative items-start shrink-0 bg-black pb-32">
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
                alt="basilsearchoutline3385"
                src="/basilsearchoutline3385-7vb.svg"
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
                  alt="oouinextltr3385"
                  src="/oouinextltr3385-tpps.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page3" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Categories</span>
                <img
                  alt="oouinextltr3386"
                  src="/oouinextltr3386-mrq.svg"
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
        {/* Footer Section */}
        <div className="mt-[139px] w-full max-w-[1440px] mx-auto px-[98px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side - Company Info */}
            <div className="space-y-8">
              {/* Company Logo and Description */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h1 className="text-white text-[32px] font-bold">
                    <span className="text-white">HomeGym</span>
                    <span className="text-[#D90A14]">Essentials</span>
                  </h1>
                </div>
                <h2 className="text-[#D90A14] text-[24px] font-semibold">Transform Your Body</h2>
                <p className="text-white text-[16px] font-light leading-relaxed max-w-md">
                  Your trusted source for compact, high-quality home gym
                  equipment. Transform any space into your personal fitness
                  sanctuary.
                </p>
              </div>

              {/* Social Media Links */}
              <div className="flex items-center gap-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-grey-800 hover:bg-grey-700 transition-colors cursor-pointer">
                  <img
                    alt="Facebook Icon"
                    src="/streamlinecomputerlogofacebook1mediafacebooksocial3430-a6ar.svg"
                    className="w-5 h-5"
                  />
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-grey-800 hover:bg-grey-700 transition-colors cursor-pointer">
                  <div className="relative w-5 h-5">
                    <img
                      alt="Vector3441"
                      src="/vector3441-4mvl.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                    <img
                      alt="Vector3441"
                      src="/vector3441-xtm.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                  </div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-grey-800 hover:bg-grey-700 transition-colors cursor-pointer">
                  <div className="relative w-5 h-5">
                    <img
                      alt="Vector3441"
                      src="/vector3441-swwp.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                    <img
                      alt="Vector3442"
                      src="/vector3442-1n3.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                  </div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-grey-800 hover:bg-grey-700 transition-colors cursor-pointer">
                  <div className="relative w-5 h-5">
                    <img
                      alt="Vector3442"
                      src="/vector3442-ibm7.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                    <img
                      alt="Vector3442"
                      src="/vector3442-eb2m.svg"
                      className="absolute top-0 left-0 w-5 h-5"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[#D90A14] text-[24px] font-bold mb-6">Contact Us</h3>
                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-center gap-4">
                    <img
                      alt="carbonlocation3448"
                      src="/carbonlocation3448-yx7.svg"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-[14px] font-light">Manila - Philippines</span>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <img
                      alt="fluentcall16regular3449"
                      src="/fluentcall16regular3449-hbf.svg"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-[14px] font-light">1234-56789</span>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-center gap-4">
                    <img
                      alt="materialsymbolsmailoutline3449"
                      src="/materialsymbolsmailoutline3449-npx.svg"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-[14px] font-light">homegymessentials@Gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE6

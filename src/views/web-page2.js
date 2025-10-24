import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE2 = (props) => {
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
                alt="basilsearchoutline2921"
                src="/basilsearchoutline2921-a35f.svg"
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
                  alt="oouinextltr2921"
                  src="/oouinextltr2921-m522sa.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page3" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Categories</span>
                <img
                  alt="oouinextltr2921"
                  src="/oouinextltr2921-uf5.svg"
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
        {/* Main Content Section */}
        <div className="mt-[139px] w-full max-w-[1440px] mx-auto px-[98px]">
          {/* Header Section */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-white text-[48px] font-bold">
                <span className="text-white">See Our</span>
                <span className="text-[#FF6B35]"> Products</span>
              </h1>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      alt="grommeticonslinknext3367"
                      src="/grommeticonslinknext3355-47kd.svg"
                      className="w-6 h-6"
                    />
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      alt="grommeticonslinknext3367"
                      src="/grommeticonslinknext3356-fv74.svg"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-600"></div>
                </div>
              </div>
            </div>
            <p className="text-white text-[18px] font-light leading-relaxed max-w-2xl">
              Discover our most popular compact fitness equipment designed
              specifically for home use. Each product includes detailed
              definitions to help you understand its benefits.
            </p>
          </div>
          {/* Product Cards Section */}
          <div className="relative mb-12">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                alt="Ellipse163368"
                src="/ellipse163368-ele-200h.png"
                className="absolute top-0 left-0 w-16 h-16"
              />
              <img
                alt="Ellipse173369"
                src="/ellipse173369-r5o-200h.png"
                className="absolute bottom-0 right-0 w-16 h-16"
              />
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {/* Medicine Ball Card */}
              <div className="bg-grey-900 rounded-xl p-6 shadow-lg">
                <img
                  alt="Frame5113369"
                  src="/frame5113369-5kdi-300h.png"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-4">
                  <h3 className="text-white text-[24px] font-bold mb-2">Medicine Ball</h3>
                  <p className="text-grey-300 text-[14px] font-light">
                    Balance balls, stability discs, and Medicine balls
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-white text-[20px] font-semibold">
                    <span className="text-[#FF6B35]">149$</span>
                    <span className="text-grey-400">/USDT</span>
                  </span>
                </div>
                <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                  <span className="text-white text-[14px] font-medium">Add to Cart</span>
                </button>
              </div>

              {/* Jump Rope Card */}
              <div className="bg-grey-900 rounded-xl p-6 shadow-lg">
                <img
                  alt="Frame5113370"
                  src="/frame5113370-zt3f-300h.png"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-4">
                  <h3 className="text-white text-[24px] font-bold mb-2">Jump Rope</h3>
                  <p className="text-grey-300 text-[14px] font-light">
                    Jump ropes, stepper, and compact cardio machines
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-white text-[20px] font-semibold">
                    <span className="text-[#FF6B35]">149$</span>
                    <span className="text-grey-400">/USDT</span>
                  </span>
                </div>
                <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                  <span className="text-white text-[14px] font-medium">Add to Cart</span>
                </button>
              </div>

              {/* Adjustable Dumbbell Card */}
              <div className="bg-grey-900 rounded-xl p-6 shadow-lg">
                <img
                  alt="Frame5113371"
                  src="/frame5113371-58tb-300h.png"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-4">
                  <h3 className="text-white text-[24px] font-bold mb-2">Adjustable Dumbbell</h3>
                  <p className="text-grey-300 text-[14px] font-light">
                    Adjustable dumbbells, kettlebells, and weight sets
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-white text-[20px] font-semibold">
                    <span className="text-[#FF6B35]">149$</span>
                    <span className="text-grey-400">/USDT</span>
                  </span>
                </div>
                <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                  <span className="text-white text-[14px] font-medium">Add to Cart</span>
                </button>
              </div>

              {/* Yoga Mat Card */}
              <div className="bg-grey-900 rounded-xl p-6 shadow-lg">
                <img
                  alt="Yoga Mat"
                  src="/yoga.jpg"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="mb-4">
                  <h3 className="text-white text-[24px] font-bold mb-2">Yoga Mat</h3>
                  <p className="text-grey-300 text-[14px] font-light">
                    Yoga mats, blocks, straps, and flexibility tools
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-white text-[20px] font-semibold">
                    <span className="text-[#FF6B35]">149$</span>
                    <span className="text-grey-400">/USDT</span>
                  </span>
                </div>
                <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                  <span className="text-white text-[14px] font-medium">Add to Cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="flex justify-center">
            <button className="h-12 flex px-8 py-3 items-center gap-3 rounded-xl bg-grey-800 hover:bg-grey-700 transition-colors">
              <span className="text-white text-[16px] font-medium">View All</span>
              <img
                alt="oouinextltrI337"
                src="/oouinextltri337-m7d8.svg"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE2

import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE5 = (props) => {
  return (
    <div className="w-full flex overflow-auto min-h-screen items-center bg-black">
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
                alt="basilsearchoutline3348"
                src="/basilsearchoutline3348-fg9.svg"
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
                  alt="oouinextltr3349"
                  src="/oouinextltr3349-nqx9.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page3" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Categories</span>
                <img
                  alt="oouinextltr3350"
                  src="/oouinextltr3350-4qjn.svg"
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
        {/* Sign Up Section */}
        <div className="mt-[139px] w-full max-w-[1440px] mx-auto px-[98px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-l-xl rounded-r-none overflow-hidden">
                <img
                  alt="Gym Image"
                  src="/gym3.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h2 className="text-[32px] font-bold mb-2">Transform Your Body</h2>
                  <p className="text-[18px] font-light">Join thousands of satisfied customers</p>
                </div>
              </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full bg-grey-900 rounded-r-xl p-8 h-[600px] flex flex-col justify-center">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h1 className="text-white text-[32px] font-bold mb-2">Sign Up</h1>
                  <p className="text-white text-[16px]">Create your account to get started</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label className="text-white text-[16px] font-semibold mb-2 block">Name</label>
                    <div className="bg-grey-800 rounded-xl p-4 flex items-center gap-3">
                      <img
                        alt="miuser3381"
                        src="/miuser3381-k58u.svg"
                        className="w-5 h-5"
                      />
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        className="bg-transparent text-white placeholder-grey-400 flex-1 outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="text-white text-[16px] font-semibold mb-2 block">E-Mail</label>
                    <div className="bg-grey-800 rounded-xl p-4 flex items-center gap-3">
                      <img
                        alt="octiconmail243382"
                        src="/octiconmail243382-jmf.svg"
                        className="w-5 h-5"
                      />
                      <input
                        type="email"
                        placeholder="Enter Your E-Mail"
                        className="bg-transparent text-white placeholder-grey-400 flex-1 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-8 space-y-6">
                  {/* Sign Up Button */}
                  <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                    <span className="text-white text-[16px] font-semibold">Sign Up</span>
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-grey-700"></div>
                    <span className="text-white text-[16px] font-semibold">Or</span>
                    <div className="flex-1 h-px bg-grey-700"></div>
                  </div>

                  {/* Google Sign Up */}
                  <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-grey-800 hover:bg-grey-700 transition-colors">
                    <img
                      alt="devicongoogle3383"
                      src="/devicongoogle3383-xcf.svg"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-[16px] font-semibold">Sign Up With Google</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE5

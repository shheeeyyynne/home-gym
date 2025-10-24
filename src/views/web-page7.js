import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE7 = (props) => {
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
              <Link to="/" className="text-white text-center TypographyH3 border-b-2 border-[#D90A14] pb-1">
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
        {/* Login Section */}
        <div className="mt-[139px] w-full max-w-[1440px] mx-auto px-[98px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch">
            {/* Left Side - Login Form */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full bg-grey-900 rounded-l-xl rounded-r-none p-8 h-[600px] flex flex-col justify-center">
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h1 className="text-white text-[32px] font-bold mb-2">Login</h1>
                  <p className="text-white text-[16px]">Welcome back! Please sign in to your account</p>
                </div>

                {/* Form Fields */}
                <div className="space-y-6">
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

                  {/* Password Field */}
                  <div>
                    <label className="text-white text-[16px] font-semibold mb-2 block">Password</label>
                    <div className="bg-grey-800 rounded-xl p-4 flex items-center gap-3">
                      <img
                        alt="password-icon"
                        src="/miuser3381-k58u.svg"
                        className="w-5 h-5"
                      />
                      <input
                        type="password"
                        placeholder="Enter Your Password"
                        className="bg-transparent text-white placeholder-grey-400 flex-1 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Form Actions */}
                <div className="mt-8 space-y-6">
                  {/* Login Button */}
                  <button className="w-full h-12 flex items-center justify-center rounded-xl bg-redbutton-normal hover:bg-red-600 transition-colors">
                    <span className="text-white text-[16px] font-semibold">Login</span>
                  </button>

                  {/* Divider */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-grey-700"></div>
                    <span className="text-white text-[16px] font-semibold">Or</span>
                    <div className="flex-1 h-px bg-grey-700"></div>
                  </div>

                  {/* Google Login */}
                  <button className="w-full h-12 flex items-center justify-center gap-3 rounded-xl bg-grey-800 hover:bg-grey-700 transition-colors">
                    <img
                      alt="devicongoogle3383"
                      src="/devicongoogle3383-xcf.svg"
                      className="w-5 h-5"
                    />
                    <span className="text-white text-[16px] font-semibold">Login With Google</span>
                  </button>

                  {/* Sign Up Link */}
                  <div className="text-center">
                    <p className="text-white text-[14px]">
                      Don't have an account? 
                        <Link to="/web-page5" className="text-[#D90A14] hover:underline inline-block ml-1">
                          Sign Up
                        </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative w-full h-[600px] rounded-r-xl overflow-hidden">
                <img
                  alt="Gym Image"
                  src="/gym2.jpg"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent"></div>
                <div className="absolute bottom-8 right-8 text-white text-right">
                  <h2 className="text-[32px] font-bold mb-2">Welcome Back</h2>
                  <p className="text-[18px] font-light">Continue your fitness journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE7

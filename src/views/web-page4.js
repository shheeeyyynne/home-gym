import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

// Tailwind refactor: styles moved to utility classes via index.css setup

const WebPAGE4 = (props) => {
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
                alt="basilsearchoutline3339"
                src="/basilsearchoutline3339-fsu8.svg"
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
                  alt="oouinextltr3340"
                  src="/oouinextltr3340-32i.svg"
                  className="w-3 h-3"
                />
              </Link>
              <Link to="/web-page3" className="flex items-center gap-1">
                <span className="text-white text-center TypographyH3">Categories</span>
                <img
                  alt="oouinextltr3340"
                  src="/oouinextltr3340-87sm.svg"
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
        {/* FAQ Section */}
        <div className="mt-[139px] w-full max-w-[1440px] mx-auto px-[98px]">
          {/* FAQ Header */}
          <div className="text-center mb-16">
            <h1 className="text-white text-[48px] font-bold">FAQ</h1>
          </div>

          {/* FAQ Content */}
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full">
              <img
                alt="Ellipse203344"
                src="/ellipse203344-lx6j-600w.png"
                className="absolute top-0 left-0 w-32 h-32"
              />
              <img
                alt="Ellipse213345"
                src="/ellipse213345-oene-500h.png"
                className="absolute bottom-0 right-0 w-24 h-24"
              />
            </div>

            {/* FAQ Items */}
            <div className="space-y-6 relative z-10">
              {/* FAQ Item 1 */}
              <div className="bg-grey-900 rounded-xl p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const details = document.querySelector('.faq-details-1');
                    const icon = document.querySelector('.faq-icon-1');
                    if (details) { details.classList.toggle('hidden'); }
                    if (icon) { icon.classList.toggle('rotate-180'); }
                  }}
                >
                  <h3 className="text-white text-[20px] font-semibold">
                    What makes home gym equipment different from commercial gym equipment?
                  </h3>
                  <img
                    alt="grommeticonsnext3345"
                    src="/grommeticonsnext3345-9z37.svg"
                    className="w-6 h-6 faq-icon-1 transition-transform duration-200"
                  />
                </div>
                <div className="faq-details-1 mt-4">
                  <p className="text-[#FF6B35] text-[16px] font-light leading-relaxed">
                    Home gym equipment is specifically designed to be compact,
                    space-efficient, and suitable for residential use. It
                    focuses on versatility and storage while maintaining
                    effectiveness. Our products are selected to fit in smaller
                    spaces without compromising on workout quality.
                  </p>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="bg-grey-900 rounded-xl p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const details = document.querySelector('.faq-details-2');
                    const icon = document.querySelector('.faq-icon-2');
                    if (details) { details.classList.toggle('hidden'); }
                    if (icon) { icon.classList.toggle('rotate-180'); }
                  }}
                >
                  <h3 className="text-white text-[20px] font-semibold">
                    How do I know which equipment is right for my fitness level?
                  </h3>
                  <img
                    alt="grommeticonsnext3346"
                    src="/grommeticonsnext3345-9z37.svg"
                    className="w-6 h-6 faq-icon-2 transition-transform duration-200"
                  />
                </div>
                <div className="faq-details-2 mt-4 hidden">
                  <p className="text-[#FF6B35] text-[16px] font-light leading-relaxed">
                    We provide detailed product descriptions with difficulty levels and recommended fitness ranges. Each product page includes beginner, intermediate, and advanced usage guidelines. You can also contact our support team for personalized recommendations based on your current fitness level and goals.
                  </p>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-grey-900 rounded-xl p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const details = document.querySelector('.faq-details-3');
                    const icon = document.querySelector('.faq-icon-3');
                    if (details) { details.classList.toggle('hidden'); }
                    if (icon) { icon.classList.toggle('rotate-180'); }
                  }}
                >
                  <h3 className="text-white text-[20px] font-semibold">
                    Do you offer assembly and setup services?
                  </h3>
                  <img
                    alt="grommeticonsnext3346"
                    src="/grommeticonsnext3345-9z37.svg"
                    className="w-6 h-6 faq-icon-3 transition-transform duration-200"
                  />
                </div>
                <div className="faq-details-3 mt-4 hidden">
                  <p className="text-[#FF6B35] text-[16px] font-light leading-relaxed">
                    Yes, we offer professional assembly and setup services for most of our equipment. Our trained technicians will come to your home and ensure everything is properly installed and ready to use. Assembly service fees vary by product complexity and location.
                  </p>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-grey-900 rounded-xl p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const details = document.querySelector('.faq-details-4');
                    const icon = document.querySelector('.faq-icon-4');
                    if (details) { details.classList.toggle('hidden'); }
                    if (icon) { icon.classList.toggle('rotate-180'); }
                  }}
                >
                  <h3 className="text-white text-[20px] font-semibold">
                    Do you offer workout guides or training programs?
                  </h3>
                  <img
                    alt="grommeticonsnext3347"
                    src="/grommeticonsnext3345-9z37.svg"
                    className="w-6 h-6 faq-icon-4 transition-transform duration-200"
                  />
                </div>
                <div className="faq-details-4 mt-4 hidden">
                  <p className="text-[#FF6B35] text-[16px] font-light leading-relaxed">
                    Absolutely! We provide comprehensive workout guides, training programs, and instructional videos for all our equipment. These resources are designed to help you maximize the effectiveness of your home gym setup and achieve your fitness goals safely.
                  </p>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="bg-grey-900 rounded-xl p-6">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => {
                    const details = document.querySelector('.faq-details-5');
                    const icon = document.querySelector('.faq-icon-5');
                    if (details) { details.classList.toggle('hidden'); }
                    if (icon) { icon.classList.toggle('rotate-180'); }
                  }}
                >
                  <h3 className="text-white text-[20px] font-semibold">
                    Can I combine different equipment for a complete workout?
                  </h3>
                  <img
                    alt="grommeticonsnext3347"
                    src="/grommeticonsnext3345-9z37.svg"
                    className="w-6 h-6 faq-icon-5 transition-transform duration-200"
                  />
                </div>
                <div className="faq-details-5 mt-4 hidden">
                  <p className="text-[#FF6B35] text-[16px] font-light leading-relaxed">
                    Yes! Our equipment is designed to work together seamlessly. You can create comprehensive workout routines by combining different pieces. We offer bundle packages and provide guidance on how to create effective workout combinations for full-body training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WebPAGE4

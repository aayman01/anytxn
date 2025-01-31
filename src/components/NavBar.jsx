"use client";

import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-white font-bold">
          <svg fill="none" viewBox="0 0 200 32" height="auto" width="164">
            <g clipPath="url(#clip0_3940_240)">
              <path
                fill="white"
                d="M80.4531 4.06999H90.6886V29.89H95.5378V4.06999H106.208V0.421875H80.4531V4.06999Z"
              ></path>
              <path
                fill="white"
                d="M185.343 0.421875V13.2371H170.881V0.421875H166.031V29.89H170.881V16.8864H185.343V29.89H190.145V0.421875H185.343Z"
              ></path>
              <path
                fill="white"
                d="M108.619 12.9244V17.3862C108.619 24.2916 114.356 29.89 121.432 29.89H132.37V26.0304H121.539C117.361 26.0304 113.973 22.7245 113.973 18.6471V17.1145H132.37V13.1986H113.973V11.6661C113.973 7.58869 117.361 4.2827 121.539 4.2827H132.37V0.421875H121.432C114.356 0.421875 108.619 6.02027 108.619 12.9257V12.9244Z"
              ></path>
              <path
                fill="white"
                d="M137 12.9244V17.3862C137 24.2916 142.736 29.89 149.813 29.89H160.751V26.0304H149.92C145.742 26.0304 142.354 22.7245 142.354 18.6471V11.6648C142.354 7.5874 145.742 4.28142 149.92 4.28142H160.751V0.421875H149.813C142.736 0.421875 137 6.02027 137 12.9257V12.9244Z"
              ></path>
              <path
                fill="white"
                d="M33.2767 0.971489L55.1999 20.4319C55.3365 20.5524 55.4139 20.7241 55.4139 20.9035V29.4914C55.4139 30.0449 54.7416 30.3345 54.3214 29.9629L32.3996 10.5012C32.263 10.3807 32.1855 10.209 32.1855 10.0296V1.44304C32.1855 0.88948 32.8578 0.599886 33.278 0.971489H33.2767Z"
              ></path>
              <path
                fill="white"
                d="M32.1855 16.3965V30.2932C32.1855 30.6443 32.4771 30.93 32.8381 30.93H48.0909L32.1855 16.3965Z"
              ></path>
              <path
                fill="white"
                d="M28.2582 9.68413V0.629834C28.2582 0.282577 27.9706 0.00195312 27.6148 0.00195312H16.1227C15.8811 0.00195312 15.6592 0.133936 15.5502 0.344084L0.099202 29.925C-0.118769 30.3427 0.192431 30.8373 0.671705 30.8373H9.78842C10.0326 30.8373 10.2559 30.7028 10.3635 30.49L13.7749 23.8076C13.8839 23.5949 14.1071 23.4603 14.3501 23.4603H27.6135C27.9693 23.4603 28.2569 23.1797 28.2569 22.8325V17.0239C28.2569 16.678 27.9693 16.3973 27.6148 16.396L18.6044 16.3755C18.1278 16.3755 17.8179 15.8848 18.0306 15.4683L20.4848 10.6605C20.5937 10.4478 20.817 10.3133 21.0599 10.3133H27.6135C27.9693 10.3133 28.2569 10.0327 28.2569 9.68541L28.2582 9.68413Z"
              ></path>
              <path
                fill="white"
                d="M55.4141 14.5355V0.637522C55.4141 0.286422 55.1226 0.00195312 54.7628 0.00195312H39.5088L55.4141 14.5355Z"
              ></path>
              <path
                fill="white"
                d="M67.1846 0.294855L59.2864 14.4773C59.2483 14.5465 59.2273 14.6234 59.2273 14.7015V30.4139C59.2273 30.674 59.4426 30.8842 59.7092 30.8842H69.3104C69.577 30.8842 69.7923 30.674 69.7923 30.4139V14.7015C69.7923 14.6234 69.812 14.5465 69.8514 14.4773L77.5027 0.743341C77.6774 0.430682 77.445 0.0488281 77.0799 0.0488281H67.6087C67.4327 0.0488281 67.2699 0.143651 67.1859 0.294855H67.1846Z"
              ></path>
            </g>
            <defs>
              <clipPath id="clip0_3940_240">
                <rect
                  transform="translate(0.0283203 0.00195312)"
                  fill="white"
                  height="30.9276"
                  width="190.117"
                ></rect>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-white items-center text-sm">
          {/* Dropdowns */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <span className="flex items-center gap-1">
              Solutions <ChevronDown size={16} />
            </span>
            {isSolutionsOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded shadow-lg py-2 p-2">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  AnyCass
                </a>
                <a className="block px-4 py-2 hover:bg-gray-200 border-t">
                  AnyBass
                </a>
              </div>
            )}
          </div>
          <span className="w-full whitespace-nowrap group lg:py-3 lg:px-3 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
            <a href="">Service</a>
          </span>
          {/* Static Link */}
          <span className="w-full whitespace-nowrap group lg:py-3 lg:px-3 lg:border-b border-white border-opacity-0 hover:border-opacity-100 transition-all duration-500 cursor-pointer">
            <a href="">About us</a>
          </span>
          {/* Language Selector */}

          <div className="relative text-white lg:block hidden">
            <button
              onClick={() => setDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 bg-transparent border border-white px-3 py-2 rounded-full"
            >
              <Globe size={16} />
              EN
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={16} />
              </motion.div>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-2 bg-white text-black rounded shadow-lg py-2 w-40 p-2"
              >
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                >
                  EN (English)
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                >
                  TH (Thai)
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-100 border-b border-gray-200"
                >
                  ID (Bahasa Indonesia)
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  TW (Traditional Chinese)
                </a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Button */}
        <div className="flex items-center space-x-4">
          {/* Contact Us Button */}
          <button
            href="#"
            className="border border-white bg-transparent hover:bg-white hover:text-[#1F80F0] hidden max-lg:w-full max-lg:justify-center max-lg:mt-16 pl-6 pr-10 py-[13px] text-res-link lg:text-link lg:flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs font-semibold text-white rounded-sm"
          >
            Contact Us
            <svg
              width="12"
              height="12"
              viewBox="0 0 6 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 transform transition-all duration-300 group-hover/highlight:translate-x-2 fill-white group-hover/highlight:fill-[#1F80F0]"
            >
              <path
                d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

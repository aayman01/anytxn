"use client";

import { useState } from "react";
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NavBar() {
  const [isSolutionsOpen, setSolutionsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 p-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-white font-bold">
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={164}
            height={32}
            priority
          />
        </div>

        {/* Mobile/Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 text-white items-center text-sm">
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

        {/* Mobile/Tablet Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[74px] z-50 lg:hidden w-full">
            <div className="bg-[#1F80F0] w-full mx-auto shadow-lg">
              <div className="flex flex-col p-6 space-y-6 text-white">
                {/* Solutions Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setSolutionsOpen(!isSolutionsOpen)}
                    className="flex items-center justify-between w-full py-2"
                  >
                    <span className="text-lg">Solutions</span>
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isSolutionsOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isSolutionsOpen && (
                    <div className="pl-4 py-2 space-y-2">
                      <a href="#" className="block py-2">
                        AnyCass
                      </a>
                      <a href="#" className="block py-2">
                        AnyBass
                      </a>
                    </div>
                  )}
                </div>

                {/* Services */}
                <a href="" className="block py-2 text-lg">
                  Services
                </a>

                {/* About Us */}
                <a href="" className="block py-2 text-lg">
                  About Us
                </a>

                {/* Language Selector */}
                <div className="py-2">
                  <button
                    onClick={() => setDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-center rounded-full border border-white px-4 py-2 gap-2 w-full"
                  >
                    <Globe size={16} />
                    English
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isDropdownOpen && (
                    <div className="mt-3 space-y-3">
                      <a href="#" className="block py-2 text-center">
                        EN (English)
                      </a>
                      <a href="#" className="block py-2 text-center">
                        TH (Thai)
                      </a>
                      <a href="#" className="block py-2 text-center">
                        ID (Bahasa Indonesia)
                      </a>
                      <a href="#" className="block py-2 text-center">
                        TW (Traditional Chinese)
                      </a>
                    </div>
                  )}
                </div>

                {/* Contact Us Button */}
                <button className="w-full border border-white py-3 px-6 mt-4 flex items-center justify-center group/highlight hover:bg-white hover:text-[#1F80F0] transition-colors duration-300">
                  Contact Us
                  <Image
                    src="/assets/icons/chevron-right.svg"
                    alt="Chevron Right"
                    width={12}
                    height={12}
                    className="ml-2 transform transition-all duration-300 group-hover/highlight:translate-x-2 group-hover/highlight:[filter:invert(47%)sepia(98%)saturate(1501%)hue-rotate(198deg)brightness(96%)contrast(98%)]"
                  />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Contact Us Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            href="#"
            className="border border-white bg-transparent hover:bg-white hover:text-[#1F80F0] pl-6 pr-10 py-[13px] text-res-link lg:text-link flex items-center group/highlight transition-all drop-shadow-button-primary hover:shadow-button-primary rounded-xs font-semibold text-white rounded-sm"
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
              <path d="M5.25 4.89844L2.0625 8.08594C1.82812 8.32031 1.47656 8.32031 1.26562 8.08594L0.726562 7.57031C0.515625 7.33594 0.515625 6.98438 0.726562 6.77344L3 4.52344L0.726562 2.25C0.515625 2.03906 0.515625 1.6875 0.726562 1.45312L1.26562 0.914062C1.47656 0.703125 1.82812 0.703125 2.0625 0.914062L5.25 4.10156C5.46094 4.33594 5.46094 4.6875 5.25 4.89844Z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

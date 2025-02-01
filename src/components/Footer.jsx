import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#002045]">
      {/* Desktop View */}
      <div className="hidden lg:block">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between py-11">
            <div>
              <Image
                src="/assets/logo.svg"
                alt="logo"
                width={200}
                height={32}
              />
            </div>
            <div className="flex items-center text-[#00E9EA]">
              <p className="border-r border-blue-dark px-6 py-4 font-semibold">
                Our Solutions
              </p>
              <ul className="flex items-center font-medium">
                <li>
                  <a
                    href="#"
                    className="px-6 py-4 transition-colors duration-300 pr-0 hover:text-[#0057BB70]"
                  >
                    AnyCasS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-6 py-4 transition-colors duration-300 pr-0 hover:text-[#0057BB70]"
                  >
                    AnyBasS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="px-6 py-4 transition-colors duration-300 pr-0 hover:text-[#0057BB70]"
                  >
                    AnyPasS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#00152D]">
          <div className="container flex items-center justify-between py-6 text-[#1F80f0]">
            <p className="text-xs">
              <strong>©2024 All rights reserved</strong>. Any Technology Pte
              Ltd.
            </p>
            <a href="#" className="hover:text-white text-xs font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden max-w-6xl mx-auto">
        <div className="bg-[#001B44] py-5 px-4">
          <div className="flex sm:flex-row items-center justify-between gap-4">
            <div className="w-[164px]">
              <Image
                src="/assets/logo.svg"
                alt="AnyTech"
                width={164}
                height={32}
                priority
              />
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="text-[#1F80F0] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </Link>
              <Link
                href="tel:+1234567890"
                className="text-[#1F80F0] hover:text-white transition-colors"
                aria-label="Phone"
              >
                <Phone size={24} />
              </Link>
              <Link
                href="mailto:info@anytech.com"
                className="text-[#1F80F0] hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 text-center sm:text-left bg-[#00152D] text-[#1F80f0]">
          <p className="text-xs">
            <strong>©2024 All rights reserved</strong>. Any Technology Pte Ltd.
          </p>
          <a href="#" className="hover:text-white text-xs font-medium mt-2">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

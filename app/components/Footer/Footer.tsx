"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-[#243A55] text-footer-text/90 py-8 sm:py-10 md:py-12">
      {/* main footer */}
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 md:gap-12 max-w-7xl mx-auto">
          {/* logo */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="max-w-[300px] flex flex-col gap-3">
              <Image
                src="/logo/logo-mkp.jpg"
                alt="PT Mitra Kencana Persada Logo"
                width={120}
                height={64}
                className="self-center sm:self-start"
              />
              <p className="text-[14px] font-medium tracking-[0.28px] leading-[22px] text-center sm:text-left">
                To be the market leader company in Oil, Gas, & Geothermal for
                both supplies and services in Indonesia
              </p>
            </div>
          </div>

          {/* contact us */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex flex-col gap-3">
              <h3 className="text-[16px] font-semibold text-white leading-[24px]">
                Contact Us
              </h3>

              {/* phone */}
              <div className="flex flex-row gap-2 items-start">
                <Phone size={25} className="opacity-75 flex-shrink-0" />
                <span className="text-[14px] font-normal leading-[22px]">
                  +62 21 750 6200
                </span>
              </div>

              {/* email */}
              <div className="flex flex-row gap-2 items-start">
                <Mail size={25} className="opacity-75 flex-shrink-0" />
                <span className="text-[14px] font-normal leading-[22px]">
                  cs@mkpersada.co.id
                </span>
              </div>

              {/* location */}
              <div className="flex flex-row gap-2 items-start">
                <MapPin size={25} className="opacity-75 flex-shrink-0" />
                <span className="text-[14px] font-normal leading-[22px]">
                  JL. RS. Fatmawati No. 15, Jakarta Selatan
                </span>
              </div>
            </div>
          </div>

          {/* social media */}
          <div className="flex flex-col items-center sm:items-start sm:col-span-2 xl:col-span-1">
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-[16px] font-semibold leading-[24px]">
                Follow Us
              </h3>
              <div className="flex flex-row gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3A4E6A] hover:bg-[#4A5E7A] transition-colors">
                  <FaLinkedinIn size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3A4E6A] hover:bg-[#4A5E7A] transition-colors">
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  aria-label="X (Twitter)"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3A4E6A] hover:bg-[#4A5E7A] transition-colors">
                  <FaXTwitter size={20} />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3A4E6A] hover:bg-[#4A5E7A] transition-colors">
                  <FaFacebookF size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* copyright */}
      <div className="w-full px-4 sm:px-6 md:px-8 xl:px-12 mt-8 sm:mt-10 md:mt-12">
        <div className="max-w-7xl mx-auto">
          <hr className="border-t border-[#3A4E6A] mb-6 sm:mb-8" />
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-[14px] font-normal leading-[22px] tracking-[0.28px] text-center sm:text-left">
              © 2025 PT Mitra Kencana Persada. All rights reserved.
            </p>
            <div className="flex flex-row gap-4">
              <a
                href="#"
                className="text-[14px] font-normal leading-[22px] tracking-[0.28px] hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[14px] font-normal leading-[22px] tracking-[0.28px] hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

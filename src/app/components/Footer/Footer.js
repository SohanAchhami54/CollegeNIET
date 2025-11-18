"use client";

import Link from "next/link";
import Image from "next/image";

import FacebookIcon from "@mui/icons-material/Facebook";

import InstagramIcon from "@mui/icons-material/Instagram";

import { graduateFont } from "@/font";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-950 p-8 md:p-12">

      {/* Top Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">

        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          <div className="flex items-start gap-2">
            <div className="relative w-10 h-10 rounded-xl  flex items-center justify-center">
              <Image src="/logo.png" alt="logo" fill className="w-12 h-12" />
            </div>

            <div>
              <h3 className={`${graduateFont.className} text-base mb-2 text-white`}>NIET </h3>
              <span className="block text-xs font-sans text-gray-500">
                Engineering Excellence
              </span>
            </div>
          </div>

          <p className="max-w-[250px] text-sm leading-6 font-sans text-gray-400">
            Nepal&apos;s premier institute for AI, Biomedical, and Computer
            Engineering education.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap gap-3">
           


            <Link
              href="https://instagram.com"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,#F6339A,#AD46FF)]"
              target="_blank"
            >
              <InstagramIcon className="text-white" />
            </Link>

            <Link
              href="https://facebook.com"
              className="w-11 h-11 rounded-xl flex items-center justify-center bg-[linear-gradient(135deg,#2B7FFF,#155DFC)]"
              target="_blank"
            >
              <FacebookIcon className="text-white" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Programs */}
        <div className="flex flex-col gap-6">
          <h3 className={`${graduateFont.className} text-base mb-0 text-white `}>Programs </h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/biomedical-engineering">Biomedical Engineering</Link></li>
            <li><Link href="/computer-engineering">Computer Engineering</Link></li>
            <li><Link href="/btech-ai">BTech in Artificial Intelligence</Link></li>
            <li><Link href="/admission-requirements">Admission Requirements</Link></li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div className="flex flex-col gap-6">
          <h3 className={`${graduateFont.className} text-base mb-0 text-white`}>Resources</h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/campus-tour">Campus Tour</Link></li>
            <li><Link href="/student-portal">Student Portal</Link></li>
            <li><Link href="/faculty-directory">Faculty Directory</Link></li>
            <li><Link href="/research-publications">Research & Publications</Link></li>
          </ul>
        </div>

        {/* Column 4 - About */}
        <div className="flex flex-col gap-6">
          <h3 className={`${graduateFont.className} text-base mb-0 text-white`}>About </h3>
          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li><Link href="/about-niet">About NIET</Link></li>
            <li><Link href="/mission-vision">Mission & Vision</Link></li>
            <li><Link href="/accreditations">Accreditations</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-sm md:text-base font-sans text-center md:text-left">
          © 2025 Nepal Institute of Engineering & Technology. All rights reserved.
        </p>

        <div className="flex gap-6 text-gray-500 text-sm md:text-base font-sans">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
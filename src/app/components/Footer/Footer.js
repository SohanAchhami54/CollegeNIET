"use client";

import Link from "next/link";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="w-full h-[498.8px] opacity-100 bg-[#030712] p-8">
      {/* Top Section */}
      <div className="w-full h-[218px] grid grid-cols-4 gap-[48px]">

        {/* Column 1 */}
        <div className="flex flex-col gap-[24px]">
          <div className="flex items-start gap-[12px]">
            <div className="w-[48px] h-[48px] rounded-[16px] bg-[linear-gradient(135deg,#0B4C78_0%,#00D3F2_100%)] flex items-center justify-center">
              <span className="text-[20px] text-white font-[Arimo]">N</span>
            </div>
            <div>
              <span className="block text-[20px] font-[Arimo] text-white">
                NIET
              </span>
              <span className="block text-[12px] font-[Arimo] text-[#6A7282]">
                Engineering Excellence
              </span>
            </div>
          </div>

          <p className="w-[210px] text-[16px] leading-[26px] font-[Arimo] text-[#99A1AF]">
            Nepal's premier institute for AI, Biomedical, and Computer
            Engineering education.
          </p>

          {/* Social Icons */}
          <div className="flex gap-[12px]">
            <Link
              href="https://youtube.com"
              className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#FB2C36_0%,#EC003F_100%)]"
              target="_blank"
            >
              <YouTubeIcon className="text-white" />
            </Link>

            <Link
              href="https://twitter.com"
              className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#00A6F4_0%,#2B7FFF_100%)]"
              target="_blank"
            >
              <TwitterIcon className="text-white" />
            </Link>

            <Link
              href="https://linkedin.com"
              className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#155DFC_0%,#1447E6_100%)]"
              target="_blank"
            >
              <LinkedInIcon className="text-white" />
            </Link>

            <Link
              href="https://instagram.com"
              className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#F6339A_0%,#AD46FF_100%)]"
              target="_blank"
            >
              <InstagramIcon className="text-white" />
            </Link>

            <Link
              href="https://facebook.com"
              className="w-[44px] h-[44px] rounded-[14px] flex items-center justify-center bg-[linear-gradient(135deg,#2B7FFF_0%,#155DFC_100%)]"
              target="_blank"
            >
              <FacebookIcon className="text-white" />
            </Link>
          </div>
        </div>

        {/* Column 2 - Programs */}
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-white text-[18px] font-[Arimo]">Programs</h3>
          <ul className="flex flex-col gap-[12px] text-[#99A1AF] text-[16px] leading-[24px]">
            <li>
              <Link href="/biomedical-engineering">Biomedical Engineering</Link>
            </li>
            <li>
              <Link href="/computer-engineering">Computer Engineering</Link>
            </li>
            <li>
              <Link href="/btech-ai">BTech in Artificial Intelligence</Link>
            </li>
            <li>
              <Link href="/admission-requirements">Admission Requirements</Link>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-white text-[18px] font-[Arimo]">Resources</h3>
          <ul className="flex flex-col gap-[12px] text-[#99A1AF] text-[16px] leading-[24px]">
            <li>
              <Link href="/campus-tour">Campus Tour</Link>
            </li>
            <li>
              <Link href="/student-portal">Student Portal</Link>
            </li>
            <li>
              <Link href="/faculty-directory">Faculty Directory</Link>
            </li>
            <li>
              <Link href="/research-publications">Research & Publications</Link>
            </li>
          </ul>
        </div>

        {/* Column 4 - About */}
        <div className="flex flex-col gap-[24px]">
          <h3 className="text-white text-[18px] font-[Arimo]">About</h3>
          <ul className="flex flex-col gap-[12px] text-[#99A1AF] text-[16px] leading-[24px]">
            <li>
              <Link href="/about-niet">About NIET</Link>
            </li>
            <li>
              <Link href="/mission-vision">Mission & Vision</Link>
            </li>
            <li>
              <Link href="/accreditations">Accreditations</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-[56px] border-t border-[#1E2939] mt-6 flex justify-between items-center">
        <p className="text-[#6A7282] text-[16px] font-[Arimo]">
          © 2025 Nepal Institute of Engineering & Technology. All rights
          reserved.
        </p>

        <div className="flex gap-[32px] text-[#6A7282] text-[16px] font-[Arimo]">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

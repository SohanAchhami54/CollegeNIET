"use client";
import { LuGraduationCap } from "react-icons/lu";
import { RiArrowDropRightLine } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAllPrograms } from "@/data/programs";
import { graduateFont } from "@/font";
import { ChevronDown, GraduationCap } from "lucide-react";

const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const pathname = typeof window !== "undefined" ? window.location.pathname : "";

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setAcademicsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLinkClick = () => setMobileView(false);

  const allPrograms = getAllPrograms();
  const programs = [
    ...allPrograms.map(p => ({
      name: p.title,
      href: `/academics/${p.slug}`,
      icon: p.icon,
      isNew: (p.title.includes("Artificial Intelligence") || p.title.includes("Computer Engineering")) && new Date().getFullYear() === 2025,
      descriptor: p.title.includes("Artificial Intelligence")
        ? "Machine Learning • Deep Learning • AI Systems"
        : p.title.includes("Biomedical")
          ? "Healthcare Technology • Medical Devices • Diagnostics"
          : p.title.includes("Computer")
            ? "Hardware-Software Integration • Embedded Systems • Cybersecurity"
            : ""
    }))
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scroll
        ? "backdrop-blur-xl shadow-lg border-cyan-100/30 bg-white/70"
        : "bg-transparent"
        }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src="/logo.png"
                  alt="NIET_LOGO"
                  width={90}
                  height={90}
                  className="rounded-full transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_10px_40px_rgba(29,78,216,0.8)]"
                />
              </div>
              <div className="flex flex-col gap-0">
                <span
                  className={`text-xl md:text-2xl ${scroll ? "text-gray-900" : "text-white"
                    } ${graduateFont.className}`}
                >
                  NIET
                </span>
                <span
                  className={`text-xs opacity-55 ${scroll ? "text-black" : "text-white"
                    }`}
                >
                  (FORMER COLLEGE OF BIOMEDICAL ENGINEERING AND APPLIED SCIENCES)
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between items-center gap-2 text-gray-700">
            <li
              className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${scroll ? "text-gray-900" : "text-white"
                }`}
            >
              <Link href="/about">About</Link>
            </li>

            {/* Academics Dropdown */}
            <li
              className={`relative hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${scroll ? "text-gray-900" : "text-white"
                }`}
              ref={dropdownRef}
            >
              <button
                onClick={() => setAcademicsDropdownOpen(!academicsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${scroll ? "text-gray-900" : "text-white"
                  }`}
              >
                Academics
                <ExpandMoreIcon
                  className={`transition-all ${scroll ? "text-gray-900" : "text-white"
                    } ${academicsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {academicsDropdownOpen && (
                <div
                  role="menu"
                  className="absolute top-full left-0 mt-[45px] bg-white rounded-2xl shadow-2xl border border-cyan-200/60 overflow-hidden z-50 animate-dropdown-open"
                  style={{
                    width: "520px",
                    marginTop: "45px",
                    boxShadow:
                      "0 25px 70px -12px rgba(13, 78, 146, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
                  }}
                >
                  {/* Header */}
                  <div className="relative px-6 pt-8 pb-4 border-b border-cyan-100/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/20">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3
                          className={`text-lg ${graduateFont.className} font-bold text-gray-900 tracking-tight`}
                        >
                          Academic Programs
                        </h3>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Quick navigation to our programs
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* LIST */}
                  <div className="px-6 py-6">
                    <div className="grid grid-cols-1 gap-3">
                      {programs.map((program, index) => {
                        const isActive =
                          pathname === program.href ||
                          (pathname.startsWith("/academics/") &&
                            pathname === program.href);

                        return (
                          <Link
                            key={index}
                            href={program.href}
                            onClick={() => setAcademicsDropdownOpen(false)}
                            className={`group relative flex items-start gap-4 px-4 py-4 rounded-xl transition-all ${isActive
                              ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60 text-[#0d4e92]"
                              : "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50"
                              }`}
                          >
                            {/* ICON SMALL WITH HOVER SCALE */}
                            <div className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-md">
                              {React.cloneElement(program.icon, {
                                className:
                                  "h-5 w-5 text-cyan-600 transition-transform duration-300",
                              })}
                            </div>

                            {/* TEXT SMALL */}
                            <div className="flex-1">
                              <div className="flex items-center gap-1">
                                <span className="text-md tracking-tighter font-semibold mb-1 text-gray-900 group-hover:text-[#0d4e92]">
                                  {program.name}
                                </span>

                                {/* NEW BADGE */}
                                {program.isNew && (
                                  <span className="ml-1 px-2 py-1 text-xs font-bold rounded bg-green-600 text-white">
                                    NEW
                                  </span>
                                )}
                              </div>

                              {program.descriptor && (
                                <p className="text-xs text-gray-500 mt-1">
                                  {program.descriptor}
                                </p>
                              )}
                            </div>

                            {/* Arrow */}
                            <div className="p-1.5 rounded-lg bg-cyan-50 group-hover:bg-cyan-100">
                              <ChevronDown className="h-4 w-4 rotate-[-90deg] text-cyan-600" />
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="px-6 pb-4 pt-6 border-t border-cyan-100/50">
                    <Link
                      href="/academics"
                      onClick={() => setAcademicsDropdownOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 text-[#0d4e92] font-semibold text-sm"
                    >
                      <GraduationCap className="h-4 w-4" />
                      <span>View All Programs</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li
              className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${scroll ? "text-gray-900" : "text-white"
                }`}
            >
              <Link href="/faculty">Faculty and Staff</Link>
            </li>
          </ul>

          {/* MOBILE BUTTON */}
          <button
            className={`lg:hidden flex transition-colors bg-white/10 p-1 rounded-lg ${scroll ? "text-gray-900" : "text-white"
              }`}
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? (
              <CloseIcon className="w-7 h-7" />
            ) : (
              <MenuIcon className="w-7 h-7" />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileView && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-xl rounded-3xl mt-2 shadow-2xl border border-cyan-100/40">
            <div className="flex flex-col gap-2 px-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-cyan-500 py-2"
                onClick={handleLinkClick}
              >
                About
              </Link>

              <div className="px-4">
                <h3
                  className={`text-sm ${graduateFont.className} font-semibold text-gray-500 uppercase tracking-wider mb-3 mt-4 px-2`}
                >
                  Academic Programs
                </h3>

                <div className="space-y-3">
                  {programs.map((program, index) => {
                    const isActive = pathname === program.href;

                    return (
                      <Link
                        key={index}
                        href={program.href}
                        className={`group flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all ${isActive
                          ? "bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60 text-[#0d4e92]"
                          : "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 text-gray-700"
                          }`}
                        onClick={() => setMobileView(false)}
                      >
                        {/* MOBILE ICON WITH HOVER SCALE */}
                        <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50 transition-transform duration-300 group-hover:scale-125 group-hover:shadow-md">
                          {React.cloneElement(program.icon, {
                            className:
                              "h-4 w-4 text-cyan-600 transition-transform duration-300",
                          })}
                        </div>

                        {/* MOBILE TEXT SMALL */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-gray-900">
                              {program.name}
                            </span>

                            {/* NEW BADGE */}
                            {program.isNew && (
                              <span className="ml-1 px-2 py-[2px] text-[10px] font-semibold rounded bg-green-600 text-white">
                                NEW
                              </span>
                            )}
                          </div>

                          {program.descriptor && (
                            <p className="text-[10px] text-gray-500 mt-1">
                              {program.descriptor}
                            </p>
                          )}
                        </div>

                        <RiArrowDropRightLine className="h-4 w-4 text-cyan-600" />
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href="/academics"
                  onClick={() => setMobileView(false)}
                  className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 text-[#0d4e92] font-semibold text-sm"
                >
                  <LuGraduationCap className="h-4 w-4" />
                  <span>View All Programs</span>
                  <RiArrowDropRightLine className="h-4 w-4" />
                </Link>
              </div>
              <Link
                href="/faculty"
                onClick={() => setMobileView(false)}
                className="px-4 py-3 rounded-2xl text-gray-700 hover:text-[#0d4e92]"
              >
                Faculty and Staff
              </Link>





            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

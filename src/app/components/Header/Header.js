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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scroll ? "backdrop-blur-xl shadow-lg border-cyan-100/30 bg-white/70" : "bg-transparent"
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
                  className={`text-xl md:text-2xl ${scroll ? "text-gray-900" : "text-white"} ${graduateFont.className
                    }`}
                >
                  NIET
                </span>
                <span className={`text-xs opacity-55 ${scroll ? "text-black" : "text-white"}`}>
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
                    } ${academicsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {academicsDropdownOpen && (
                <div
                  role="menu"
                  aria-label="Academic programs"
                  className="absolute top-full left-0 mt-[45px] bg-white rounded-2xl shadow-2xl border border-cyan-200/60 overflow-hidden z-50 animate-dropdown-open"
                  style={{
                    width: '520px',
                    marginTop: '45px',
                    boxShadow: '0 25px 70px -12px rgba(13, 78, 146, 0.3), 0 0 0 1px rgba(6, 182, 212, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.8)'
                  }}
                >
                  {/* Decorative gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/30 via-white to-blue-50/20 pointer-events-none"></div>

                  {/* Header section */}
                  <div className="relative px-6 pt-8 pb-4 border-b border-cyan-100/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/20">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-lg ${graduateFont.className} font-bold text-gray-900 tracking-tight`}>Academic Programs</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Quick navigation to our programs</p>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced programs list with descriptors */}
                  <div className="relative px-6 py-4">
                    <div className="grid grid-cols-1 gap-3">
                      {programs.map((program, index) => {
                        const IconComponent = program.icon;
                        const isActive = location.pathname === program.href || (location.pathname.startsWith('/academics/') && location.pathname === program.href);

                        return (
                          <Link
                            key={index}
                            href={program.href}
                            onClick={() => setAcademicsDropdownOpen(false)}
                            role="menuitem"
                            className={`group relative flex items-start gap-4 px-4 py-4 rounded-xl text-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 ${isActive
                              ? 'bg-gradient-to-r from-cyan-50 to-blue-50 text-[#0d4e92] font-medium border border-cyan-200/60 shadow-sm'
                              : 'hover:bg-gradient-to-r hover:from-cyan-50/70 hover:to-blue-50/50 hover:text-[#0d4e92] hover:shadow-sm'
                              }`}
                            aria-label={`Navigate to ${program.name}${program.isNew ? ' - New program' : ''}`}
                          >
                            {/* Icon with enhanced animation */}
                            <div className="relative z-10 flex-shrink-0 mt-0.5">
                              <div className={`p-2.5 rounded-lg transition-all duration-300 ${isActive
                                ? 'bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md scale-110'
                                : 'bg-gradient-to-br from-cyan-50 to-blue-50 group-hover:from-cyan-100 group-hover:to-blue-100 group-hover:shadow-md group-hover:scale-110'
                                }`}>
                                {/* <IconComponent className={`h-5 w-5 transition-all duration-300 ${isActive
                                  ? 'text-white'
                                  : 'text-cyan-600 group-hover:text-[#0d4e92] group-hover:scale-110'
                                  }`} /> */}

                                <div className="relative flex-shrink-0 mt-1">
                                  <div
                                    className="p-2.5 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50"
                                  >
                                    {React.cloneElement(program.icon, {
                                      className:
                                        "h-5 w-5 text-cyan-600",
                                    })}
                                  </div>
                                </div>


                              </div>
                            </div>

                            {/* Title, descriptor, and badge */}
                            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className={`text-sm font-semibold transition-colors duration-200 ${isActive ? 'text-[#0d4e92]' : 'text-gray-900 group-hover:text-[#0d4e92]'
                                      }`}>
                                      {program.name}
                                    </span>
                                    {program.isNew && (
                                      <span className="flex-shrink-0 text-xs font-semibold bg-emerald-600 text-white px-2.5 py-1 rounded" aria-label="New program for 2025">
                                        NEW
                                      </span>
                                    )}
                                  </div>
                                  {program.descriptor && (
                                    <p className={`text-xs mt-1.5 leading-relaxed transition-colors duration-200 ${isActive
                                      ? 'text-gray-600'
                                      : 'text-gray-500 group-hover:text-gray-700'
                                      }`}>
                                      {program.descriptor}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </div>

                            {/* Enhanced arrow indicator */}
                            <div className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${isActive
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2'
                              }`}>
                              <div className="p-1.5 rounded-lg bg-cyan-100/50 group-hover:bg-cyan-200/70 transition-colors duration-200">
                                <ChevronDown className="h-4 w-4 text-cyan-600 rotate-[-90deg]" />
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer CTA */}
                  <div className="relative px-6 pb-4 pt-6 border-t border-cyan-100/50">
                    <Link
                      href="/academics"
                      onClick={() => setAcademicsDropdownOpen(false)}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 text-[#0d4e92] font-semibold text-sm transition-all duration-200 hover:shadow-md"
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

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex transition-colors bg-white/10 p-1 rounded-lg ${scroll ? "text-gray-900" : "text-white"
              }`}
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileView && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-xl rounded-3xl mt-2 shadow-2xl border border-cyan-100/40">
            <div className="flex flex-col gap-2 px-4">

              <Link
                href="/about"
                className="text-gray-700 hover:text-cyan-500 transition-colors py-2"
                onClick={handleLinkClick}
              >
                About
              </Link>

              {/* Mobile Academics Section - Enhanced */}
              <div className="px-4">
                <div className="mb-3 mt-4 px-2">
                  <h3 className={`text-sm ${graduateFont.className} font-semibold text-gray-500 uppercase tracking-wider`}>
                    Academic Programs
                  </h3>
                </div>

                <div className="space-y-3">
                  {programs.map((program, index) => {
                    const isActive =
                      location.pathname === program.href ||
                      (location.pathname.startsWith("/academics/") &&
                        location.pathname === program.href);

                    return (
                      <Link
                        key={index}
                        href={program.href}
                        className={`group relative flex items-start gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 ${isActive
                          ? "text-[#0d4e92] font-semibold bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200/60 shadow-sm"
                          : "text-gray-700 hover:text-[#0d4e92] hover:bg-gradient-to-r hover:from-cyan-50/70 hover:to-blue-50/50"
                          }`}
                        onClick={() => setMobileView(false)}
                        aria-label={`Navigate to ${program.name}${program.isNew ? " - New program" : ""
                          }`}
                      >
                        {/* ICON BLOCK - FIXED */}
                        <div className="relative z-10 flex-shrink-0 mt-0.5">
                          <div
                            className={`p-2 rounded-lg transition-all duration-200 ${isActive
                              ? "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md"
                              : "bg-gradient-to-br from-cyan-50 to-blue-50 group-hover:from-cyan-100 group-hover:to-blue-100 group-hover:shadow-md"
                              }`}
                          >
                            {React.cloneElement(program.icon, {
                              className: `h-5 w-5 transition-colors duration-200 ${isActive
                                ? "text-white"
                                : "text-cyan-600 group-hover:text-[#0d4e92]"
                                }`,
                            })}
                          </div>
                        </div>

                        {/* TEXT BLOCK */}
                        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <span
                              className={`text-sm font-semibold transition-colors duration-200 ${isActive
                                ? "text-[#0d4e92]"
                                : "text-gray-900 group-hover:text-[#0d4e92]"
                                }`}
                            >
                              {program.name}
                            </span>

                            {program.isNew && (
                              <span
                                className="flex-shrink-0 text-xs font-semibold bg-emerald-600 text-white px-2.5 py-1 rounded"
                                aria-label="New program for 2025"
                              >
                                NEW
                              </span>
                            )}
                          </div>

                          {program.descriptor && (
                            <p
                              className={`text-xs leading-relaxed transition-colors duration-200 ${isActive
                                ? "text-gray-600"
                                : "text-gray-500 group-hover:text-gray-700"
                                }`}
                            >
                              {program.descriptor}
                            </p>
                          )}
                        </div>

                        <div
                          className={`flex-shrink-0 mt-0.5 transition-all duration-200 ${isActive
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-100"
                            }`}
                        >
                          <RiArrowDropRightLine className="h-4 w-4 text-cyan-600 " />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* View All Programs Button */}
                <Link
                  href="/academics"
                  onClick={() => setMobileView(false)}
                  className="mt-6 flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 text-[#0d4e92] font-semibold text-sm transition-all duration-200 hover:shadow-md"
                >
                  <LuGraduationCap className="h-4 w-4" />
                  <span>View All Programs</span>
                  <RiArrowDropRightLine className="h-4 w-4 rotate-[-90deg]" />
                </Link>
              </div>

              {/* Mobile Faculty and Staff */}
              <Link
                href="/faculty"
                className={`relative transition-all duration-200 px-4 py-3 rounded-2xl text-gray-700 hover:text-[#0d4e92] hover:bg-gradient-to-r hover:from-cyan-50/80 hover:to-blue-50/60 ${location.pathname === "/faculty-and-staff" ||
                  location.pathname.startsWith("/faculty-and-staff")
                  ? "text-[#0d4e92] font-semibold bg-gradient-to-r from-cyan-50/60 to-blue-50/40"
                  : ""
                  }`}
                onClick={() => setMobileView(false)}
              >
                Faculty and Staff

                {(location.pathname === "/faculty" ||
                  location.pathname.startsWith("/faculty")) && (
                    <span className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-[#0d4e92] rounded-full shadow-sm"></span>
                  )}
              </Link>
            </div>
          </div>
        )}

      </nav>
    </header>
  );
};

export default Header;

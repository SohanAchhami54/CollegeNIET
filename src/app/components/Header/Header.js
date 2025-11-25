"use client";

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
  const programs = allPrograms.map((p) => ({
    name: p.title,
    href: `/academics/${p.slug}`,
    degree: null,
    icon: p.icon,
    isNew: p.title === "BTech in Artificial Intelligence (AI)" || p.title === "BE in Computer Engineering",
    description: p.overview.substring(0, 80) + "...",
  }));

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scroll ? "backdrop-blur-xl shadow-lg border-cyan-100/30 bg-white/70" : "bg-transparent"
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
                  className={`text-xl md:text-2xl ${scroll ? "text-gray-900" : "text-white"} ${
                    graduateFont.className
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
              className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${
                scroll ? "text-gray-900" : "text-white"
              }`}
            >
              <Link href="/about">About</Link>
            </li>

            {/* Academics Dropdown */}
            <li
              className={`relative hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${
                scroll ? "text-gray-900" : "text-white"
              }`}
              ref={dropdownRef}
            >
              <button
                onClick={() => setAcademicsDropdownOpen(!academicsDropdownOpen)}
                className={`flex items-center gap-1 transition-colors ${
                  scroll ? "text-gray-900" : "text-white"
                }`}
              >
                Academics
                <ExpandMoreIcon
                  className={`transition-all ${
                    scroll ? "text-gray-900" : "text-white"
                  } ${academicsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                />
              </button>

              {academicsDropdownOpen && (
                <div className="absolute top-12 left-0 mt-2 w-[378px] max-w-5xl bg-white shadow-xl rounded-2xl overflow-hidden z-50">
                  {/* Header */}
                  <div className="relative px-6 pt-8 pb-4 border-b border-cyan-100/50">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md shadow-cyan-500/20">
                        <GraduationCap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 tracking-tight">Academic Programs</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Quick navigation to our programs</p>
                      </div>
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="relative px-6 py-4">
                    <div className="grid grid-cols-1 gap-3">
                      {programs.map((program, index) => {
                        const isActive =
                          pathname === program.href ||
                          (pathname.startsWith("/academics/") && pathname === program.href);

                        return (
                          <Link
                            key={index}
                            href={program.href}
                            onClick={() => setAcademicsDropdownOpen(false)}
                            className={`group relative flex items-start gap-4 px-4 py-4 rounded-xl text-gray-700 transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-r from-cyan-50 to-blue-50 text-[#0d4e92] font-medium border border-cyan-200/60 shadow-sm"
                                : "hover:bg-gradient-to-r hover:from-cyan-50/70 hover:to-blue-50/50 hover:text-[#0d4e92] hover:shadow-sm"
                            }`}
                          >
                            <div className="relative z-10 flex-shrink-0 mt-0.5">
                              <div
                                className={`p-2 rounded-lg transition-all duration-300 ${
                                  isActive
                                    ? "bg-gradient-to-br from-cyan-500 to-blue-500 shadow-md scale-110"
                                    : "bg-gradient-to-br from-cyan-50 to-blue-50 group-hover:from-cyan-100 group-hover:to-blue-100 group-hover:shadow-md group-hover:scale-110"
                                }`}
                              >
                                {program.icon}
                              </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-1.5 min-w-0">
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="text-sm font-semibold transition-colors duration-200">{program.name}</span>
                                    {program.isNew && (
                                      <span className="flex-shrink-0 text-xs font-semibold bg-green-600 text-white px-1 py-1 rounded">
                                        NEW
                                      </span>
                                    )}
                                  </div>
                                  {program.description && (
                                    <p className="text-xs mt-1.5 text-gray-500">{program.description}</p>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="flex-shrink-0 mt-0.5 transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">
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
              className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors cursor-pointer ${
                scroll ? "text-gray-900" : "text-white"
              }`}
            >
              <Link href="/faculty">Faculty and Staff</Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden flex transition-colors ${
              scroll ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileView && (
          <div className="lg:hidden py-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl mt-2 border border-cyan-100/40">
            <div className="flex flex-col gap-6 px-4">
              <Link
                href="/about"
                className="text-gray-700 hover:text-cyan-500 transition-colors py-2"
                onClick={handleLinkClick}
              >
                About
              </Link>

              {/* Mobile Academics List */}
              <div className="flex flex-col gap-3">
                {programs.map((program, index) => (
                  <Link
                    key={index}
                    href={program.href}
                    className="flex items-start gap-3"
                    onClick={handleLinkClick}
                  >
                    <div>{program.icon}</div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-gray-800">{program.name}</span>
                        {program.isNew && (
                          <span className="text-xs font-semibold bg-green-600 text-white px-2 py-1 rounded-full">
                            NEW
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{program.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/faculty"
                className="text-gray-700 hover:text-cyan-500 transition-colors py-2"
                onClick={handleLinkClick}
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
    
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SchoolIcon from "@mui/icons-material/School";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getAllPrograms } from "@/data/programs";
import { Scroll } from "lucide-react";
import { graduateFont } from "@/font";
const Header = () => {
  const [mobileView, setMobileView] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [academicsDropdownOpen, setAcademicsDropdownOpen] = useState(false);
  const dropdownRef=useRef(null);

  // Scroll effect
  useEffect(()=>{
    const handleScroll=()=> setScroll(window.scrollY>50)
    
    handleScroll()
    window.addEventListener("scroll",handleScroll);
    return ()=>window.removeEventListener("scroll",handleScroll);
  },[]);

  // Close dropdown if clicked outside
useEffect(()=>{
  const handleClickOutside=(e)=>{
    if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
      setAcademicsDropdownOpen(false)
    }
  }
   document.addEventListener("mousedown",handleClickOutside)
   return ()=> document.removeEventListener('mousedown',handleClickOutside)
},[])

  // Close mobile menu when link is clicked
  const handleLinkClick = () => setMobileView(false);

  // Programs
  const allPrograms = getAllPrograms();
  const programs = [
    {
      name: "All Programs",
      href: "/academics",
      degree: null,
      icon: <SchoolIcon className="text-black" />,
      description: "Explore our full range of engineering degrees",
    },
    ...allPrograms.map((p) => ({
      name: p.title,
      href: `/academics/${p.slug}`,
      degree: p.degree,
      icon: p.icon,
      description: p.overview.substring(0, 80) + "...",
    })),
  ];

  return (
   <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500  ${scroll?  ' backdrop-blur-xl shadow-lg  border-cyan-100/30':'bg-transparent'}`}>
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center   gap-3">
            <div className="w-16 h-16 flex  items-center justify-center">
               <img
              src="/logo.png"
              alt="NIET_LOGO"
             className={`rounded-full transition-all  md: duration-200 group-hover:scale-105 group-hover:shadow-[0_10px_40px_rgba(29,78,216,0.8)] `}
            />
            </div>
           
             
            <div className="flex flex-col gap-0 ">
            <span className={`font-normal text- xl:text-2xl text-gray-900 ${scroll?'text-gray-900':'text-white'} ${graduateFont.className}`}>NIET</span>
            <span className={`text-xs  opacity-55 ${scroll?'text-black':'text-white'}`}>(FORMER COLLEGE OF BIOMEDICAL ENGINEERING AND APPLIED SCIENCES)</span>
            </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-between items-center gap-2  text-gray-700">
            <li className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2   transition-colors cursor-pointer ${scroll?'text-gray-900':'text-white'}`}>
              <Link href="/about">About</Link>
            </li>
            <li
              className={`relative hover:bg-gray-400/15 rounded-3xl px-5 py-2  transition-colors cursor-pointer ${scroll?'text-gray-900':'text-white'} `}
              ref={dropdownRef}
            >
              <button
                onClick={() =>
                  setAcademicsDropdownOpen(!academicsDropdownOpen)
                }
                className="flex items-center gap-1"
              >
                Academics <ExpandMoreIcon />
              </button>

              {/* Dropdown */}
              {academicsDropdownOpen && (
                <div className="absolute top-12  left-0 mt-2 w-150 bg-white shadow-xl rounded-xl  overflow-hidden z-50 ">
                  {programs.map((program, index) => (
                    <Link
                      key={index}
                      href={program.href}
                      className="flex items-start text-lg gap-3 px-4 py-3  group"
                      onClick={() => setAcademicsDropdownOpen(false)}
                    >
                      <div className="group-hover:scale-133 transition-all duration-150 ease-in">{program.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between ">
                          <span className="text-gray-800">{program.name}</span>
                          {program.degree && (
                            <span className="text-xs font-semibold  text-gray-700/50 px-2 py-1 rounded-full border-1">
                              {program.degree}
                            </span>
                          )}
                         
                        </div>
                        <p className="text-sm text-gray-500">{program.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
            <li className={`hover:bg-gray-400/15 rounded-3xl px-5 py-2   transition-colors cursor-pointer ${scroll?'text-gray-900':'text-white'}`}>
              <Link href="/faculty">Faculty and Staff</Link>
            </li>
          </ul>

          {/* Desktop Buttons */}
          {/* <div className="hidden lg:flex gap-5 items-center">
            <span className={`cursor-pointer hover:text-black hover:bg-gray-400/15 rounded-3xl px-5 py-2 transition-colors text-gray-700 ${scroll?'text-gray-900':'text-white'}`}>
              Brochure
            </span>
            <Button
              variant="contained"
              className="rounded-full bg-gradient-to-r from-[#0b4c78] to-cyan-500 hover:from-[#0a3d5f] hover:to-cyan-600 shadow-lg transition-all normal-case"
              sx={{
                 borderRadius: "9999px",
                borderWidth: 1,
                borderColor: "#E5E7EB",
                paddingY: "24spx",
                
                paddingX: "12px",
                minHeight: "unset",
              }}
            >
              Apply Now
            </Button>
          </div> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex text-gray-900"
            onClick={() => setMobileView(!mobileView)}
          >
            {mobileView ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
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
              <Link
                href="/notice"
                className="text-gray-700 hover:text-cyan-500 transition-colors py-2"
                onClick={handleLinkClick}
              >
                Notice
              </Link>

              {/* Programs */}
              <div className="px-4 flex flex-col gap-3">
                {programs.map((program, index) => (
                  <Link
                    key={index}
                    href={program.href}
                    className="flex items-start gap-3 group"
                    onClick={handleLinkClick}
                  >
                    <div className="group-hover:scale-122 transtion-all duration-200 ease-in">
                    {program.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="text-gray-800">{program.name}</span>
                        {program.degree && (
                          <span className="text-xs font-semibold bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full border border-cyan-200/50">
                            {program.degree}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-500">{program.description}</p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile Buttons */}
              <div className="flex flex-col gap-2 px-4 mt-4">
                <Button
                  variant="outlined"
                  className="text-sm"
                  sx={{
                    borderRadius: "9999px",
                    borderWidth: 1,
                    borderColor: "#E5E7EB",
                    paddingY: "2px",
                    paddingX: "12px",
                    minHeight: "unset",
                  }}
                >
                  Download Brochure
                </Button>
                <Button
                  variant="contained"
                  className="bg-gradient-to-r from-[#0b4c78] to-cyan-500 shadow-lg"
                  sx={{
                    borderRadius: "9999px",
                    paddingY: "2px",
                    paddingX: "12px",
                    minHeight: "unset",
                  }}
                >
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

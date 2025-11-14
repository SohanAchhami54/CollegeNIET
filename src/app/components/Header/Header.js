
"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "@fontsource/arimo/400.css";
import "@fontsource/arimo/700.css";
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SchoolIcon from '@mui/icons-material/School';
import { getAllPrograms } from '@/data/programs';

const Header = () => {
    const [mobileView, setMobileView] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when clicking a link
    const handleLinkClick = () => {
        setMobileView(false);
    };
    
    const allPrograms = getAllPrograms();
    const programs = [
        { 
            name: "All Programs", 
            href: "/academics", 
            degree: null, 
            icon: <SchoolIcon className="text-cyan-600" />, 
            description: "Explore our full range of engineering degrees" 
        },
        ...allPrograms.map(p => ({
            name: p.title,
            href: `/academics/${p.slug}`,
            degree: p.degree,
            icon: p.icon,
            description: p.overview.substring(0, 80) + "..."
        }))
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className='flex items-center justify-between h-20 lg:h-24'>
                    {/* Logo and Text */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.png" width={56} height={56} alt="NIET_LOGO" className="rounded-full" />
                        <span className="font-normal text-xl text-gray-900">NIET</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex justify-center items-center gap-9 font-normal text-gray-700">
                        <li className="hover:text-cyan-500 transition-colors cursor-pointer">
                            <Link href="/about">About</Link>
                        </li>
                        <li className="hover:text-cyan-500 transition-colors cursor-pointer">
                            <Link href="/academics">Academics</Link>
                        </li>
                        <li className="hover:text-cyan-500 transition-colors cursor-pointer">
                            <Link href="/notice">Notice</Link>
                        </li>
                    </ul>

                    {/* Brochure + Button */}
                    <div className="hidden lg:flex gap-5 items-center">
                        <span className="cursor-pointer hover:text-cyan-500 transition-colors text-gray-700">
                            Brochure
                        </span>
                        <Button 
                            variant="contained"
                            className="rounded-full bg-gradient-to-r from-[#0b4c78] to-cyan-500 hover:from-[#0a3d5f] hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all  active:scale-100 normal-case"
                              sx={{
                           borderRadius: '9999px', // same as rounded-full
                           borderWidth: 1,
                            borderColor: '#E5E7EB', // Tailwind gray-300
                              paddingY: "2px",     // ← reduce vertical height
                            paddingX: "12px",    // ← width stays normal
                             minHeight: "unset",  // ← remove MUI default height
                    }}
                        >
                            Apply Now
                        </Button>
                    </div>

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
                    <div className='lg:hidden py-6 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl mt-2 border border-cyan-100/40'>
                        <div className='flex flex-col gap-6 px-4'>
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
                            
                            {/* Programs Section */}
                            <div className='px-4 '>
                               
                                {programs.map((program, index) => (
                                    <Link 
                                        key={index} 
                                        href={program.href}
                                        className="flex items-start justify-center gap-4 rounded-xl group"
                                        onClick={handleLinkClick}
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0">
                                            <div className=" rounded-xl   transition-all duration-300 group-hover:scale-110 ">
                                                {program.icon}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 mb-1.5">
                                                <span className="text-lg  text-gray-800 group-hover:text-[#0b4c78] transition-colors">
                                                    {program.name}
                                                </span>
                                                <div className="flex items-center gap-1.5 flex-shrink-0">
                                                    {program.degree && (
                                                        <span className="text-xs font-semibold bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 px-2.5 py-1 rounded-full border border-cyan-200/50 shadow-sm">
                                                            {program.degree}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-500 group-hover:text-gray-700 leading-relaxed transition-colors">
                                                {program.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className='flex flex-col gap-2  px-4'>
                               
                               <Button
                            variant="outlined"
                            className=" text-sm"
     
                              sx={{
                             borderRadius: '9999px', // same as rounded-full
                             borderWidth: 1,
                             borderColor: '#E5E7EB', // Tailwind gray-300
                             paddingY: "2px",     // ← reduce vertical height
                            paddingX: "12px",    // ← width stays normal
                             minHeight: "unset",  // ← remove MUI default height
                            
                 }}
              >

                Download Brochure
            </Button>
            
                 {/* <Button className="rounded-full bg-gradient-to-r from-[#0b4c78] to-cyan-500 hover:from-[#0a3d5f] hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scale-100">
                 Apply Now
                </Button> */}
                 <Button className='bg-gradient-to-r from-[#0b4c78] to-cyan-500 hover:from-[#0a3d5f] hover:to-cyan-600 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-105 active:scal'
                            variant="outlined"
     
                              sx={{
                           borderRadius: '9999px', // same as rounded-full
                           borderWidth: 1,
                            borderColor: '#E5E7EB', // Tailwind gray-300
                              paddingY: "2px",     // ← reduce vertical height
                            paddingX: "12px",    // ← width stays normal
                             minHeight: "unset",  // ← remove MUI default height
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
}

export default Header;

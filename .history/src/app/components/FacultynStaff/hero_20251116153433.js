"use client";
import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LanguageIcon from '@mui/icons-material/Language';
import ScienceIcon from '@mui/icons-material/Science';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Reusablebuilding from "../ReusableComHero/Reusablebuilding";  // Import reusable building component
import Reusablecomhero from "../ReusableComHero/Reusablecomhero";    // Import reusable hero component

export default function FacultyHeroSection() {
  // Define the content for the hero section specific to the faculty page
  const facultyHeroContent = {
    badgeIcon: <AutoAwesomeIcon className="text-white" />,  // Badge icon for the faculty
    badgeText: "Expert Engineering Faculty & Staff",  // Badge text
    headingpart1: "Meet Our",  // First part of heading
    headingpart2: "Expert Team ",  // Second part of heading with gradient
    paragraph: "Experienced educators, researchers, and administrators with PhD and Masters degrees from leading institutions. Our faculty combines academic excellence with real-world industry expertise to deliver exceptional engineering education in Nepal."  // Paragraph content
  };

  // Define the stats for the faculty section
  const stats = [
    { number: '6+', title: 'Expert Faculty', icon: <AutoAwesomeIcon style={{color:"white"}} />, description: 'Industry Experience' },
    { number: '7+', title: 'Full-Time Staff', icon: <LanguageIcon style={{color:"white"}}/>, description: 'Global Universities' },
    { number: '19+', title: 'Courses Taught', icon: <ScienceIcon style={{color:"white"}}/>, description: 'Research Excellence' },
    { number: '50+', title: 'PhD Holders', icon: <LeaderboardIcon style={{color:"white"}}/>, description: 'Student Success' }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-32 lg:py-40">
      {/* Reusable building component for background image */}
      <Reusablebuilding /> 

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Reusable hero content */}

          <div className="text-center">
          <Reusablecomhero
            badgeIcon={facultyHeroContent.badgeIcon} 
            badgeText={facultyHeroContent.badgeText}
            headingpart1={facultyHeroContent.headingpart1}
            headingpart2={facultyHeroContent.headingpart2}
            paragraph={facultyHeroContent.paragraph}
          />
          </div>
{/* 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
              {facultyHeroContent.headingpart1}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
              {facultyHeroContent.headingpart2}
          </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
              {facultyHeroContent.paragraph}
          </div> */}


          {/* Stats Grid (Inline without Reusable Component) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
            {stats.map((stat, index) => (
              <div className="flex flex-col items-center" key={index}>
                <div className="bg-transparent backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg mb-4 w-full text-white">
                  <h2 className="text-5xl font-semibold">{stat.number}</h2>
                  <p className="whitespace-nowrap">{stat.title}</p>
                </div>
                <div className="inline-flex gap-2 px-4 py-2 rounded-full bg-transparent border border-blue-100 backdrop-blur-lg bg-black/30 whitespace-nowrap">
                  {stat.icon}
                  <span className="text-white text-sm">{stat.description}</span>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </section>
  );
}

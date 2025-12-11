"use client";
import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LanguageIcon from '@mui/icons-material/Language';
import ScienceIcon from '@mui/icons-material/Science';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import { motion } from "framer-motion";

import Reusablebuilding from "../ReusableComHero/Reusablebuilding";
import Reusablecomhero from "../ReusableComHero/Reusablecomhero";
import { graduateFont, robotoFont } from "@/font";
import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";

export default function FacultyHeroSection() {

  const facultyHeroContent = {
    badgeIcon: <AutoAwesomeIcon className="text-white" />,
    badgeText: "Expert Engineering Faculty & Staff",
    headingpart1: "Meet Our",
    headingpart2: "Expert Team",
    paragraph:
      "Experienced educators, researchers, and administrators with PhD and Masters degrees from leading institutions. Our faculty combines academic excellence with real-world industry expertise to deliver exceptional engineering education in Nepal."
  };

  const stats = [
    { number: '6+', title: 'Expert Faculty' },
    { number: '7+', title: 'Full-Time Staff' },
    { number: '19+', title: 'Courses Taught' },
    { number: '50+', title: 'PhD Holders' }
  ];

  const statsbottom = [
    { icon: <AutoAwesomeIcon style={{ color: "white" }} />, description: 'Industry Experience' },
    { icon: <LanguageIcon style={{ color: "white" }} />, description: 'Global Universities' },
    { icon: <ScienceIcon style={{ color: "white" }} />, description: 'Research Excellence' },
    { icon: <LeaderboardIcon style={{ color: "white" }} />, description: 'Student Success' }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.32, delayChildren: 0.25 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } }
  };

  const statItem = {
    hidden: { opacity: 0, y: 26, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } }
  };



  const { data, isLoading, error } = useQuery({
    queryKey: ['herosection'],
    queryFn: () => api.get('website/hero-section/')
  })
  if (isLoading) {
    return <p> Loading.....</p>
  }
  if (error) {
    return <p>{error.message} </p>
  }
  console.log('Hero message:', data)
  const facultypage = data.data[1]
  console.log('facultypagedata:', facultypage)

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6 py-32 lg:py-40">

      {/* Background animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Reusablebuilding path={facultypage.background_image} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-5xl mx-auto"
        >

          {/* Hero Content */}
          <motion.div variants={fadeUp}>
            <Reusablecomhero {...facultyHeroContent} />
          </motion.div>

          {/* TOP STATS */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-12">
            {stats.map((stat, index) => (
              <motion.div
                variants={statItem}
                key={index}
                className="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-105 hover:z-10"
                whileHover={{ scale: 1.08 }}
              >
                <div className={`bg-transparent backdrop-blur-lg border border-white/20 p-6 rounded-lg shadow-lg mb-4 w-full text-white ${robotoFont.className}`}>
                  <h2 className="text-5xl font-semibold">{stat.number}</h2>
                  <p className="whitespace-nowrap">{stat.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>


          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-10">
            {statsbottom.map((item, index) => (
              <motion.div
                key={index}
                variants={statItem}
                className="flex items-center justify-center gap-2 
                        px-6 py-3  backdrop-blur-lg 
                        border border-blue-100 
                        rounded-full 
                        whitespace-nowrap 
                        transition-all duration-300 
                        hover:scale-105"
              >
                {item.icon}
                <span className="text-white text-sm">{item.description}</span>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
}

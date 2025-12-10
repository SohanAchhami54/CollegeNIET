"use client";
import React from "react";
import { graduateFont, robotoFont } from "@/font";
import { motion } from "framer-motion";
import EastIcon from '@mui/icons-material/East';

export default function CTASection() {

  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-center text-white px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={contentVariants}
        viewport={{ once: true }}
      >
        <h2 className={`text-5xl font-bold mb-6 ${graduateFont.className} max-w-full`}>
          The Future of Engineering Starts Now
        </h2>

        <p className={`text-blue-100 mb-10 ${robotoFont.className} max-w-4xl mx-auto`}>
          Ready to lead in AI, Healthcare, and Technology? Join NIET today. Explore advanced engineering programs, cutting-edge labs, and a community of innovators prepared to shape the future.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            className='rounded-full bg-white text-[#0b4c78] cursor-pointer hover:bg-blue-50 shadow-2xl hover:shadow-white/20 text-lg px-8 h-14 group flex items-center justify-center gap-2'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className={`${robotoFont.className}`}>Apply Now</span>
            <EastIcon className='ml-2 h-5 w-5 group-translate-x-1 transition-transform' />
          </motion.button>

          <motion.button
            className='rounded-full border border-white text-white backdrop-blur-500 cursor-pointer hover:text-white shadow-2xl hover:shadow-white/20 text-lg px-8 h-14 group flex items-center justify-center gap-2'
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <span className={`${robotoFont.className}`}>Download Brochure</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}

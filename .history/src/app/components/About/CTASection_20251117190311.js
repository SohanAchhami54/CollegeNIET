"use client";
import React from "react";
import { Button } from "@mui/material";
import { graduateFont, robotoFont } from "@/font";
import EastIcon from '@mui/icons-material/East';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-center text-white px-6">
      <h2 className={`text-5xl font-bold mb-6 ${graduateFont.className}`}>
        The Future of Engineering Starts Now
      </h2>
      <p className={`max-w-2xl mx-auto text-blue-100 mb-10 ${robotoFont.className}`}>
        Ready to lead in AI, Healthcare, and Technology? Join NIET today.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <button className=' rounded-full bg-white text-[#0b4c78] hover:bg-blue-50 shadow-2xl hover:shadow-white/20 text-lg px-8 h-14 group'>
         <span className=''>Apply for 2026</span> 
         <EastIcon className='ml-2 h-5 w-5 group-translate-x-1 transition-transform' />
          </button>
          <button className=' rounded-full border border-white text-white backdrop-blur-50 hover:bg-white hover:text-[#0b4c78] shadow-2xl hover:shadow-white/20 text-lg px-8 h-14 group flex items-center justify-center gap-2'>
        <Button variant="outlined" color="inherit" size="large">
          Download Brochure
        </Button>
      </div>
    </section>
  );
}

"use client";
import React from "react";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { BorderRight } from "@mui/icons-material";

export const metadata={
  title: "About NIET - National Institute of Engineering and Technology",
  description: "Discover NIET, Nepal's leading institute for Biomedical, AI, and Computer Engineering education since 2005. Learn about our mission, vision, and programs designed to shape the future of technology."
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <img src="/building.jpg" alt ="Bulding Collge" className="w-full h-full objbect-cover opacity-20"/>

      </div>
      <div className="relative z-10 max-w-3xl">
        <p className="text-cyan-300 text-sm mb-3">
          Pioneering Engineering Education Since 2005
        </p>
        <h1 className="text-5xl md:text-6xl text-white font-bold mb-4">
            NIET – Pioneering Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Education Since 2005
          </span>
        </h1>
        <p className="text-blue-100 mb-8">
          Nepal's premier institute for Biomedical Engineering, now expanding into AI and Computer Engineering to shape the future of technology and healthcare
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="contained" sx={{BorderRadius :"16px"}}>🧬 BE in Biomedical Engineering </Button>
          <Button variant="contained" sx={{BorderRadius :"16px"}} size="large">
            🤖 BTech in AI (Artificial Intelligence) (NEW 2025)
          </Button>
          <Button variant="contained" sx={{BorderRadius :"16px"}} size="large">
            💻 BE in Computer Engineering (NEW 2025)
          </Button>
        </div>
       
      </div>
    </section>
  );
}

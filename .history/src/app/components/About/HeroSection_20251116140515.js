"use client";
import React from "react";
import { Button } from "@mui/material";
import Stack from '@mui/material/Stack';
import { BorderRight } from "@mui/icons-material";
import Reusablebuilding from "../ReusableComHero/Reusablebuilding";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Reusablecomhero from "../ReusableComHero/Reusablecomhero";

const reusecom={
   badgeIcon : <AutoAwesomeIcon className="text-blue-400" />,
  badgeText:"Pioneering Engineering Eduction Since 2005",
  headingpart1:"NIET-Pioneering Engineering",
  headingpart2:'Eduction Since 2005',
  paragraph:"NIET (National Institute of Engineering and Technology) is Nepal's premier institute for Biomedical Engineering, now expanding into AI and Computer Engineering to shape the future of technology and healthcare ",
 
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900r px-6">
     {/* building image  */}
      <Reusablebuilding/> 
      <div className='relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40 '>
      <div className=" max-w-5xl mx-auto">

        <Reusablecomhero
        badgeIcon={reusecom.badgeIcon}
        badgeText={reusecom.badgeText}
        headingpart1={reusecom.headingpart1}
        headingpart2={reusecom.headingpart2}
        paragraph={reusecom.paragraph}
        />

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
      </div>
    </section>
  );
}
export const metadata={
  title: "About NIET - National Institute of Engineering and Technology",
  description: "Discover NIET, Nepal's leading institute for Biomedical, AI, and Computer Engineering education since 2005. Learn about our mission, vision, and programs designed to shape the future of technology."
}

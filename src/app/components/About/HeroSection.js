"use client";
import React from "react";
import Reusablebuilding from "../ReusableComHero/Reusablebuilding";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Reusablecomhero from "../ReusableComHero/Reusablecomhero";
import { graduateFont, robotoFont } from "@/font";

const reusecom={
  badgeIcon : <AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon2:<AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon3:<AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon4:<AutoAwesomeIcon className="text-blue-400" />,
  badgeText:"Pioneering Engineering Eduction Since 2005",
  headingpart1:"NIET-Pioneering Engineering",
  headingpart2:'Eduction Since 2005',
  paragraph:"NIET (National Institute of Engineering and Technology) is Nepal's premier institute for Biomedical Engineering, now expanding into AI and Computer Engineering to shape the future of technology and healthcare ",
  badgeText2:"BE in Biomedical Engineering",
  badgeText3:"BTech in AI (Artificial Intelligence) (NEW 2025)",
  badgeText4:"BE in Computer Engineering (NEW 2025)"
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6">
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
        </div>
        <div className="max-w-5xl mx-auto">
        <Reusablecomhero
        badgeIcon2={reusecom.badgeIcon2}
        badgeText2={reusecom.badgeText2}
        badgeIcon3={reusecom.badgeIcon3}
        badgeText3={reusecom.badgeText3}
        badgeIcon4={reusecom.badgeIcon4}
        badgeText4={reusecom.badgeText4}
        />
        </div>

        {/* <div className="flex flex-wrap justify-center gap-4">
          <Button variant="contained" sx={{BorderRadius :"16px"}}>🧬 BE in Biomedical Engineering </Button>
          <Button variant="contained" sx={{BorderRadius :"16px"}} size="large">
            🤖 BTech in AI (Artificial Intelligence) (NEW 2025)
          </Button>
          <Button variant="contained" sx={{BorderRadius :"16px"}} size="large">
            💻 BE in Computer Engineering (NEW 2025)
          </Button>
        </div>
        */}
      </div>
    </section>
  );
}


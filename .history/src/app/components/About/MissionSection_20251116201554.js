"use client";
import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LanguageIcon from '@mui/icons-material/Language';
import { graduateFont, robotoFont } from "@/font";
// import { robotoFont } from "@/font";

// const graduateFont=Graduate({
//     subsets: ['latin'],
//     weight: '400',
//     variable: '--font-graduate',
//   });
export const metadata={
    title: "Our Mission - NIET",
    description: "Learn about NIET's mission to empower the next generation of engineers in biomedical, AI, and computer technology through innovative education and research."
};



export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-6 text-center">
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <AutoAwesomeIcon className="h-4 w-4 text-[#0b4c78]" fontSize="small" />
            <span className={ `text-[#0b4c78] text-sm font-medium ${graduateFont.className} `}>Why We Exist</span>
          </div>
      
      <h2 className={`text-4xl font-bold text-gray-900 mb-1 ${graduateFont.className}`}>
        Building the Future,{" "}
        <span className="block text-4xl font-bold text-blue-700 mb-4">
          One Engineer at a Time
        </span>
        <p className={`text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed ${robotoFont.className}`}> At NIET (National Institute of Engineering and Technology), 
            From Nepal's first Biomedical Engineering college to a multi-program engineering institute. 500+ graduates, 40%+ pursuing global opportunities, 50+ PhD holders. We're creating innovators who shape tomorrow's tech landscape</p>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4 text-left">
            <LanguageIcon className="h-10 w-10 text-[#b4c78] "  fontSize="medium">  </LanguageIcon> 

          </div>
          <h3 className={`text-2xl font-semibold mb-3 ${graduateFont.className}`}>Our Mission</h3>
          <p className={`text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed ${robotoFont.className}`}>Empower students to drive innovation in biomedical technology, artificial intelligence, and computer systems.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition text-left">
          <h3 className={`text-2xl font-semibold mb-3 ${graduateFont.className}`}>Our Vision</h3>
          <p className={`text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed ${robotoFont.className}`}>We aim to be recognized globally for excellence in BME, AI innovation, and computer systems development.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className={`text-2xl font-semibold mb-3 ${graduateFont.className}`}>Our Programs</h3>
          <p className={`text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed ${robotoFont.className}`}>Offering BE in Biomedical, BE in Computer, and BTech in AI Engineering.</p>
        </div>
      </div>
    </section>
  );
}

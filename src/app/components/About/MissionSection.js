"use client";
import React from "react";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import LanguageIcon from '@mui/icons-material/Language';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import PeopleIcon from '@mui/icons-material/People';
import { graduateFont, robotoFont } from "@/font";
import { useQueries } from "@tanstack/react-query";
import api from "@/Api/axios";
import Image from "next/image";
// import api from "@utils/api";

export const metadata={
    title: "Our Mission - NIET",
    description: "Learn about NIET's mission to empower the next generation of engineers in biomedical, AI, and computer technology through innovative education and research."
};

export default function MissionSection() {
const results = useQueries({
    queries: [
        {
            queryKey: ["aboutuswhy"],
            queryFn: () =>api.get('website/why-we-exist/').then(res => res.data)
        },
        {
            queryKey: ["aboutuswhycontent"],
            queryFn : () =>api.get('website/why-we-exist/content/').then(res => res.data)
        }
    ]

})
const [aboutuswhy, aboutuswhycontent] = results

if (aboutuswhy.isLoading || aboutuswhycontent.isLoading) {
    return <p>Loading....</p>
}
if (aboutuswhy.error || aboutuswhycontent.error) {
    return <p>Error : {aboutuswhy.error?.message || aboutuswhycontent.error?.message}</p>
}
console.log('About Us Why Data:', aboutuswhy.data);
console.log('About Us Why Content Data:', aboutuswhycontent.data);  

const words = aboutuswhy.data?.heading_line.split(" ")||[];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-6 text-center">
      
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <AutoAwesomeIcon className="h-4 w-4 text-[#0b4c78]" fontSize="small" />
            <span className={ `text-[#0b4c78] text-sm font-medium ${robotoFont.className} `}>Why We Exist</span>
          </div>

      <h2 className={`${graduateFont.className} !text-6xl text-gray-900 tracking-tight mb-6`}>

        {words[0]} {words[1]} {words[2]}

        <span className="block text-6xl bg-gradient-to-r from-blue-600 to-cyan-400 text-transparent bg-clip-text">
             {words[3]} {words[4]} {words[5]} {words[6]} {words[7]}
        </span>
 
        <p className={`text-lg text-gray-700 font-medium max-w-2xl mx-auto tracking-tight leading-relaxed ${robotoFont.className}`}>
            {aboutuswhy.data.support_text}
        </p>

        </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {aboutuswhycontent.data?.map((item, index) => (
            <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition text-left"
            >
            <div
                className={`
                inline-flex items-center gap-2 px-4 py-4 rounded-md mb-4
                ${index === 0 && "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"}
                ${index === 1 && "bg-gradient-to-r from-green-400 to-teal-500"}
                ${index === 2 && "bg-gradient-to-r from-blue-500 to-teal-400"}
                `}
            >
                <Image
                    src={`https://biomedical.edu.np${item.icon}`}
                    alt={item.heading}
                    width={32}
                    height={32}
                />
            </div>

            <h3 className={`text-2xl font-semibold mb-3 ${graduateFont.className}`}>
                {item.heading}
            </h3>

            <p
                className={`text-base text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed ${robotoFont.className}`}
            >
                {item.support_text}
            </p>
            </div>
        ))}
        </div>


    </section>
  );
}

"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { LuBrain } from "react-icons/lu";
import { LuGraduationCap } from "react-icons/lu";
import { FiDownload } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import { MdOutlineFeed } from "react-icons/md";
import { MdFeed } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";
import { LuBriefcase } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FiZap } from "react-icons/fi";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuAward } from "react-icons/lu";
import { LuDot } from "react-icons/lu";
import { robotoFont } from '@/font';
import { motion, useInView, useScroll } from 'framer-motion';
import Link from 'next/link';
import { useQueries, useQuery } from '@tanstack/react-query';
import api from '@/Api/axios';
export const Hero = ({ program }) => {
  function getProgramBrochure(programId) {
    const brochureMap = {
      "btech-ai": { path: "/AI.pdf", filename: "B.Tech_AI_Brochure.pdf" },
      "be-bme": { path: "/BioM.pdf", filename: "BE_Biomedical_Engineering_Brochure.pdf" },
      "be-computer": { path: "/CE.pdf", filename: "BE_Computer_Engineering_Brochure.pdf" }
    };

    return brochureMap[programId] || { path: "/NEIT Prospectus.pdf", filename: "NEIT Prospectus.pdf" };
  }
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true });
   


  // const results = useQueries({
  //   queries: [
  //     {
  //       queryKey: ['aiherosection'],
  //       queryFn: () => api.get('website/hero-section/').then(res => res.data)
  //     },
  //     {
  //       queryKey: ['graduatecontent'],
  //       queryFn: () => api.get('website/why-graduate-trust-niet/content/').then(res => res.data)
  //     }
  //   ]
  // })

  // const [graduate, graduatecontent] = results

  // if (graduate.isLoading || graduatecontent.isLoading) {
  //   return <p>Loading...</p>;
  // }

  // if (graduate.isError || graduatecontent.isError) {
  //   return <p>Error: {graduate.error?.message || graduatecontent.error?.message}</p>;
  // }
const [heroSectionProgram,setHeroSectionProgram]=useState([])
const [currentProgramData,setCurrentProgramData]=useState({})
 useEffect(()=>{
   api.get('website/academic-programs/')
   .then((res)=>res.data)
   .then ((res)=> {
    setHeroSectionProgram(res)
    
    const matchedProgram=res.find((item)=>{
      console.log('items:',item)
      
      //const programSlug=item.slug.toLowerCase()
      const componentSlug=program.slug.toLowerCase()
      const fullname=item.full_name.toLowerCase()

      if(componentSlug.includes('computer')  && fullname.includes('computer engineering') ){
        return true
      }
       if(componentSlug.includes('biomedical') && fullname.includes('biomedical engineering')){
        return true
      }
       if(componentSlug.includes('artificial')&& fullname.includes('artificial intelligence')){
        return true
      }
        return false
    })
       setCurrentProgramData(matchedProgram)
      
  })
 },[program.slug])
console.log('heroSectionProgram:',heroSectionProgram)
 console.log('currentProgramData:',currentProgramData)
//const herosectionai
  return (
    <>
      <section className='relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 inset-0 z-1 pt-20 lg:pt-24 pb-8 lg:pb-0 overflow-hidden'>
        {/* image  */}
        <div className='absolute w-100% h-auto inset-0 z-0'>
          <Image src={program.image} alt={program.title} fill className='w-full h-full object-cover opacity-20 '></Image>
        </div>

        {/* hero section  */}
        <div className='relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 xl:px-20 py-6  sm:py-8 lg:py-16 w-full flex flex-col justify-center ' ref={heroRef}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full ">

            {/* image - LEFT SIDE */}
            <motion.div
              ref={imageRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isImageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative col-span-1 lg:col-span-5"
            >
              <div className='relative h-60 sm:h-80 md:h-95 lg:h-125 xl:h-140 rounded-xl sm:rounded-4xl overflow-hidden shadow-2xl'>

                {program.slug === 'btech-artificial-intelligence' && (
                  <div className='absolute inset-0 '>
                    <Image src="/ArtificialIntelligence.png"
                      alt='ArtificialIntelligence' fill
                      className=' object-cover scale-110'
                      loading="eager"
                    />
                  </div>
                )}

                {program.slug === 'be-biomedical-engineering' && (
                  <div className='absolute inset-0 '>
                    <Image src="/BioMedicalEngineeringInNepal.png"
                      alt='BioMedicalEngineering' fill
                      className='w-full h-full object-cover scale-110'
                      loading="eager"
                    />
                  </div>
                )}
                {program.slug === 'be-computer-engineering' && (
                  <div className='absolute inset-0 '>
                    <Image src="/ComputerEngineering.png"
                      alt='ComputerEngineering' fill
                      className='w-full h-full object-cover scale-110'
                      loading="eager"
                    />
                  </div>
                )}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center">
                    <LuBrain className='w-8 h-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-900' />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* right side content - RIGHT SIDE */}
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isContentInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className='col-span-1 lg:col-span-7'
            >
              <div className='inline-flex  items-center gap-2 mb-6 px-3 py-2  rounded-3xl bg-white/10 border border-white/15'>
                <LuGraduationCap className='text-cyan-500 w-5 h-5 ' />
                <div className='text-xs sm:text-base text-white tracking-tight font-semibold'>{program.degree} </div>
              </div>
              <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-white mb-7'>{program.title} </h1>



              <div className='flex flex-wrap text-sm gap-2 sm:gap-3 lg:gap-4 mb-6'>
                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl border-2 border-white/15'>
                  <span>Duration: </span>
                  <span className='font-semibold'> {program.duration}</span>
                </div>

                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl  border-2 border-white/15'>
                  <span>Credit: </span>
                  <span className='font-semibold'> {program.credit} </span>
                </div>

                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl  border-2 border-white/15'>
                  <span>Intake: </span>
                  <span className='font-semibold'> {program.intake} </span>
                </div>
              </div>

              <p className={` text-sm lg:text-xl  ${robotoFont.className} text-gray-300 mb-6`}>{program.description} </p>

              {/* button  */}
              <div className='flex flex-wrap gap-3 pt-4 sm:pt-6'>

                <div className='flex flex-wrap items-center gap-2'>
                  <Link
                    href={program ? getProgramBrochure(program.id).path : "/NEIT Prospectus.pdf"}
                    download={program ? getProgramBrochure(program.id).filename : "NEIT Prospectus.pdf"}
                    className="inline-flex items-center justify-center"
                  >
                    <Button

                      className=" inline-flex  bg-white text-[#0d4e92] hover:bg-blue-50 text-sm border border-gray-200 shadow-sm px-6 py-5"
                      aria-label="Download program brochure flex justify-between items-center"
                    >
                      {/* <Download className="mr-2 h-4 w-4" /> */}
                      <FiDownload className="h-4 w-4  " />
                      <span className={`${robotoFont.className} font-medium text-md`} > Download Brochure </span>

                    </Button>
                  </Link>

                  <Button
                    variant="outline"
                    className={`${robotoFont.className} border border-white bg-white/15 text-white hover:bg-white/15 hover:text-white font-medium flex items-center justify-center gap-4 text-md px-6 py-5 rounded-sm`}>
                    <MdOutlineFeed />
                    <span>Fee Structure</span>

                  </Button>

                  <Button
                    variant="outline"
                    className={` ${robotoFont.className}  border !border-white hover:bg-white  font-medium flex items-center justify-center  bg-white text-blue-900 gap-4 text-md px-6 py-5 rounded-sm`}>
                    <span>Apply Now</span>
                    <FiArrowRight />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>



          {/* career, key skills, eligibility, entrance exam, scholarship  */}
          <motion.div
            ref={cardsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className='mt-6 sm:mt-8 lg:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
           gap-3 sm:gap-4 lg:gap-5 w-full'
          >

            {/* Career Prospects  */}
            <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-300 ease-out 2.s hover:bg-white/15    min-h-0 sm:min-h-70 '>
              <div className='flex items-center gap-2 sm:gap-2.5 mb-3 '>
                <div className='bg-cyan-500/20 p-2 rounded-lg '>
                  <LuBriefcase className='text-cyan-500 h-4 w-4' />
                </div>
                <h3 className={`${robotoFont.className} text-white text-sm sm:text-base `}>Career Prospects</h3>
              </div>
              <ul className='space-y-1.5 sm:space-y-2'>
                {program.careerOutcomes.slice(0, 3).map((carrer, index) => (
                  <li key={index} className='flex items-center '>
                    <div className='flex items-center   gap-2 '>
                      <FaAngleRight className='text-cyan-500 w-3 h-3  flex-shrink-0' />
                      <span className='text-sm text-white'> {carrer}</span>
                    </div>
                  </li>
                ))}
              </ul>
              {program.careerOutcomes.length > 3 && (
                <button className='text-cyan-200 text-xs mt-2 sm:mt-3 transition-all cursor-pointer hover:underline'>
                  + {program.careerOutcomes.length - 3} more Careers
                </button>
              )}
            </div>


            {/* key skills  */}
            <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-300 ease-out 2.s hover:bg-white/15    min-h-0 sm:min-h-70 '>
              <div className='flex items-center gap-2 sm:gap-2.5 mb-3 '>
                <div className='bg-blue-500/20 p-2 rounded-lg '>
                  <FiZap className='text-blue-300 h-4 w-4' />
                </div>
                <h3 className={`${robotoFont.className} text-white text-sm sm:text-base `}>Key Skills</h3>
              </div>
              <ul className='space-y-1.5 sm:space-y-2'>
                {program.degreeHighlights.slice(0, 3).map((skill, index) => (
                  <li key={index} className='flex items-center '>
                    <div className='flex items-center   gap-2 '>
                      <IoIosCheckmarkCircleOutline className='text-green-500 w-4 h-4  flex-shrink-0' />
                      <span className='text-sm text-white'> {skill}</span>
                    </div>
                  </li>
                ))}
              </ul>
              {program.degreeHighlights.length > 3 && (
                <button className='text-cyan-200 text-xs mt-2 sm:mt-3 transition-all cursor-pointer hover:underline'>
                  + {program.degreeHighlights.length - 3} more Skills
                </button>
              )}
            </div>

            {/* Eligibility  */}
            <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5
          transition-all duration-300 ease-out 0.8s hover:bg-white/15 min-h-0 sm:min-h-70'>

              <div className='flex items-center gap-2 sm:gap-2.5 mb-3'>
                <div className='p-2 bg-purple-500/20 rounded-lg'>
                  <LuGraduationCap className='w-4 h-4 text-purple-300' />
                </div>
                <h3 className={`${robotoFont.className} text-white text-sm sm:text-base `}>Eligibility </h3>
              </div>
              <ul className='space-y-1.5 sm:space-y-2'>
                {program.admissionEligibility.split('\n').map((admission, index) => (
                  admission.trim() && (
                    <li key={index} className=''>
                      <div className='flex items-start gap-2'>
                        <div className=" flex items-center justify-center mt-1">
                          <LuDot className=" text-cyan-300" />
                        </div>
                        <span className='text-white text-sm '>{admission.replace(/^•\s*/, '')}</span>
                      </div>


                    </li>
                  )))}
              </ul>
            </div>

            {/* Entrance Exam  */}
            {program.entranceExamRequired !== undefined && (
              <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5
              transition-all duration-300 ease-out 0.8s hover:bg-white/15 min-h-0 sm:min-h-40 '>

                <div className='flex items-center gap-2 sm:gap-2.5 mb-3'>
                  <div className='p-2 bg-orange-500/20 rounded-lg'>
                    <MdOutlineFeed className='w-4 h-4 text-orange-300' />
                  </div>
                  <h3 className={`${robotoFont.className} text-white text-sm sm:text-base `}>Entrance Exam </h3>
                </div>
                <p className='text-xs sm:text-sm   text-white'>{program.entranceExamNote || (program.entranceExamRequired ? "Entrance exam required" : "No entrance exam, direct admission")} </p>
              </div>
            )}

            {/* Scholarship  */}
            {program.scholarshipInfo && (
              <div className='bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 transition-all duration-300 ease-out 0.9s hover:bg-white/15 min-h-0 sm:min-h-40'>

                <div className='flex items-center gap-2 mb-3'>
                  <div className='p-2 bg-green-500/20 rounded-lg'>
                    <LuAward className='w-4 h-4 text-green-300' />
                  </div>
                  <h3 className={`${robotoFont.className} text-white text-sm sm:text-base `}> Scholarship</h3>
                </div>
                <div className='space-y-2'>
                  <p className='text-white text-xs sm:text-sm'> {program.scholarshipInfo.description} </p>
                  {program.scholarshipInfo.note && (
                    <p className='text-xs text-blue-200/80 italic'>{program.scholarshipInfo.note} </p>
                  )}
                </div>

              </div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
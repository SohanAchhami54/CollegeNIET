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
import api from '@/Api/axios';
import { useQueries } from '@tanstack/react-query';
export const Hero = ({ program }) => {


const handleBrochureDownload = () => {
  if (!currentProgramData?.brochure) return;

  window.location.href = `/api/download-brochure?path=${currentProgramData.brochure}`;
};


  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true });
  const contentRef = useRef(null);
  const isContentInView = useInView(contentRef, { once: true });
  const cardsRef = useRef(null);
  const isCardsInView = useInView(cardsRef, { once: true });
   



const [heroSectionProgram,setHeroSectionProgram]=useState([])
const [currentProgramData,setCurrentProgramData]=useState({}) //for duration,credit and intake

const [heroSectionData, setHeroSectionData] = useState(null);//for action and bg_image
const [currentHeroData,setCurrentHeroData]=useState({})

const fetchAcademicPrograms=async()=>{
  try {
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
  }catch(error){
    console.error('Error fetching academic programs:',error)
  }   
}

 const fetchHeroSection = async () => {
    try {
       api.get('website/hero-section/')
     .then((res)=>res.data)
     .then ((res)=> {
     setHeroSectionData(res)
    
    const matchedProgram=res.find((item)=>{
      console.log('items:',item)
      
      //const programSlug=item.slug.toLowerCase()
      const componentSlug=program.slug.toLowerCase()
       const heading=item.heading_line.toLowerCase()

      if(componentSlug.includes('computer')  && heading.includes('computer engineering') ){
        return true
      }
       if(componentSlug.includes('biomedical') && heading.includes('biomedical engineering')){
        return true
      }
       if(componentSlug.includes('artificial')&& heading.includes('artificial intelligence')){
        return true
      }
        return false
    })
       setCurrentHeroData(matchedProgram)
      
  })
    } catch (error) {
      console.error('Error fetching hero section:', error);
    }
  };
// console.log('academicherosectiondata:',heroSectionData)

 useEffect(()=>{
     fetchAcademicPrograms()
     fetchHeroSection()
 },[])

// console.log('heroSectionProgram:',heroSectionProgram)
//  console.log('currentProgramData:',currentProgramData)
//  console.log('heroSectionData:',heroSectionData)
//  console.log('currentHeroData:',currentHeroData)
// console.log("currentheropage_pic:",currentHeroData.background_image)

const results= useQueries({
  queries:[
    {
      queryKey:['careerprospects'],
      queryFn:()=>api.get(`/website/program-career-prospects/${currentProgramData?.slug}`)
    },
    {
       queryKey:['keyskills'],
       queryFn:()=>api.get(`/website/program-key-skills/${currentProgramData?.slug}`)
    },
    {
      queryKey:['eligibility'],
      queryFn:()=>api.get(`/website/program-eligiblity/${currentProgramData?.slug}`)
    },{
      queryKey:['entranceexam'],
      queryFn:()=>api.get(`/website/program-entrance-exam/${currentProgramData?.slug}`)
    },
    {
      queryKey:['scholarship'],
      queryFn:()=>api.get(`/website/program-scholarship/${currentProgramData?.slug}`)
    }
  ]
})
const [careerprospects,keyskills,eligibility,entranceexam,scholarship]=results
// console.log('careerprospects:',careerprospects?.data)
// console.log('keyskills:',keyskills?.data)
// console.log('eligibility:',eligibility?.data)
// console.log('entranceexam:',entranceexam?.data)
// console.log('scholarship:',scholarship?.data)



//const herosectionai
  return (
    <>
      <section className='relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 inset-0 z-1 pt-20 lg:pt-24 pb-8 lg:pb-0 overflow-hidden'>
        {/* image  */}
        <div className='absolute w-100% h-auto inset-0 z-0'>
         {currentHeroData?.background_image && (
     <Image
     src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${currentHeroData.background_image}`}
     alt='bg-image'
     fill
     className='w-full h-full object-cover opacity-20'
    />
   )}
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
                {currentHeroData?.support_image && (
                  <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${currentHeroData.support_image}`} alt='image' fill className='object-cover scale-110' />
                )}
                <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-xl sm:rounded-2xl bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center">
                    {/* <LuBrain className='w-8 h-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-gray-900' /> */}
                     {currentHeroData?.support_icon && (
                  <Image
                  src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${currentHeroData.support_icon}`}
                  alt={`${currentHeroData.page_name}`}
                  width={32}
                  height={32}
                 className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
                />
                )}
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
                <div className='text-xs sm:text-base text-white tracking-tight font-semibold'>{currentHeroData.call_to_action_1} </div>
              </div>
              <h1 className='text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] text-white mb-7'>{currentHeroData.heading_line} </h1>



              <div className='flex flex-wrap text-sm gap-2 sm:gap-3 lg:gap-4 mb-6'>
                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl border-2 border-white/15'>
                  <span>Duration: </span>
                  <span className='font-semibold'> {currentProgramData.duration}</span>
                </div>

                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl  border-2 border-white/15'>
                  <span>Credit: </span>
                  <span className='font-semibold'> {currentProgramData.credit} </span>
                </div>

                <div className='flex flex-wrap gap-2 justify-center items-center text-white bg-white/10 px-5 py-3 rounded-3xl  border-2 border-white/15'>
                  <span>Intake: </span>
                  <span className='font-semibold'> {currentProgramData.current_intake}({currentProgramData.total_seats})  </span>
                </div>
              </div>

              <p className={` text-sm lg:text-xl  ${robotoFont.className} text-gray-300 mb-6`}>{currentHeroData.support_text} </p>

              {/* button  */}
              <div className='flex flex-wrap gap-3 pt-4 sm:pt-6'>

                <div className='flex flex-wrap items-center gap-2'>
            <Button
  onClick={handleBrochureDownload}
  className="bg-white text-[#0d4e92] hover:bg-blue-50 px-6 py-5 flex gap-2"
>
  <FiDownload className="h-4 w-4" />
 {currentHeroData.call_to_action_4}
</Button>


                  <Button
                    variant="outline"
                    className={`${robotoFont.className} border border-white bg-white/15 text-white hover:bg-white/15 hover:text-white font-medium flex items-center justify-center gap-4 text-md px-6 py-5 rounded-sm`}>
                    <MdOutlineFeed />
                    <span>{currentHeroData.call_to_action_2} </span>

                  </Button>

                  <Button
                    variant="outline"
                    className={` ${robotoFont.className}  border !border-white hover:bg-white  font-medium flex items-center justify-center  bg-white text-blue-900 gap-4 text-md px-6 py-5 rounded-sm`}>
                    <span>{currentHeroData.call_to_action_3} </span>
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
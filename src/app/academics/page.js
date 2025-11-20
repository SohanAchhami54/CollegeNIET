  "use client"
  import React, { useRef } from 'react'
  import Reusablebuilding from '../components/ReusableComHero/Reusablebuilding'
  import { LuGraduationCap } from "react-icons/lu";
  import { motion, useInView } from "motion/react";//hook that tell u element is visible or not in 
  // screen
  import { LuSparkles } from "react-icons/lu";
  import { HiOutlineCheckCircle } from "react-icons/hi";
  import { LuFlaskConical } from "react-icons/lu";
  import { graduateFont, robotoFont } from '@/font';
  import { getAllPrograms } from '@/data/programs';
  import { FiArrowRight } from "react-icons/fi";
  import { TbDownload } from "react-icons/tb";
  import { MdOutlineFeed } from "react-icons/md";
  
import Image from 'next/image';
  const Page = () => {
      const programs=getAllPrograms();
      const ref=useRef(null);
      const isInView=useInView(ref,{once:true,margin:'-100px 0px -100px 0px'});
      const variants = {
      hidden:{opacity:0,y:20},
      visible:{opacity:1,y:0}
    };
      return (
      <>
      {/* hero part  */}
    <section ref={ref} className='relative min-h-screen overflow-hidden bg-gradient-to-r  from-blue-950  via-blue-900 to-slate-900 pt-13 lg:pt-20'>
        

        {/* for building image  */}
        <Reusablebuilding/>
          {/* first components hero */}
            <section className=' relative z-10  max-w-[1400px] mx-auto sm:px-6 lg:px-12 py-10 sm:py-12 flex flex-col items-center justify-center'> 

              <motion.div
            ref={ref}
              initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.4, 1] }}
            className=''
          >
              {/* for academics programs */}
              <div className='flex items-center gap-2 rounded-4xl bg-white/10 px-1 md:px-4 py-1 md:py-2 border border-white/20'>
                <LuGraduationCap className='text-cyan-400  w-4 h-4 items-center justify-center' />
                <span className={`${robotoFont.className} text-white tracking-normal text-sm font-medium`}>Academic Programs</span>
              </div>
            </motion.div>
            

            {/* headingpart1 */}
            <motion.h1 
            ref={ref}
            initial="hidden"
            animate={isInView?"visible":"hidden"}
            variants={variants}
            transition={{duration:0.9, ease: [0.16,1,0.3,1]}}
            className={` ${robotoFont.className} text-white mb-3 sm:mb-4 leading-[1.1] text-center pt-7 tracking-tight text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl`}
            >
                Choose Your
                <br />
                
                <span className='tracking-tight bg-gradient-to-r from-blue-400 via-cyan-500 to-blue-400 text-transparent bg-clip-text text-3xl sm:text-4xl  md:text-5xl lg:text-6xl xl:text-7xl'>Engineering Path</span>
            </motion.h1>

          
          <motion.p
          ref={ref}
          initial="hidden"
          animate={isInView?"visible":"hidden"}
          variants={variants}
          transition={{duration:0.9,ease:[0.16,1,0.3,1]}}
          className='max-w-2xl mx-auto leading-relaxed px-6 mb-6 md:mb-14  text-white text-sm sm:text-lg   md:text-xl'
          >
        Comprehensive engineering education designed for the future. Three cutting-edge programs to shape your career in technology and healthcare.
          </motion.p>
          
          <ul className='w-full max-w-[950px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-5  '>
              {
                  programs.map((program)=>{
                      return (
                          <motion.li
                          ref={ref}
                          initial="hidden"
                          animate={isInView?"visible":"hidden"}
                          variants={variants}
                          transition={{duration:0.7,ease:[0.16,1,0.3,1]}}
                          key={program.id} className='h-full px-3 py-6 overflow-hidden rounded-2xl backdrop-blur-md bg-white/10   border border-white/10 transition-all duration-500 ease-out hover:backdrop-blur-sm  hover:bg-white/20 group'>
                              <div className=' flex flex-col justify-center items-center '>
                                      <div className='bg-white/20 relative rounded-2xl w-14 h-14  mb-1 md:mb-3 flex items-center justify-center transition-all duration-200 ease-in-out group-hover:scale-110'>
                                        {React.cloneElement (program.icon,{className:' text-blue-800 w-8 text-white h-8  transition-all duration-200 ease-out group-hover:scale-110'})}
                                      </div>
                                    

                                      <span className="text-white text-center text-lg mb-2 transition-all duration-1000 ease-in-out text-lg md:text-xl
                                      group-hover:text-transparent group-hover:bg-clip-text
                                    group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-blue-400">
                                    {program.title}
                                      </span>

                                      <span className='text-white/50 transition-all duration-4400  ease-out group-hover:text-sm'>{program.degree} {program.duration} </span>
                                  </div>
                              
                              
                            

                          </motion.li>
                      );
                  })
              }
          </ul>
        
            </section>
            </section>
       



       {/* academic programs part  */}
       <section className='py-20 lg:py-32 bg-white'>
           <div className='max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center'>
               <div className=' flex justify-center items-center gap-2 px-4 py-2 mb-6  rounded-full  bg-blue-50'>
                  <LuSparkles className='text-blue-500'/>
                  <span className={`${robotoFont.className} text-sm text-blue-600`}>Our Programs</span>
               </div>

               <h2 className={`${graduateFont.className} text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-6 `}>Academic Programs</h2>
               <p className={`${robotoFont.className} text-gray-700/70 text-xl max-w-2xl mx-auto tracking-tight mb-6 md:mb-15`}>Comprehensive engineering education designed for the future</p>
           </div>
        
        <div>
           <ul className='space-y-20 max-w-[1300px] mx-6 lg:mx-12 xl:mx-auto '>
            {
              programs.map((program)=>{
                return(
                  <li key={program.id} className='  grid grid-cols-1 lg:grid-cols-2  border border-black/10  rounded-3xl overflow-hidden shadow-xl transition-all duration-200 ease-in-out hover:shadow-2xl group'>
                        <div className='relative   h-64  lg:h-full  overflow-hidden'> 
                             <Image src={program.image} alt={program.title} fill  className=" object-cover " /> 

                             <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-40`}>

                             </div>

                             <div className='absolute top-6 left-6 bg-white w-14 h-14 flex justify-center items-center rounded-2xl'>
                                    {React.cloneElement (program.icon,{className:'  w-8 text-black h-8  transition-all duration-800 end-auto group-hover:scale-110'})}
                             </div>
                             <button className='absolute bottom-6 left-6 flex gap-2 text-black bg-white rounded-2xl px-5 py-1 text-base'>
                                {program.degree} • {program.duration}
                             </button>
                        </div>

                        <div className='p-6 sm:p-8 lg:p-12'>
                          <div className='flex flex-wrap items-center gap-4 mb-3 md:mb-4'>
                              <h3 className={`${graduateFont.className} text-2xl md:text-3xl text-gray-900    transition-all duration-1000 end-auto 2s group-hover:scale-105`}>{program.title} 
                           </h3>

                          {((program.title.includes("Artificial Intelligence"))||(program.title.includes("Computer Engineering"))&& new Date().getFullYear()===2025) &&(
                            <span className='text-xs  text-white bg-green-600 px-2 py-1 rounded-lg'>
                              NEW
                            </span>
                          )}
                          </div>
                          
                           <p className={`${robotoFont.className} text-gray-600 leading-relaxed mb-6 sm:mb-8 `}>{program.overview} </p>

                           {/* core course  */}
                          <div   className='space-y-4'>
                            <div>
                            <h4 className='text-lg font-semibold mb-3'>Core Courses</h4>
                            <ul className='grid grid-cols-1s md:grid-cols-2 gap-2'>
                              {
                                program.coreCourses.map((course,index)=>{
                                  return (
                                    <li key={index} className=' flex items-center'>
                                     <div className='flex gap-2 justify-center items-center'>
                                      <HiOutlineCheckCircle className='text-blue-600 w-4 h-4 shrink-0'/>
                                      <span className={`${robotoFont.className} text-sm text-gray-600`}>{course} </span> 
                                     </div>
                                    </li>
                                  )})
                              }
                            </ul>
                            </div>
                         {/* elective course  */}
                            <div>
                               <h4 className='text-lg font-semibold text-gray-900 mb-3 '>Elective Courses</h4>
                               <ul className='flex flex-wrap gap-2'>
                                {
                                   program.electives.map((elective,index)=>{
                                    return (
                                      <li key={index} className='flex items-center '>
                                        <span className={`${robotoFont.className} bg-blue-50 rounded-full px-2 py-1 text-blue-600 text-sm `}>{elective}</span>
                                      </li>
                                    )})
                                }
                               </ul>
                            </div>
                              {/* Career outcomes  */}
                             <div>
                               <h4 className='text-lg font-semibold text-gray-900 mb-3'>Career Outcomes</h4>
                               <ul className='flex flex-wrap gap-2'>
                                {
                                  program.careerOutcomes.map((career,index)=>{
                                    return (
                                      <li key={index} className='flex items-center'>
                                        <span className={`${robotoFont.className} text-sm text-purple-500 bg-purple-50 rounded-full px-2 py-1`}>
                                          {career}
                                        </span>

                                      </li>
                                    )})}
                               </ul>
                             </div>
                        {/* facilities  */}
                             <div >
                               <h4 className='text-lg font-semibold text-gray-900 mb-3'>Facilities & Resources</h4>
                                   <ul className=''>
                                    {
                                      program.facilities.map((facility,index)=>{
                                        return (
                                          <li key={index} className='flex '>
                                            <div className='flex items-center gap-2 mb-2'>
                                                  <LuFlaskConical className='text-cyan-500 w-4 h-4 shrink-0' />
                                                  <span className={`${robotoFont.className} text-gray-700 text-sm`}>{facility} </span>
                                            </div>
                                          </li>
                                        )
                                      })
                                    }
                                  </ul>
                             </div>
                           

                           {/* button  */}
                             <section className='flex flex-wrap items-center   gap-3'>
                                  <button className='flex items-center justify-center gap-4 bg-[#0D4E92]  text-white rounded-lg px-3 py-2 hover:bg-blue-900'>
                                    <span className='text-sm font-semibold '>View Full Details</span>
                                      <FiArrowRight/>
                                    </button> 
                                    <button className='flex items-center justify-center  gap-2 md:gap-4 rounded-lg border-2 border-black/10 px-3 py-2 transition-all duration-200 ease-linear 0.9s    hover:bg-gray-100'> 
                                        <TbDownload className=''/>
                                        <span className={`${robotoFont.className} text-sm  font-semibold`}>Download Brochure</span>
                                    </button>

                                    <button className='flex items-center justify-center gap-4 rounded-lg border-2 border-black/10 px-3 py-2   transition-all duration-200 ease-linear 0.9s  hover:bg-gray-100'> 
                                        <MdOutlineFeed  className=''/>
                                        <span className={`${robotoFont.className} text-sm  font-semibold `}>Fee Structure</span>
                                    </button>
                             </section>
                                  
                           



                          </div>

                        </div>
                  </li>

                  
                )
              })
            }
           </ul>
        </div>
         


       </section>
      
      {/* Engineering journey  */}
      <section className='p-8 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-500  '>
            <div className='max-w-7xl mx-auto py-24 flex flex-col items-center justify-center'>
              <h2 className={`${graduateFont.className} text-white text-center text-2xl sm:text-4xl lg:text-6xl mb-4 sm:mb-6 tracking-tight px-2`}>Ready to Start Your Engineering Journey?</h2>
              <p className=' max-w-2xl mx-auto px-4  text-white  text-lg sm:text-xl mb-6 sm:mb-8 lg:mb-10  '> Apply now for admissions 2026. Choose from our three cutting-edge programs and shape your future in technology and healthcare. </p>
              <section className='text-sm md:text-lg font-semibold flex flex-wrap justify-center  items-center gap-3'>
                <button className='bg-white flex justify-center  items-center gap-3  rounded-lg px-2 md:px-4 py-3   '>
                  <span>Apply Now</span>
                  <FiArrowRight className='shrink-0'/>
                </button>
                <button className='px-8 py-3 border-1 border-white rounded-lg text-white'>
                  Contact Admissions
                </button>
              </section>
            </div>
      </section>

      
      
      </>
    )
  }

  export default Page
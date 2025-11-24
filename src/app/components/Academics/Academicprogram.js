import { getAllPrograms } from '@/data/programs';
import { graduateFont, robotoFont } from '@/font';
import { motion,useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { LuFlaskConical, LuSparkles } from 'react-icons/lu'
import { MdOutlineFeed } from 'react-icons/md';
import { TbDownload } from 'react-icons/tb';

const Academicprogram = () => {

       const programs=getAllPrograms();
      const ref=useRef(null);
      const isInView=useInView(ref,{once:true,margin:'-100px 0px -100px 0px'});
      const variants = {
      hidden:{opacity:0,y:20},
      visible:{opacity:1,y:0}
      }
  return (
    <>
       <section ref={ref} className='py-20 lg:py-32 bg-white'>
           <div className='max-w-7xl mx-auto px-6 lg:px-12 flex flex-col   items-center'>
            <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView?"visible":"hidden"}
            variants={variants}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.4, 1] }}
            >

                <div className='flex justify-center'>
               <div className=' inline-flex justify-center items-center gap-2 px-4 py-2 mb-6  rounded-full  bg-blue-50'>
                  <LuSparkles className='text-blue-500'/>
                  <span className={`${robotoFont.className} text-sm text-blue-600`}>Our Programs</span>
               </div>
                </div>

               <h2 className={`${graduateFont.className} text-center text-2xl md:text-3xl lg:text-4xl xl:text-6xl mb-6 `}>Academic Programs</h2>
               <p className={`${robotoFont.className} text-gray-700/70 text-xl max-w-2xl mx-auto text-center tracking-tight mb-6 md:mb-15`}>Comprehensive engineering education designed for the future</p>
                </motion.div>
           </div>
           
        
        <div>
           <ul className='space-y-20 max-w-[1300px] mx-6 lg:mx-12 xl:mx-auto '>
            {
              programs.map((program)=>{
                return(
                  <motion.li
                  ref={ref}
                  initial='hidden'
                  animate={isInView?'visible':'hidden'}
                  variants={variants}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.4, 1]}}

                  key={program.id} className='  grid grid-cols-1 lg:grid-cols-2  border border-black/10  rounded-3xl overflow-hidden shadow-xl transition-all duration-200 ease-in-out hover:shadow-2xl group'>
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
                              <Link href={`/academics/${program.slug}`} >
                                  <button className='flex items-center justify-center gap-4 bg-[#0D4E92]  text-white rounded-lg px-3 py-2 hover:bg-blue-900'>
                                    <span className='text-sm font-semibold '>View Full Details</span>
                                      <FiArrowRight/>
                                    </button> 
                                    </Link>
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
                  </motion.li>

                  
                )
              })
            }
           </ul>
        </div>
         


       </section>
    </>
  )
}

export default Academicprogram
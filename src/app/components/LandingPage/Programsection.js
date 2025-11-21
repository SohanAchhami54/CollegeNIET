"use client"
import React, { useRef } from 'react'
import { graduateFont } from '@/font';
import Image from 'next/image';
import { LuArrowRight } from "react-icons/lu";
import { Sparkles } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { robotoFont } from '@/font';
import { getAllPrograms } from '@/data/programs';
import Link from 'next/link';
const Programsection = () => {
const ref=useRef(null);
const isInView = useInView(ref, { once: true });
const programs=getAllPrograms().slice(0,3);
  return (
    <section ref={ref} className='w-100% mx-0 lg:mx-14 relative z-10 top-24 lg:top-30 mb-30 lg:mb-60 px-6 lg:px-12'>
      {/* first container  */}
      <div className='mb-16 lg:mb-20 '>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          {/* our program  */}
          <div className='inline-flex items-center text-sm  gap-2 px-4 py-2 rounded-full bg-blue-100/60 border-1 border-blue-100 mb-6'>
           {/* <AutoAwesomeIcon className='w-4 h-4'/> */}
              <Sparkles className='w-4 h-5 text-blue-800' />
           <span className={`text-blue-800 text-sm  tracking-tight ${robotoFont.className}`}>Our Programs</span>
          </div>
        
           <h2 className={`${graduateFont.className}  text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight `}>
            Choose Your
            <br />
            <span className='bg-gradient-to-r from-[#0d4e92] to-cyan-500 bg-clip-text text-transparent'>Engineering Path</span>
           </h2>
         
         <p className='text-xl text-gray-600 max-w-2xl'>Three cutting-edge programs designed to shape the fulture of technology and innovation.</p>
         </motion.div>
        </div>

  
{/* second container  */}
<div className=''>
       <ul className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
        {
           programs.map((program)=>{
           // console.log(program)
            const Icon=program.icon;
            return (
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 lg:mb-20"
          key={program.slug}
        >
             <Link href={`/academics/${program.slug}`} >
                 <div className='relative h-full bg-white rounded-4xl overflow-hidden border border-gray-200 hover:border-gray-200 transition-all hover:shadow-2xl cursor-pointer group'>

                   {/* image */}
                   <div className='relative  h-64 overflow-hidden'>

                      <Image  src={program.image} alt={program.title} fill 
                      className='w-full h-full object-cover  transition-all duration-300 ease-in group-hover:scale-110'
                      />

                      <div className={`absolute inset-0  bg-gradient-to-r ${program.gradient} opacity-40 hover:opacity-30 transition-opacity `}></div>

                      {/* FloatingIcon  */}
                      <div className='absolute w-14 h-14 top-6 right-6 bg-white/90 flex justify-center items-center rounded-2xl'>
                        <span className=''>
                         {React.cloneElement (program.icon,{className:'w-7 h-8'})}
                        </span>
                      </div>

                      {/* stats badges  */}
                         <div className='absolute bottom-6 left-6'> 
                           <div className={` ${robotoFont.className} px-4 py-2 bg-white/90 rounded-full text-sm `}>
                             {program.duration} • {program.degree}
                           </div>
                         </div>
                          </div>
                       {/* content part  */}
                        <div className='p-8'>
                          <div className='flex flex-wrap items-center gap-3'>
                              <h3 className={`${graduateFont.className} text-2xl`}>{program.title} </h3>
                              {(program.title.includes("Artificial Intelligence")||program.title.includes("Computer Engineering"))  &&(
                                <span className={`bg-green-600 max-w-11 py-1 px-3 text-xs text-center   rounded-sm font-medium ${robotoFont.className}  text-white`}>NEW </span>
                              )}
                              <p className={`${robotoFont.className} text-gray-600 leading-6 mb-6`}>{program.overview}</p>

                              <button className='flex items-center justify-center gap-2 pr-2 w-fit  text-[#0d4e92] hover:text-blue-700 hover:bg-blue-50 p-0 group/btn h-auto rounded-sm '>
                              <span className={`${robotoFont.className} text-gray-600 font-semibold`}>Explore Program</span>
                               <LuArrowRight className='transition-all duration-150 ease-in group-hover/btn:translate-x-1.5'/>
                              </button>

                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${program.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}></div>
                          </div>
                             
                        </div>
                 </div>
             </Link> 
             </motion.div>
            )
           })
        }
       </ul>
</div>

    </section>
  )
}
export default Programsection
//  <li key={program.id} className='relative rounded-4xl overflow-hidden border border-black/10 hover:shadow-2xl cursor-pointer bg-white group  '>
//                 <div className={`absolute inset-0 bg-gradient-to-tr ${program.hoverGradient } `}></div>
//                 <div className='relative h-64 overflow-hidden'>
               
//                      <Image src={program.backgroundImages} alt={program.alt} fill className='object-cover
//                     transition-all duration-200 ease-in  group-hover:scale-110 ' />
//                          <div className={`absolute inset-0 bg-gradient-to-tr ${program.defaultGradient}`}></div>
//                      <div className='absolute top-6  right-6 bg-white rounded-2xl p-3'> 
//                        {React.cloneElement (program.topbadges,{className:'w-7 h-8'})} 
//                       </div>
//                      <div className={ `${robotoFont.className} absolute bottom-6 left-6 text-sm bg-white rounded-3xl py-2 px-4`}>
//                      <span>{program.sidetext} </span>
//                     </div> 
//                     </div>

//                     <div className='p-8 '>
//                       <h1 className={`${graduateFont.className} text-2xl mb-2`}>{program.heading} </h1>
//                        <button className={` ${robotoFont.className}  bg-green-600 rounded-sm px-2 pb-1 mb-2 text-sm text-blue-50`}>{program.button} </button>
//                        <p className={`${robotoFont.className} text-gray-600 mb-5 ` } >{program.paragraph} </p>
//          <button className='flex items-center justify-center gap-3 text-[#0d4e92] hover:text-blue-700 hover:bg-blue-50 p-0 group/btn h-auto'>
//           <span >{program.explore}</span>
//           <LuArrowRight className='ml-2 group-hover/btn:translate-x-1 transition-transform' />

//          </button>
//                     </div>
//               </li>
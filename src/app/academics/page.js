"use client"
import React, { useRef } from 'react'
import Reusablebuilding from '../components/ReusableComHero/Reusablebuilding'
import { LuGraduationCap } from "react-icons/lu";
import { motion, useInView } from "motion/react";//hook that tell u element is visible or not in screen
import { robotoFont } from '@/font';
import { getAllPrograms } from '@/data/programs';
const page = () => {
    const programs=getAllPrograms();
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,margin:'-100px 0px -100px 0px'});
    const variants = {
    hidden:{opacity:0,y:20},
    visible:{opacity:1,y:0}
  };
     return (
    <>
   <section ref={ref} className='relative h-screen overflow-hidden bg-gradient-to-r  from-blue-950  via-blue-900 to-slate-900 pt-16 lg:pt-26'>
       

       {/* for building image  */}
       <Reusablebuilding/>
        {/* first components hero */}
          <section className=' relative z-10  max-w-[1400px] mx-auto sm:px-6 lg:px-12 py-10 sm:py-12 flex flex-col items-center justify-center'> 

            <motion.div
          ref={ref}
            initial="hidden"
           animate={isInView ? "visible" : "hidden"}
           variants={variants}
           transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
        className='max-w-2xl mx-auto leading-relaxed px-6 mb-4 md:mb-13  text-white text-base sm:text-lg   md:text-xl'
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
                        key={program.id} className='h-full px-3 py-8 overflow-hidden rounded-2xl backdrop-blur-md bg-white/10   border border-white/10 transition-all duration-500 ease-out hover:backdrop-blur-sm  hover:bg-white/20 group'>
                            <div className=' flex flex-col justify-center items-center '>
                                     <div className='bg-white/20 relative rounded-2xl w-14 h-14 mb-3 flex items-center justify-center transition-all duration-200 ease-in-out group-hover:scale-110'>
                                      {React.cloneElement (program.icon,{className:' text-blue-800 w-8 text-white  h-8 transition-all duration-200 ease-out group-hover:scale-110'})}
                                     </div>
                                  

                                    <span className="text-white text-center text-lg mb-2 transition-all duration-300
                                    group-hover:text-transparent group-hover:bg-clip-text
                                   group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-cyan-400 group-hover:to-blue-400">
                                  {program.title}
                                    </span>

                                    <span className='text-white/50 transition-all duration-500  ease-out group-hover:text-sm'>{program.degree} {program.duration} </span>
                                </div>
                             
                            
                          

                        </motion.li>
                    )
                })
            }
        </ul>
      
          </section>
          </section>
   
    
    </>
  )
}

export default page
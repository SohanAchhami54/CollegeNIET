import { getAllPrograms } from '@/data/programs';
import { graduateFont } from '@/font'
import {motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Engjourney = () => {
      
          const ref=useRef(null);
          const isInView=useInView(ref,{once:true,margin:'-100px 0px -100px 0px'});
          const variants = {
          hidden:{opacity:0,y:20},
          visible:{opacity:1,y:0}
          }

  return (
    <>
     <section className='p-8 bg-gradient-to-r from-blue-800 via-blue-800 to-blue-500'>

         <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView?"visible":"hidden"}
            variants={variants}
            transition={{   type: "spring",
          stiffness: 120,
        damping: 20,
        mass: 1 }}
            >
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
            </motion.div>
      </section>
    </>
  )
}

export default Engjourney
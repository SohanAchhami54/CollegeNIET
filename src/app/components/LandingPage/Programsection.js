import React from 'react'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { graduateFont } from '@/font';
import Image from 'next/image';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LuBrain } from "react-icons/lu";
const Programsection = () => {
  return (
    <section className='w-100% mx-14 h-[1000px] relative z-10 top-32 mb-60 px-6 lg:px-12'>
      {/* first container  */}
        <div className='mb-16 lg:mb-12 '>
          {/* our program  */}
          <div className='inline-flex items-center text-sm  gap-2 px-4 py-2 rounded-full bg-blue-50 border-1 border-blue-100 mb-6'>
           <AutoAwesomeIcon className='w-4 h-4'/>
           <span>Our Programs</span>
          </div>
        
           <h2 className={`${graduateFont.className}  text-5xl lg:text-6xl text-gray-900 mb-6 tracking-tight `}>
            Choose Your
            <br />
            <span className='bg-gradient-to-r from-[#0d4e92] to-cyan-500 bg-clip-text text-transparent'>Engineering Path</span>
           </h2>
         
         <p className='text-xl text-gray-600 max-w-2xl'>Three cutting-edge programs designed to shape the fulture of technology and innovation.</p>
        </div>

  
        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
          {/* card */}
         <div className='rounded-4xl overflow-hidden border border-black/10 hover:shadow-3xl  bg-white'>
          {/* Image  */}
            <div className='relative h-48 sm:h-56 md:h-64 overflow-hidden object-cover'>
              <div>
              <Image src='/BiomedicalLab.jpg' alt='BTechAI' width={700}  height={600} className='  ' />
                </div>
              {/* pink background color  */}
             <div className='absolute inset-0 bg-gradient-to-tr from-pink-400/20 to-pink-300/20'></div>
              {/* top badges  */}
              <div className='absolute top-6 right-6 bg-white rounded-2xl px-3 py-3'>
                <LuBrain className='w-8 h-7' />
              </div>
              <div className='absolute bottom-4 left-7 bg-white rounded-3xl py-2 px-3'>
                <span> 4 Years • B. Tech</span>
              </div>
            </div>
            {/* content section  */}
            <div className='p-8'>
              <h2 className={`text-2xl ${graduateFont.className} mb-4 `} >
                B. Tech in artificial Intelligence
                {/* <br />
                <span>Intelligence</span> */}
              </h2>
              <span className='bg-green-600 px-2 rounded-sm text-white 
              '>NEW</span>
              
              <p className='text-lg  tracking-normal mb-5'>The Bachelor of Technology in Artificial Intelligence integrates computer science, mathematics, and data science to develop problem- solving skills and build intelligent systems for real-world applications</p>
               
               <button className='text-lg font-semibold  text-blue-600 flex gap-7 justify-center items-center'>
                <span>Explore Programs</span>
                 <ArrowForwardIcon/>
               </button>
            </div>
           
         </div>
 
</div>
    </section>
  )
}

export default Programsection
 {/* second container  */}
        {/* <div className='grid lg:grid-cols-3 gap-6 lg:gap-8 '>


          <div className='group flex flex-col gap-3 bg-red-300  group rounded-2xl  '>
            <div className='overflow-hidden '>
            <Image src="/BiomedicalLab.jpg" width={600} height={400} alt='B.Tech in AI' className='bg-gradient-to-r from-[#0d4e92] to-cyan-500 bg-transparent group-hover:scale-110  transition-all duration-300 ease-in' />
            </div>
            <div className='flex flex-col  px-9 py-6'>
               <h2 className={`${graduateFont.className}  text-2xl lg:text-3xl text-gray-900 mb-6 tracking-tight `}>
            B. Tech in Artificial 
            <br />
            <span className='bg-gradient-to-r from-[#0d4e92] to-cyan-500 bg-clip-text text-transparent'>Intelligence</span>
           </h2>
               <Button variant="contained">New</Button>
               <br />
               <p className='text-lg mb-6'>The Bachelor of Technologu in Artificial Intelligence integrates computer Science, mathematics, and data Science to develop problem-solving skills and build intelligent systems for real-world applications.</p>

                <div>
                  <span>
                         Explore program
                  </span>
             <ArrowForwardIcon/>
                </div>
            </div>
              
          </div>
        </div> */}
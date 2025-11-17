import React from 'react'
import { graduateFont } from '@/font';
import Image from 'next/image';
import { LuArrowRight } from "react-icons/lu";
import { LuBrain } from "react-icons/lu";
import { LuHeartPulse } from "react-icons/lu";
import { LuCpu } from "react-icons/lu";
import { Sparkles } from 'lucide-react';
import { robotoFont } from '@/font';
const Programsection = () => {


  const programs=[
    {
      id:1,
      backgroundImages:'/ailab.png',
      alt:'B.Tech in AI',
      topbadges:<LuBrain/>,
      sidetext:'4 Years • B. Tech ',
      heading:'B.Tech In Artificial Intelligence',
      button:'New',
      paragraph:'The Bachelor of Technology in Artificial Intelligence integrates computer science, mathematics, and data science to develop problem- solving skills and build intelligent systems for real-world applications',
      explore:'Explore Program',
      exploreicon:<LuArrowRight/>,
      defaultGradient: 'from-blue-600/40 to-blue-400/40',  // Always visible
    hoverGradient: 'group-hover:from-blue-600/20 group-hover:to-blue-400/20',
    },
     {
      id:2,
      backgroundImages:'/BiomedicalLab.jpg',
       alt:'B.Tech in Biomedica',
      topbadges:<LuHeartPulse/>,
      sidetext:'4 Years • BE ',
      heading:'B.Tech In Biomedical Engineering',
      button:'New',
      paragraph:'Our BE in Biomedical Engineering program blends engineering principles with healthcare applications. Students learn to design medical devices, develop diagnostic systems, and work on cutting-edge projects in bioinformatics, tissue engineering, and medical imaging.',
      explore:'Explore Program',
      exploreicon:<LuArrowRight/>,
         defaultGradient: 'from-pink-600/40 to-pink-400/40',
    hoverGradient: 'group-hover:from-pink-600/20 group-hover:to-pink-400/20',
    },
     {
      id:3,
      backgroundImages:'/ailab.png',
       alt:'B.Tech in Computer Engineering',
      topbadges:<LuCpu />,
      sidetext:'4 Years • BE ',
      heading:'B.Tech In Computer Engineering',
      button:'New',
      paragraph:'Our BE in Computer Engineering program covers hardware-software integration, embedded systems, and cybersecurity. Students master computer Architecture, operating systems, VLSL design, and network systems to build the digital infrastruture of tomorrow.',
      explore:'Explore Program',
      exploreicon:<LuArrowRight/>,
      defaultGradient: 'from-green-600/40 to-green-400/40',
      hoverGradient: 'group-hover:from-green-600/20 group-hover:to-green-400/20'
      
    },
  ]
  return (
    <section className='w-100% mx-0 lg:mx-14 relative z-10 top-24 lg:top-30 mb-60 px-6 lg:px-12'>
      {/* first container  */}
      <div className='mb-16 lg:mb-20 '>
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
        </div>

  
{/* second container  */}
<div className=''>
       <ul className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
        {
           programs.map((program)=>{
            return (
              <li key={program.id} className='relative rounded-4xl overflow-hidden border border-black/10 hover:shadow-2xl cursor-pointer bg-white group'>
                <div className={`absolute inset-0 bg-gradient-to-tr ${program.hoverGradient } `}></div>
                <div className='relative h-64 overflow-hidden'>
               
                     <Image src={program.backgroundImages} alt={program.alt} fill className='object-cover
                    transition-all duration-200 ease-in  group-hover:scale-110 ' />
                         <div className={`absolute inset-0 bg-gradient-to-tr ${program.defaultGradient}`}></div>
                     <div className='absolute top-6  right-6 bg-white rounded-2xl px-4 py-4'> 
                       {React.cloneElement (program.topbadges,{className:'w-8 h-8'})} 
                      </div>
                     <div className='absolute bottom-4 left-7 bg-white rounded-3xl py-2 px-3'>
                     <span>{program.sidetext} </span>
                    </div> 
                    </div>

                    <div className='p-8 '>
                      <h1 className={`${graduateFont.className} text-2xl mb-2`}>{program.heading} </h1>
                       <button className={` ${robotoFont.className}  bg-green-600 rounded-sm px-2 mb-3 text-lg text-blue-50`}>{program.button} </button>
                       <p className='mb-6'>{program.paragraph} </p>

                        <div className={`${robotoFont.className}  max-w-40 justify-center
                         hover:text-blue-800 bg-blue-50 rounded-sm group/explore
                         flex  items-center gap-3 text-black`}>
                          <span>{program.explore}</span>
                          <span className=' transition-all duration-100 ease-in group-hover/explore:translate-x-1 '>{program.exploreicon}</span>
                        </div>
                    </div>
              </li>
            )
           })
        }
       </ul>
</div>

    </section>
  )
}
export default Programsection
{/* 

        <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
    
         <div className='rounded-4xl overflow-hidden border border-black/10 hover:shadow-3xl  bg-white'>
          
            <div className='relative h-64 overflow-hidden object-cover'>
             

             
              <Image src='/BiomedicalLab.jpg' alt='BTechAI' fill className='object-cover  ' />
                 
           
             <div className='absolute inset-0 bg-gradient-to-tr from-pink-400/20 to-pink-300/20'></div>
            
              <div className='absolute top-6 right-6 bg-white rounded-2xl px-3 py-3'>
                <LuBrain className='w-8 h-7' />
              </div>
              <div className='absolute bottom-4 left-7 bg-white rounded-3xl py-2 px-3'>
                <span> 4 Years • B. Tech</span>
              </div>
            </div>
          
            <div className='p-8'>
              <h2 className={`text-2xl ${graduateFont.className} mb-4 `} >
                B. Tech in artificial Intelligence
              
              </h2>
              <span className='bg-green-600 px-2 rounded-sm text-white 
              '>NEW</span>
              
              <p className='text-lg  tracking-normal mb-5'>The Bachelor of Technology in Artificial Intelligence integrates computer science, mathematics, and data science to develop problem- solving skills and build intelligent systems for real-world applications</p>
               
               <button className='text-lg font-semibold  text-blue-600 flex gap-7 justify-center items-center'>
                <span>Explore Programs</span>
                 <LuArrowRight />
               </button>
            </div>
           
         </div>
</div> */}
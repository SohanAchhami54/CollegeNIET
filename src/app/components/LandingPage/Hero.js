import React from 'react'
import Image from 'next/image'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import DownloadIcon from '@mui/icons-material/Download';
import EastIcon from '@mui/icons-material/East';
import Reusablecomhero from '../ReusableComHero/Reusablecomhero';
import Reusablebuilding from '../ReusableComHero/Reusablebuilding';
const Hero = () => {
  const graduates =[
    {
      id:1,
      number:"500+",
      label:"GRADUATES"
    },
    {
      id:2,
      number:"40%+",
      label:"ABROAD STUDIES"
    },
    {
      id:3,
      number:"15",
      label:"BATCHES"
    },
    {
      id:4,
      number:"UGC-QAA",
      label:"CERTIFIEDs"
    },
  ]

const reusecom={
  badgeText:"Admissions Open for 2026",
  headingpart1:"Engineering Tomorrow's",
  headingpart2:'Innovators',
  paragraph:"Nepal's first UGC-QAA certified engineering college. Master AI, Biomedical & Computer Engineering with industry-aligned curriculum, expert faculty, and proven track record of global placements.",
    badgeIcon : <AutoAwesomeIcon className="text-blue-400" />
}
  return (
    <>
      {/* <h1>This is Hero section</h1> */}
      <section className='relative min-h-screen  overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to slate-900'>
        {/* Building Image */}
        <Reusablebuilding/>
    
      <div className='relative z-10 ml-10 flex  justify-center items-center px-6 lg:px-12 py-32 lg:py-40 '>
        <div className=''>
          <Reusablecomhero
          badgeText={reusecom.badgeText} 
          headingpart1={reusecom.headingpart1}
          headingpart2={reusecom.headingpart2}
          paragraph={reusecom.paragraph}
          badgeIcon={reusecom.badgeIcon}
          />
        {/* button  */}
        <div className='flex flex-col sm:flex-row items-start jus gap-4 mb-16 '>
          
        <button className=' rounded-full bg-white text-[#0b4c78] hover:bg-blue-50 shadow-2xl hover:shadow-white/20 text-lg px-8 h-14 group'>
         <span className=''>Apply for 2026</span> 
         <EastIcon className='ml-2 h-5 w-5 group-translate-x-1 transition-transform' />
          </button>
               
        <button className='rounded-full bg-white/15 text-white border-2 border-white hover:bg-white/30 shadow-2xl hover:shadow-white/20 text-lg px-8 h-14'>Campus Tour</button>
        <button className='rounded-full flex items-center bg-white/15 text-white border-2 border-white hover:bg-white/30 shadow-2xl hover:shadow-white/20 text-lg px-8 h-14'>
        <DownloadIcon/>
        <span>Brochure</span>
        </button>
        </div>

        {/* 500 students*/}
          <ul className='flex flex-wrap gap-8 lg:gap-12'>
            {
             graduates.map((gr)=>{
              return(
                <li key={gr.id}> 
                      <div className='text-4xl text-white lg:text-5xl mb-l'>{gr.number} </div>
                      <div className='text-sm text-blue-200 '>{gr.label} </div>
                      
                </li>
              )
             })
            }
          </ul>
      </div>

        </div>
        
      </section>
    </>
    // </div>
  )
}

export default Hero

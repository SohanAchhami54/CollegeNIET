import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
      {/* <h1>This is Hero section</h1> */}
      <div className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to slate-900'>
        <div className='absolute inset-0 z-0'>
          <Image src="/building.jpg" alt="NIET Campus" className='w-full h-full object-cover opacity-20' 
          width={1000} height={900}></Image>
        </div>
      


      </div>
      
    </div>
  )
}

export default Hero

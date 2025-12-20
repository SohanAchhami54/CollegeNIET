import Image from 'next/image'
import React from 'react'

const Reusablebuilding = ({ path }) => {
  return (
    <div>
      <div className='absolute inset-0 z-1'>
        {/* {console.log('path', path)} */}
        {path && (
         <Image src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${path}`} alt="NIET Campus" className='w-full h-full object-cover opacity-20 '
          width={1000} height={900}></Image>
        )}
       
      </div>
    </div>
  )
}

export default Reusablebuilding
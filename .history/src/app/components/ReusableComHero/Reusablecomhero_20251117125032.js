import React from 'react'
const Reusablecomhero = ({badgeText,headingpart1,headingpart2,paragraph,badgeIcon,badgeIcon2,badgeIcon3,badgeIcon4,badgeText2,badgeText3,badgeText4}) => {

  return (
    <>
    
     <div className='inline-flex flex-auto  bg-white/5  gap-1 whitespace-nowrap  justify-center items-center rounded-4xl  shadow-lg backdrop-blur-md p-2 border border-white/20'>
             {badgeIcon}
                <span className='text-white text-sm '>{badgeText} </span>
                {/* {badgeIcon2}
                <span className='text-white text-sm '>{badgeText2} </span>
                {badgeIcon3}
                <span className='text-white text-sm '>{badgeText3} </span>
                {badgeIcon4}
                <span className='text-white text-sm '>{badgeText4} </span> */}
          </div>
          <div className='flex flex-auto  bg-white/5  gap-1   justify-center items-center rounded-4xl  shadow-lg backdrop-blur-md p-2 border border-white/20'>
                  {badgeIcon2}
                  <span className='text-white text-sm '>{badgeText2} </span>
          </div>
          <div className='flex flex-auto  bg-white/5  gap-1   justify-center items-center rounded-4xl  shadow-lg backdrop-blur-md p-2 border border-white/20'>
                  {badgeIcon3}
                  <span className='text-white text-sm '>{badgeText3} </span>
          </div>
          <div className='flex flex-auto  bg-white/5  gap-1   justify-center items-center rounded-4xl  shadow-lg backdrop-blur-md p-2 border border-white/20'>
                  {badgeIcon4}
                  <span className='text-white text-sm '>{badgeText4} </span>
          </div>
          {/* engineering  */}
          <div className='flex flex-col mt-9'>
               <span className='text-5xl md:text-7xl lg:text-8xl  tracking-tight transform:none text-white mb-6'>{headingpart1} </span>
               <span className='bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl'>{headingpart2} </span>
          </div>
          <br />
          {/* paragraph  */} 
          <div className='text-xl md:text-2xl text-blue-100/90 max-w-2xl mb-10'>
            <p>{paragraph} </p>
          </div>

  
    </>
  )
}

export default Reusablecomhero
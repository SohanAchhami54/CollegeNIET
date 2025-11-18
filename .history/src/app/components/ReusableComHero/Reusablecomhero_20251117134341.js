import React from 'react'
const Reusablecomhero = ({badgeText,headingpart1,headingpart2,paragraph,badgeIcon,badgeIcon2,badgeIcon3,badgeIcon4,badgeText2,badgeText3,badgeText4}) => {

  return (
    <>

     {/* Badge 1 */}
      {(badgeIcon || badgeText) && (
        <div className="inline-flex flex-auto bg-white/5 gap-1 whitespace-nowrap justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20">
          {badgeIcon}
          <span className="text-white text-sm">{badgeText}</span>
        </div>
      )}

      {/* Badge 2 */}
      {(badgeIcon2 || badgeText2) && (
        <div className="group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer hover:text-blue-300">
          {badgeIcon2}
          <span className="text-white text-sm group-hover:text-blue-300">
            {badgeText2}
          </span>
        </div>
      )}

      {/* Badge 3 */}
      {(badgeIcon3 || badgeText3) && (
        <div className="group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer hover:text-blue-300">
          {badgeIcon3}
          <span className="text-white text-sm group-hover:text-blue-300">
            {badgeText3}
          </span>
        </div>
      )}

      {/* Badge 4 */}
      {(badgeIcon4 || badgeText4) && (
        <div className="group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer hover:text-blue-300">
            {badgeIcon4}
            <span className="text-white text-sm group-hover:text-blue-300">
              {badgeText4}
            </span>
        </div>
      )}

      {/* Heading */}
      <div className="flex flex-col mt-9">
        <span className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6">
          {headingpart1}
        </span>
        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl">
          {headingpart2}
        </span>
      </div>

      {/* Paragraph */}
      <div className="text-xl md:text-2xl text-blue-100/90 max-w-2xl mb-10 mt-6">
        <p>{paragraph}</p>
      </div>

  
    </>
  )
}

export default Reusablecomhero





//  <div className='inline-flex flex-auto  bg-white/5  gap-1 whitespace-nowrap  justify-center items-center rounded-4xl  shadow-lg backdrop-blur-md p-2 border border-white/20'>
//              {badgeIcon}
//                 <span className='text-white text-sm '>{badgeText} </span>
               
//           </div>
//           <div className="group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-300">
//                   {badgeIcon2}
//                   <span className='text-white text-sm group-hover:text-blue-300 transition-colors duration-300 '>{badgeText2} </span>
//           </div>
//           <div className='group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-300'>
//                   {badgeIcon3}
//                   <span className='text-white text-sm group-hover:text-blue-300 transition-colors duration-300 '>{badgeText3} </span>
//           </div>
//           <div className='group flex w-fit bg-white/5 gap-1 justify-center items-center rounded-4xl shadow-lg backdrop-blur-md p-2 border border-white/20 mb-4 cursor-pointer transition-colors duration-300 ease-in-out hover:text-blue-300'>
//                   {badgeIcon4}
//                   <span className='text-white text-sm group-hover:text-blue-300 transition-colors duration-300 '>{badgeText4} </span>
//           </div>
//           {/* engineering  */}
//           <div className='flex flex-col mt-9'>
//                <span className='text-5xl md:text-7xl lg:text-8xl  tracking-tight transform:none text-white mb-6'>{headingpart1} </span>
//                <span className='bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-5xl md:text-7xl lg:text-8xl'>{headingpart2} </span>
//           </div>
//           <br />
//           {/* paragraph  */} 
//           <div className='text-xl md:text-2xl text-blue-100/90 max-w-2xl mb-10'>
//             <p>{paragraph} </p>
//           </div>

  
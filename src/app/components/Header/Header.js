import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import "@fontsource/arimo/400.css";
import "@fontsource/arimo/700.css";


const Header = () => {
  return (
    <>
      <header className='flex justify-between'>
        <nav>
             <div className='flex'>
                <Link href="/" className='flex  justify-center items-center'> 
                <div>
                  <Image src="/logo.png" width={44} height={44}></Image>
                </div>
                
                <div>
                    <span className=''>NIET</span>
                </div>
                 </Link>
             </div>
        </nav>
      </header>
    </>
  )
}

export default Header

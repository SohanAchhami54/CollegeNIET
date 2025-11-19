"use client"
import React from 'react'
import { useParams } from 'next/navigation';
const page = () => {
    const params=useParams();
  return (
     <>
       <div>page</div> 
       <p>
        name:{params.slug}
       </p>
     </>
   
  )
}

export default page
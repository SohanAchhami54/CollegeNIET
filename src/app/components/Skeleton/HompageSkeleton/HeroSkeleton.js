'use client'
import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Grid from '@mui/material/Grid'

const HeroSkeleton = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900'>
      
      {/* ❌ REMOVED background overlay skeleton */}

      <div className='relative z-10 ml-10 flex justify-center items-center px-6 lg:px-12 py-32 lg:py-40'>
        <div className='w-full max-w-4xl'>

          {/* Badge */}
          <Skeleton
            variant="rounded"
            width={260}
            height={44}
            sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 8 }}
          />

          {/* Heading (BIGGER) */}
          <Skeleton
            variant="text"
            width="90%"
            height={72}
            sx={{ bgcolor: 'rgba(255,255,255,0.45)' }}
          />
          <Skeleton
            variant="text"
            width="70%"
            height={72}
            sx={{ bgcolor: 'rgba(255,255,255,0.45)', mb: 6 }}
          />

          {/* Paragraph (BIGGER) */}
          <Skeleton
            variant="text"
            width="60%"
            height={32}
            sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
          />
          <Skeleton
            variant="text"
            width="55%"
            height={32}
            sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 12 }}
          />

          {/* Buttons (BIGGER) */}
          <div className='flex flex-col sm:flex-row items-start gap-5 mb-20'>
            <Skeleton
              variant="rounded"
              width={200}
              height={60}
              sx={{ bgcolor: 'rgba(255,255,255,0.45)' }}
            />
            <Skeleton
              variant="rounded"
              width={150}
              height={60}
              sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
            />
            <Skeleton
              variant="rounded"
              width={140}
              height={60}
              sx={{ bgcolor: 'rgba(255,255,255,0.3)' }}
            />
          </div>

          {/* Stats (BIGGER & CLEAN) */}
      
        </div>
      </div>
    </section>
  )
}

export default HeroSkeleton

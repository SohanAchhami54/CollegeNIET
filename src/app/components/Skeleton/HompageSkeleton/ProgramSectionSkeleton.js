'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

const ProgramCardSkeleton = () => (
  <Box className="w-full h-full bg-white rounded-4xl overflow-hidden border border-gray-200">
    
    {/* Image + gradient + floating icon + badges */}
    <Box sx={{ position: 'relative', width: '100%', height: { xs: 200, sm: 250, md: 256 } }}>
      <Skeleton variant="rectangular" width="100%" height="100%" />
      
      {/* Floating icon */}
      <Skeleton 
        variant="rectangular"
        width={56} 
        height={56} 
        sx={{ position: 'absolute', top: 16, right: 16, borderRadius: 4 }}
      />

      {/* Stats badge */}
      <Skeleton 
        variant="rounded"
        width={100}
        height={32}
        sx={{ position: 'absolute', bottom: 16, left: 16, borderRadius: 999 }}
      />
    </Box>

    {/* Content */}
    <Box sx={{ p: 6 }}>
      <Skeleton variant="text" width="60%" height={32} sx={{ mb: 2 }} /> {/* title */}
      <Skeleton variant="rounded" width={40} height={24} sx={{ mb: 4 }} /> {/* NEW tag placeholder */}
      <Skeleton variant="text" width="100%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="90%" height={20} sx={{ mb: 1 }} />
      <Skeleton variant="text" width="80%" height={20} sx={{ mb: 3 }} />
      <Skeleton variant="rectangular" width={150} height={36} /> {/* Explore Program button */}
    </Box>
  </Box>
)

export default function ProgramsSkeleton() {
  return (
    <section className="py-16 px-4 lg:px-12 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Badge Skeleton */}
        <Skeleton variant="rounded" width={140} height={36} sx={{ mb: 4 }} />

        {/* Heading Skeleton */}
        <Skeleton variant="text" width="45%" height={60} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="35%" height={60} sx={{ mb: 4 }} />

        {/* Description Skeleton */}
        <Skeleton variant="text" width="60%" height={28} sx={{ mb: 1 }} />
        <Skeleton variant="text" width="40%" height={28} sx={{ mb: 8 }} />

        {/* Program cards */}
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {[1, 2, 3].map((item) => (
            <ProgramCardSkeleton key={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"
import api from '@/Api/axios';
import { graduateFont, robotoFont } from '@/font';
import { useQueries, useQuery } from '@tanstack/react-query';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, } from 'react'
import { FiBookOpen } from "react-icons/fi";
import { IoPeopleOutline } from "react-icons/io5";
import { LuFlaskConical } from "react-icons/lu";
import { PiSuitcase } from "react-icons/pi";
{/* <LuFlaskConical /> */ }
const Graduate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const graduates = [
    {
      id: 1,
      icon: <FiBookOpen />,
      title: "Industry-Aligned Curriculum",
      description: "Programs designed for real-world impact. Our graduates work at Cambridge, Mayo Clinic, Nanyang Tech, and top hospitals across Nepal.",
      image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjkwNDkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      alt: 'industry'
    },
    {
      id: 2,
      icon: <IoPeopleOutline />,
      title: "Expert Faculty",
      description: "Learn from professors with international degrees (USA, UK, Belgium) and decades of real-world expertise. Faculty members serve as guest editors for SAGE journals.",
      image: "https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYyOTEzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: 'expert faculty'
    },
    {
      id: 3,
      icon: < LuFlaskConical />,
      title: "Research Excellence",
      description: "Published in Wiley, Elsevier, SAGE journals. Hosted international conferences. Students win awards at global symposiums. Research that matters.",
      image: "https://images.unsplash.com/photo-1606206848010-83949917a080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI4NTIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: 'research_excellence'
    },
    {
      id: 4,
      icon: < PiSuitcase />,
      title: "Global Opportunities",
      description: "40%+ graduates pursue Master's & PhD abroad. Scholarships: Erasmus Mundus, Singo Awards, Marie Curie. 50+ PhD graduates. Zero unemployment rate.",
      image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGludGVybnNoaXB8ZW58MXx8fHwxNzYyOTEzNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: 'global_opportunities'
    },
  ];


  const results = useQueries({
    queries: [
      {
        queryKey: ['graduate'],
        queryFn: () => api.get('website/why-graduate-trust-niet/').then(res => res.data)
      },
      {
        queryKey: ['graduatecontent'],
        queryFn: () => api.get('website/why-graduate-trust-niet/content/').then(res => res.data)
      }
    ]
  })

  const [graduate, graduatecontent] = results

  if (graduate.isLoading || graduatecontent.isLoading) {
    return <p>Loading...</p>;
  }

  if (graduate.isError || graduatecontent.isError) {
    return <p>Error: {graduate.error?.message || graduatecontent.error?.message}</p>;
  }

  console.log('graduate:', graduate.data)
  console.log('graduatecontent:', graduatecontent.data)

  const words = graduate.data?.heading_line.split(" ") || []; // split into array of words

  return (
    <>
      <section ref={ref} className='bg-gradient-to-b from-gray-50 to-white  lg:py-32 relative over-flow   mb-30 lg:mb-55'>
        <section className='w-100% mx-0 lg:mx-14 relative z-10 px-6  lg:px-12 '>
          {/* header part  */}
          <motion.div
            initial={{ opacity: 1, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <h2 className={`${graduateFont.className} text-4xl lg:text-6xl text-black tracking-tight mb-5`}>
              {words[0]}
              <span className='bg-gradient-to-r from-blue-800 to-cyan-500 text-transparent bg-clip-text '> {words[1]} {words[2]} {words[3]} </span>
              <br />
              {words[4]} {words[5]}


            </h2>
            <p className='max-w-3xl mx-auto text-xl  text-gray-600'>{graduate.data.support_text} </p>
          </motion.div>

          {/* image section  */}
          <div className='pb-12'>
            <ul className='  grid md:grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-7'>
              {
                graduatecontent.data?.map((g) => {
                  return (

                    <motion.li key={g.id}
                      initial={{ opacity: 1, y: 40, scale: 0.95 }}
                      animate={
                        isInView
                          ? {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                              duration: 0.6,
                              ease: "easeOut",

                            },
                          }
                          : {}
                      }
                      className=' relative h-full overflow-hidden rounded-4xl border border-black/15 transition-all duration-100 ease-in hover:shadow-2xl group' >
                      <div className='relative h-55 overflow-hidden '>

                        <Image src={`https://biomedical.edu.np${g.photo}`} alt={g.heading} width={100}
                          height={100}

                          className='w-full h-full object-cover transition-all duration-400 ease-in group-hover:scale-110' />

                        <div className='absolute top-6 right-6 w-14 h-14 flex justify-center items-center rounded-2xl bg-white  transition-all duration-75 ease-out group-hover:scale-110'>

                          <Image
                            src={`https://biomedical.edu.np${g.icon}`}
                            alt={g.heading}
                            width={28}
                            height={28}

                          />
                        </div>
                      </div>

                      <div className='p-8 '>
                        <div className='flex flex-wrap'>
                          <h2 className={`${graduateFont.className} text-2xl mb-3`}>{g.heading} </h2>
                          <p className={`${robotoFont.className} text-lg`}>{g.support_text} </p>
                        </div>

                      </div>

                    </motion.li>

                  )

                })
              }
            </ul>
          </div>
        </section>
      </section>

    </>
  )
}

export default Graduate
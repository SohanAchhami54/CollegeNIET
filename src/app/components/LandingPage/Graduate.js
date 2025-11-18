"use client"
import { graduateFont } from '@/font';
import { motion,useInView } from 'framer-motion';
import React, { useRef } from 'react'

const Graduate = () => {
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true,margin:'-100px'});
    const pillars = [
    {
      icon: BookOpen,
      title: "Industry-Aligned Curriculum",
      description: "Programs designed for real-world impact. Our graduates work at Cambridge, Mayo Clinic, Nanyang Tech, and top hospitals across Nepal.",
      image: "https://images.unsplash.com/photo-1758270704534-fd9715bffc0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjbGFzc3Jvb20lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjkwNDkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Learn from professors with international degrees (USA, UK, Belgium) and decades of real-world expertise. Faculty members serve as guest editors for SAGE journals.",
      image: "https://images.unsplash.com/photo-1736066330610-c102cab4e942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwcHJvZmVzc29yJTIwdGVhY2hpbmd8ZW58MXx8fHwxNzYyOTEzNDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: FlaskConical,
      title: "Research Excellence",
      description: "Published in Wiley, Elsevier, SAGE journals. Hosted international conferences. Students win awards at global symposiums. Research that matters.",
      image: "https://images.unsplash.com/photo-1606206848010-83949917a080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjI4NTIxODB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: Briefcase,
      title: "Global Opportunities",
      description: "40%+ graduates pursue Master's & PhD abroad. Scholarships: Erasmus Mundus, Singo Awards, Marie Curie. 50+ PhD graduates. Zero unemployment rate.",
      image: "https://images.unsplash.com/photo-1696861273647-92dfe8bb697c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMGludGVybnNoaXB8ZW58MXx8fHwxNzYyOTEzNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];
  return (
    <>
    <section ref={ref} className=' bg-red-300 py-20 lg:py-32 relative over-flow '>
     <section className='w-100% mx-auto bg-blue-100'>
          {/* header part  */}
          <motion.div
           initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
          >
           <h2 className={`${graduateFont.className} text-4xl lg:text-6xl text-black tracking-tight`}>
            Why 
            <span className='bg-gradient-to-r from-blue-800 to-cyan-500 text-transparent bg-clip-text'> 500 + Graduates</span>
            <br />
            Trust niet
           </h2>
             <p className='max-w-3xl mx-auto text-xl  text-gray-600'>Nepal's Best Private College Award winner. First UGC-QAA certified engineering college in kathmandu valley. Proven track record of global success.</p>
          </motion.div>

          {/* image section  */}
          <div className='grid place-items-center grid-cols-1 lg:grid-cols-2'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
     </section>
    </section>
   
    </>
  )
}

export default Graduate
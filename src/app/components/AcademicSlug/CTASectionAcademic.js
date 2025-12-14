import React from 'react'
import { graduateFont } from "@/font";
import { motion } from "framer-motion";
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
export const CTASectionAcademic = ({ctaSectionRef}) => {
  return (
    <> 
     <section
        ref={ctaSectionRef}
        className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] bg-cyan-500/15 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-[250px] sm:w-[375px] lg:w-[500px] h-[250px] sm:h-[375px] lg:h-[500px] bg-purple-500/15 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className={` ${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-6xl text-white mb-4 sm:mb-6 tracking-tight`}
            >
              Ready to Start Your Journey?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 mb-6 sm:mb-8 lg:mb-10 max-w-2xl mx-auto px-4">
              Apply now for admissions 2026. Join us and shape your future in
              technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="https://entrance.puexam.edu.np/studentlogin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-white text-[#0d4e92] hover:bg-blue-50 text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto"
                >
                  Apply Now
                  <FiArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="tel:+9779705320350">
                <Button className="border-2   border-white bg-white/5 text-white hover:bg-white/20 text-base sm:text-lg px-6 sm:px-8 h-11 sm:h-12 w-full sm:w-auto">
                  Contact Admissions
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    
    </>
  )
}

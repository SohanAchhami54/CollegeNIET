import React from 'react'
import { graduateFont } from "@/font";
import { motion } from "framer-motion";
import Link from 'next/link';
import { LuSparkles } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
export const RelatedCourse = ({relatedPrograms,relatedProgramsRef}) => {
  return (
    <>
       {relatedPrograms.length > 0 && (
        <section
          ref={relatedProgramsRef}
          className="py-8 sm:py-10 lg:py-12 xl:py-16 bg-gradient-to-b from-white to-gray-50"
        >
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-6 sm:mb-8"
            >
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 border border-blue-100 mb-3 sm:mb-4">
                <LuSparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-[#0d4e92]" />
                <span className="text-[#0d4e92] text-xs sm:text-sm">
                  Related Programs
                </span>
              </div>
              <h2
                className={`${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3`}
              >
                Explore Other Programs
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {relatedPrograms.map((relatedProgram, index) => {
                const RelatedIcon = relatedProgram.icon;
                return (
                  <motion.div
                    key={relatedProgram.slug}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/academics/${relatedProgram.slug}`}>
                      <div className="relative h-full bg-white rounded-[2rem] overflow-hidden border border-gray-200 hover:border-gray-300 transition-all hover:shadow-2xl group/card">
                        <div className="relative h-64 overflow-hidden">
                          <Image
                            src={relatedProgram.image}
                            alt={relatedProgram.title}
                            fill
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${relatedProgram.gradient} opacity-40 group-hover:opacity-30 transition-opacity`}
                          ></div>

                          {/* Floating Icon */}
                          <div className="absolute top-6 right-6">
                            <div className="w-14 text-3xl h-14 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                              {relatedProgram.icon}
                            </div>
                          </div>

                          {/* Stats Badge */}
                          <div className="absolute bottom-6 left-6">
                            <div className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-sm text-gray-900">
                              {relatedProgram.duration} •{" "}
                              {relatedProgram.degree}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-6 lg:p-8">
                          <h3
                            className={`${graduateFont.className} text-xl sm:text-2xl text-gray-900 mb-2 sm:mb-3`}
                          >
                            {relatedProgram.title}
                          </h3>
                          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed line-clamp-2">
                            {relatedProgram.overview}
                          </p>

                          <Button
                            variant="ghost"
                            className="text-[#0d4e92] hover:text-blue-700 hover:bg-blue-50 p-0 group/btn h-auto"
                          >
                            <span className="text-sm sm:text-base">
                              Explore Program
                            </span>
                            <FiArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </div>

                        {/* Gradient Border Effect */}
                        <div
                          className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${relatedProgram.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`}
                        ></div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

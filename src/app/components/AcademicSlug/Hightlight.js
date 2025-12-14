import React from 'react'
import { motion } from 'framer-motion';
import { LuAward, LuBriefcase, LuCircleCheck } from 'react-icons/lu'
import { graduateFont } from '@/font';
import { FiZap } from 'react-icons/fi';
export const HightlightCareer = ({ degreeSectionRef, program, isDegreeInView }) => {
    return (
        <>
            <motion.section
                ref={degreeSectionRef}
                id="degree-highlights"
                className="scroll-mt-28"
                initial={{ opacity: 0, y: 50 }}
                animate={isDegreeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <div className="relative">
                    {/* Section Header */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 mb-4 sm:mb-6">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                <LuAward className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-purple-700 uppercase tracking-wider">Career Prospects</span>
                        </div>
                        <h2 className={` ${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4`}>Your Future Awaits</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">Unlock your potential with skills and opportunities that shape tomorrow</p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {/* Key Skills Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={isDegreeInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8"
                        >
                            <div className="flex items-center gap-3 lg:gap-4 mb-6">
                                <div className="p-2 rounded-lg bg-blue-100">
                                    <FiZap className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                                </div>
                                <h3 className={` text-xl lg:text-2xl font-bold text-gray-900 ${graduateFont.className} `} >Key Skills You&apos;ll Gain</h3>
                            </div>
                            <ul className="space-y-3 lg:space-y-4">
                                {program.degreeHighlights.map((highlight, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isDegreeInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3 lg:gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <LuCircleCheck className="h-5 w-5 text-blue-600" />
                                        </div>
                                        <span className="text-gray-700 text-base">{highlight}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Career Paths Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={isDegreeInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            className="relative bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8"
                        >
                            <div className="flex items-center gap-3 lg:gap-4 mb-6">
                                <div className="p-2 rounded-lg bg-cyan-100">
                                    <LuBriefcase className="h-5 w-5 lg:h-6 lg:w-6 text-cyan-600" />
                                </div>
                                <h3 className={`${graduateFont.className} text-xl lg:text-2xl font-bold text-gray-900 `}>Potential Career Paths</h3>
                            </div>
                            <ul className="space-y-3 lg:space-y-4">
                                {program.careerOutcomes.map((career, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isDegreeInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3 lg:gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <LuCircleCheck className="h-5 w-5 text-cyan-600" />
                                        </div>
                                        <span className="text-gray-700 text-base">{career}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

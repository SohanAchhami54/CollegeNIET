"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { LuBookOpen, LuLightbulb, LuCircleCheck } from "react-icons/lu";
import { GoStar } from "react-icons/go";
import { graduateFont } from '@/font';

const OverviewSection = ({ program, isInView, sectionRef }) => {
    return (
        <motion.section
            ref={sectionRef}
            id="overview"
            className="scroll-mt-28"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
        >
            <div className="relative">
                {/* Section Header */}
                <div className="mb-6 sm:mb-8 lg:mb-10">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100 mb-4 sm:mb-6">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                            <LuBookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                        </div>
                        <span className="text-xs sm:text-sm font-semibold text-blue-700 uppercase tracking-wider">Program Overview</span>
                    </div>
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${graduateFont.className} text-gray-900 tracking-tight mb-3 sm:mb-4`}>
                        Discover Your Path
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
                        {program.overview}
                    </p>
                </div>

                {/* What You Will Learn Card */}
                <div className="relative mt-6 sm:mt-8 bg-gradient-to-br from-white to-blue-50/30 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>

                    <div className="relative">
                        <div className="flex items-center gap-3 lg:gap-4 mb-6">
                            <div className="p-2 rounded-lg bg-blue-100">
                                <LuLightbulb className="h-5 w-5 lg:h-6 lg:w-6 text-blue-600" />
                            </div>
                            <h3 className={`${graduateFont.className} text-xl lg:text-2xl font-bold text-gray-900`}>What You Will Learn</h3>
                        </div>
                        <ul className="space-y-3 lg:space-y-4">
                            {program.youWill.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-3 lg:gap-4"
                                >
                                    <div className="flex-shrink-0">
                                        <LuCircleCheck className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <span className="text-gray-700 text-base">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Why Program Section */}
                {program.whyProgram && program.whyProgram.length > 0 && (
                    <div className="relative mt-6 sm:mt-8 bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-4 sm:p-6 lg:p-8 overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-full blur-3xl"></div>

                        <div className="relative">
                            <div className="flex items-center gap-3 lg:gap-4 mb-6">
                                <div className="p-2 rounded-lg bg-green-100">
                                    <GoStar className="h-5 w-5 lg:h-6 lg:w-6 text-green-600" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Why {program.title}?</h3>
                            </div>
                            <ul className="space-y-3 lg:space-y-4">
                                {program.whyProgram.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3 lg:gap-4"
                                    >
                                        <div className="flex-shrink-0">
                                            <GoStar className="h-5 w-5 text-green-600" />
                                        </div>
                                        <span className="text-gray-700 text-base">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default OverviewSection;
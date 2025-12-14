import { Button } from '@/components/ui/button';
import React from 'react'
import { FaRegCircleUser } from 'react-icons/fa6'
import { FiArrowRight } from 'react-icons/fi'
import { graduateFont } from '@/font';
import { motion } from 'framer-motion';
import Link from 'next/link';
const Faculty = ({ program, facultySectionRef, isFacultyInView }) => {
    return (
        <>
            {program.id === "btech-ai" || program.id === "be-bme" || program.id === "be-computer" ? (
                <motion.section
                    ref={facultySectionRef}
                    id="faculty"
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isFacultyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative">
                        {/* Section Header */}
                        <div className="mb-6 sm:mb-8 lg:mb-10">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 mb-4 sm:mb-6">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                                    <FaRegCircleUser className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wider">Expert Faculty</span>
                            </div>
                            <h2 className={`${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4`}>
                                Learn from Industry Experts
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                                Our distinguished faculty bring years of research and industry experience to the classroom
                            </p>
                        </div>

                        {/* Faculty Content - Program Specific */}
                        <div className="mt-8">
                            {program.id === "btech-ai" && (
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                    <p className="text-gray-700 text-base mb-6 leading-relaxed">
                                        Our AI program is led by faculty with expertise in cutting-edge research areas including computer vision, generative AI, natural language processing, and machine learning. These experts bring both academic rigor and industry insights to help you master the latest AI technologies.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">Computer Vision</span>
                                        <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Generative AI</span>
                                        <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">NLP & LLMs</span>
                                        <span className="px-3 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Deep Learning</span>
                                        <span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Reinforcement Learning</span>
                                    </div>
                                    <Link href="/faculty-and-staff?program=B. Tech in AI">
                                        <Button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white">
                                            View All Faculty
                                            <FiArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            )}
                            {program.id === "be-bme" && (
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                    <p className="text-gray-700 text-base mb-6 leading-relaxed">
                                        Our biomedical engineering faculty include professors with extensive expertise in medical technology, clinical engineering, and healthcare innovation. Many have active collaborations with hospitals and medical institutions, bringing real-world healthcare challenges into the classroom.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="px-3 py-1.5 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">Medical Device Design</span>
                                        <span className="px-3 py-1.5 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">Biomedical Instrumentation</span>
                                        <span className="px-3 py-1.5 bg-fuchsia-100 text-fuchsia-700 rounded-full text-sm font-medium">Medical Imaging</span>
                                        <span className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full text-sm font-medium">Prosthetics & Orthotics</span>
                                        <span className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">Clinical Engineering</span>
                                    </div>
                                    <Link href="/faculty-and-staff?program=BE in Biomedical Engineering">
                                        <Button className="bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 text-white">
                                            View All Faculty
                                            <FiArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    {/* <Link href={`/faculty?program=${encodeURIComponent(programName)}`}>
                                                              <Button className= "bg-gradient-to-r from-rose-600 to-pink-500 hover:from-rose-700 hover:to-pink-600 text-white">
                                                                  View All Faculty
                                                                  <FiArrowRight className="ml-2 h-4 w-4" />
                                                              </Button>
                                                          </Link> */}
                                </div>
                            )}
                            {program.id === "be-computer" && (
                                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                    <p className="text-gray-700 text-base mb-6 leading-relaxed">
                                        Our computer engineering faculty feature professionals with significant industry experience from leading tech companies. They bring expertise in emerging areas like IoT, quantum computing, embedded systems, and network security, ensuring you learn the most current technologies.
                                    </p>
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        <span className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">IoT & Edge Computing</span>
                                        <span className="px-3 py-1.5 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium">Quantum Computing</span>
                                        <span className="px-3 py-1.5 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">Embedded Systems</span>
                                        <span className="px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">Network Security</span>
                                        <span className="px-3 py-1.5 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">System Architecture</span>
                                    </div>
                                    <Link href="/faculty-and-staff?program=BE in Computer Engineering">
                                        <Button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white">
                                            View All Faculty
                                            <FiArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>
            ) : null}
        </>
    )
}

export default Faculty
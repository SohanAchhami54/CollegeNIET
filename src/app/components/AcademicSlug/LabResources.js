import React from 'react'
import { IoCodeSharp, IoSettingsOutline } from 'react-icons/io5'
import { LuCircleCheck, LuFlaskConical, LuLaptop, LuMicroscope, LuServer } from 'react-icons/lu'
import { graduateFont } from '@/font';
import { motion } from 'framer-motion';
import { AiOutlineHeart } from 'react-icons/ai';
export const LabResources = ({ program, labsSectionRef, isLabsInView }) => {
    return (
        <>
            {program.id === "btech-ai" || program.id === "be-bme" || program.id === "be-computer" ? (
                <motion.section
                    ref={labsSectionRef}
                    id="labs-resources"
                    className="scroll-mt-28"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isLabsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative">
                        {/* Section Header */}
                        <div className="mb-6 sm:mb-8 lg:mb-10">
                            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 mb-4 sm:mb-6">
                                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                                    <LuFlaskConical className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                                </div>
                                <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider">Labs & Resources</span>
                            </div>
                            <h2 className={`${graduateFont.className}  text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4`}>
                                State-of-the-Art Facilities
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                                Access cutting-edge laboratories and industry-standard tools to bring your learning to life
                            </p>
                        </div>

                        {/* Labs Content - Program Specific */}
                        <div className="mt-8">
                            {program.id === "btech-ai" && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-purple-100">
                                                <LuServer className="h-6 w-6 text-purple-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">AI Research Labs</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Our dedicated AI labs feature GPU clusters for training deep learning models and high-performance computing infrastructure for large-scale AI research.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Cloud GPU access for model training</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>High-performance computing clusters</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-indigo-100">
                                                <IoCodeSharp className="h-6 w-6 text-indigo-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Software & Tools</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Access industry-standard AI development frameworks and tools used by leading tech companies.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>TensorFlow & PyTorch development environments</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Jupyter notebooks and MLflow for experiment tracking</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Cloud platforms: AWS, GCP, Azure</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {program.id === "be-bme" && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-rose-100">
                                                < AiOutlineHeart className="h-6 w-6 text-rose-600" />
                                            </div>
                                            <h3 className={`${graduateFont.className} text-xl font-bold text-gray-900 `}>Prosthetics & Orthotics Lab</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Hands-on experience designing and developing assistive devices and prosthetics with modern fabrication tools.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>3D printing and rapid prototyping equipment</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Biomechanical testing systems</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-pink-100">
                                                <LuMicroscope className="h-6 w-6 text-pink-600" />
                                            </div>
                                            <h3 className={`${graduateFont.className} text-xl font-bold text-gray-900 `}>Medical Imaging & Bioinstrumentation</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Advanced labs for medical imaging analysis and biomedical instrumentation development.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Medical imaging processing workstations</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Bioinstrumentation design and testing equipment</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Signal processing and analysis tools</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                            {program.id === "be-computer" && (
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-blue-100">
                                                <LuLaptop className="h-6 w-6 text-blue-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Computer Labs</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Modern computer labs equipped with the latest hardware and software for system design, embedded development, and network programming.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>High-performance workstations for system design</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>FPGA development boards and tools</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 lg:p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-cyan-100">
                                                < IoSettingsOutline className="h-6 w-6 text-cyan-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900">Industry-Standard Software</h3>
                                        </div>
                                        <p className="text-gray-700 mb-4 leading-relaxed">
                                            Access to professional software tools used in industry for hardware design, embedded systems, and network security.
                                        </p>
                                        <ul className="space-y-2">
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>VLSI design and simulation tools</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Embedded system development environments</span>
                                            </li>
                                            <li className="flex items-center gap-2 text-gray-600">
                                                <LuCircleCheck className="h-4 w-4 text-emerald-600" />
                                                <span>Network security and penetration testing tools</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.section>
            ) : null}

        </>
    )
}

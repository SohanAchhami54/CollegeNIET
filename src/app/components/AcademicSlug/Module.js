import React from "react";
import { graduateFont } from "@/font";
import { motion } from "framer-motion";
import { MdOutlineFileDownload } from "react-icons/md";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../Tabs/Tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Tabs/accordion";
import {  FiCloud } from "react-icons/fi";
import { IoCodeSharp,  } from "react-icons/io5";
import { FiGitBranch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaCode, FaNetworkWired } from "react-icons/fa";
import { BsShield } from "react-icons/bs";
import { LuBrain, LuBookOpen,  LuFlaskConical,  LuBookMarked,  LuMicroscope, LuCircuitBoard, LuWrench, LuCpu,  LuSmartphone } from "react-icons/lu";
import Link from "next/link";
import { GoDatabase } from "react-icons/go";
export const Module = ({program,modulesSectionRef,isModulesInView}) => {

    function getCourseIcon(courseName) {
        const name = courseName.toLowerCase();
    
        if (name.includes("programming") || name.includes("code") || name.includes("software")) return IoCodeSharp;
        if (name.includes("computer") && (name.includes("organization") || name.includes("architecture"))) return LuCpu;
        if (name.includes("data structure") || name.includes("algorithm")) return FiGitBranch;
        if (name.includes("database")) return GoDatabase;
        if (name.includes("network") || name.includes("communication")) return FaNetworkWired;
        if (name.includes("digital logic") || name.includes("circuit")) return LuCircuitBoard;
        if (name.includes("artificial intelligence") || name.includes("machine learning") || name.includes("ai")) return LuBrain;
        if (name.includes("biomedical") || name.includes("medical")) return AiOutlineHeart;
        if (name.includes("microcontroller") || name.includes("embedded")) return LuMicroscope;
        // if (name.includes("web") || name.includes("internet")) return Globe;
        if (name.includes("security") || name.includes("cyber")) return BsShield;
        if (name.includes("cloud")) return FiCloud;
        if (name.includes("mobile") || name.includes("android") || name.includes("ios")) return LuSmartphone;
        if (name.includes("project") || name.includes("engineering project")) return LuWrench;
        if (name.includes("introduction") || name.includes("fundamental")) return LuBookOpen;
        if (name.includes("lab") || name.includes("laboratory")) return LuFlaskConical;
    
        return FaCode; // Default icon
    }
    
  return (
    <>
      <motion.section
        ref={modulesSectionRef}
        id="modules"
        className="scroll-mt-28"
        initial={{ opacity: 0, y: 50 }}
        animate={isModulesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="relative">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 border border-indigo-100 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <LuBookMarked className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-indigo-700 uppercase tracking-wider">
                Curriculum
              </span>
            </div>
            <h2
              className={` ${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4`}
            >
              Course Modules
            </h2>
            {program.curriculumDocuments &&
              (program.curriculumDocuments.structure ||
                program.curriculumDocuments.syllabus) && (
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  {program.curriculumDocuments.structure && (
                    <Link
                      href={program.curriculumDocuments.structure.path}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg border border-indigo-200 transition-all duration-200 hover:shadow-md hover:scale-105 text-sm sm:text-base"
                    >
                      {program.curriculumDocuments.structure.label}
                    </Link>
                  )}
                  {program.curriculumDocuments.syllabus && (
                    <Link
                      href={program.curriculumDocuments.syllabus.path}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-medium rounded-lg border border-indigo-200 transition-all duration-200 hover:shadow-md hover:scale-105 text-sm sm:text-base"
                    >
                      <MdOutlineFileDownload className=" text-xl" />
                      {program.curriculumDocuments.syllabus.label}
                    </Link>
                  )}
                </div>
              )}
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed">
              Comprehensive curriculum designed for real-world success
            </p>
          </div>

          {/* Curriculum Container with Enhanced Design */}
          <div className="mt-8 relative">
            <div className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-lg p-3 sm:p-4 lg:p-6 xl:p-8 overflow-hidden">
              <Tabs
                defaultValue={program.modules[0]?.year || "YEAR ONE"}
                className="w-full relative z-10"
              >
                {/* Enhanced Year Tabs */}
                <TabsList className="flex w-full bg-gray-50 rounded-xl sm:rounded-2xl p-1 mb-4 sm:mb-6 h-auto border border-gray-200 gap-1 sm:gap-1.5 overflow-x-auto">
                  {program.modules.map((year, tabIndex) => (
                    <TabsTrigger
                      key={year.year}
                      value={year.year}
                      className="flex-1 min-w-[80px] sm:min-w-[100px] data-[state=active]:bg-indigo-600 data-[state=active]:text-white data-[state=active]:shadow-sm rounded-lg sm:rounded-xl py-1.5 sm:py-2 lg:py-2.5 px-2 sm:px-3 lg:px-5 transition-all duration-300 text-gray-700 font-bold text-[10px] sm:text-xs lg:text-sm hover:text-gray-900 data-[state=inactive]:hover:bg-gray-100 whitespace-nowrap"
                    >
                      <span className="relative z-10">{year.year}</span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {/* Year Content */}
                {program.modules.map((year, yearIndex) => (
                  <TabsContent
                    key={yearIndex}
                    value={year.year}
                    className="mt-0 animate-in fade-in-50 duration-300"
                  >
                    <div className="space-y-4 sm:space-y-5 lg:space-y-6">
                      {year.semesters.map((semester, semIndex) => {
                        // Calculate total credits for this semester
                        const totalCredits = semester.modules.reduce(
                          (sum, module) => sum + module.credits,
                          0
                        );

                        return (
                          <motion.div
                            key={semIndex}
                            className="relative"
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                              isModulesInView ? { opacity: 1, y: 0 } : {}
                            }
                            transition={{
                              duration: 0.3,
                              delay: semIndex * 0.1,
                            }}
                          >
                            {/* Semester Header with Enhanced Design */}
                            <div className="relative mb-2 sm:mb-3">
                              <div className="flex items-center justify-between gap-2 sm:gap-3 mb-1.5">
                                <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-2.5 flex-1 min-w-0">
                                  <div className="relative flex-shrink-0">
                                    <div className="relative h-6 sm:h-8 lg:h-10 w-1 sm:w-1.5 bg-indigo-600 rounded-full"></div>
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 lg:gap-2.5 mb-1">
                                      <h3
                                        className={`${graduateFont.className} text-sm sm:text-base lg:text-lg font-bold text-gray-900 `}
                                      >
                                        {semester.semester}
                                      </h3>
                                      <span className="text-[9px] sm:text-[10px] lg:text-xs font-bold text-indigo-700 bg-indigo-50 px-1.5 sm:px-2 lg:px-2.5 py-0.5 rounded-full border border-indigo-200 whitespace-nowrap w-fit">
                                        {totalCredits} Total Credits
                                      </span>
                                    </div>
                                    <div className="h-0.5 w-10 sm:w-12 lg:w-16 bg-indigo-600 rounded-full"></div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Course Cards Grid */}
                            <div className="grid gap-2 sm:gap-2.5 lg:gap-3">
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-2 sm:space-y-2.5 lg:space-y-3"
                              >
                                {semester.modules.map((module, modIndex) => {
                                  const CourseIcon = getCourseIcon(module.name);
                                  // Extract short title for elective courses
                                  let displayName = module.name;
                                  let fullDescription = module.description;

                                  // Check if it's an elective course (handles formats like "Elective I:", "Elective-I", "Elective II:", etc.)
                                  const electiveMatch = module.name.match(
                                    /^(Elective\s*[-]?\s*[IVX]+(?:\s*[-:])?)\s*(.+)$/i
                                  );
                                  if (electiveMatch) {
                                    displayName = electiveMatch[1]
                                      .replace(/[-:]\s*$/, "")
                                      .trim(); // Just "Elective I" or "Elective II"
                                    const courseDetails =
                                      electiveMatch[2].trim();
                                    // Combine course details with existing description
                                    fullDescription =
                                      courseDetails +
                                      (module.description
                                        ? `\n\n${module.description}`
                                        : "");
                                  }

                                  return (
                                    <AccordionItem
                                      key={modIndex}
                                      value={`module-${yearIndex}-${semIndex}-${modIndex}`}
                                      className="group border-0"
                                    >
                                      <div className="relative overflow-hidden rounded-lg sm:rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-300">
                                        <AccordionTrigger className="flex w-full items-center justify-between p-2.5 sm:p-3 lg:p-4 text-left font-semibold text-gray-800 hover:no-underline group/trigger relative z-10">
                                          <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-1 min-w-0">
                                            {/* Course Icon with smaller size */}
                                            <div className="flex-shrink-0 relative">
                                              <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm group-hover/trigger:bg-indigo-700 transition-all duration-300">
                                                <CourseIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 lg:h-4 lg:w-4" />
                                              </div>
                                            </div>

                                            {/* Course Name */}
                                            <span
                                              className={`text-xs sm:text-sm lg:text-base font-bold text-gray-900 pr-2 sm:pr-3 lg:pr-4 group-hover/trigger:text-indigo-700 transition-colors duration-300 break-words ${graduateFont.className}`}
                                            >
                                              {displayName}
                                            </span>
                                          </div>

                                          {/* Credits Badge with enhanced design */}
                                          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 flex-shrink-0">
                                            <span
                                              className={`text-[9px] sm:text-[10px] lg:text-xs font-bold text-indigo-700 bg-indigo-50 px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 lg:py-1.5 rounded-full border border-indigo-200 whitespace-nowrap  ${graduateFont.className}`}
                                            >
                                              {module.credits} Credits
                                            </span>
                                          </div>
                                        </AccordionTrigger>

                                        <AccordionContent className="px-2.5 sm:px-3 lg:px-4 pb-2.5 sm:pb-3 lg:pb-4 pt-0 relative z-10">
                                          <div className="pl-[36px] sm:pl-[42px] lg:pl-[50px] border-t border-indigo-200 pt-2 sm:pt-2.5 lg:pt-3">
                                            <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed font-medium whitespace-pre-line">
                                              {fullDescription}
                                            </p>
                                          </div>
                                        </AccordionContent>
                                      </div>
                                    </AccordionItem>
                                  );
                                })}
                              </Accordion>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

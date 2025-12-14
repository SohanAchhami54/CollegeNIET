import React from "react";
import { graduateFont } from "@/font";
import { motion } from "framer-motion";
import { LuBriefcase, LuBuilding2, LuCircleCheck } from "react-icons/lu";
export const Internship = ({
  program,
  internshipsSectionRef,
  isInternshipsInView,
}) => {
  return (
    <>
      {program.id === "btech-ai" ||
      program.id === "be-bme" ||
      program.id === "be-computer" ? (
        <motion.section
          ref={internshipsSectionRef}
          id="internships"
          className="scroll-mt-28"
          initial={{ opacity: 0, y: 50 }}
          animate={isInternshipsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative">
            {/* Section Header */}
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-violet-500 to-purple-500">
                  <LuBriefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-violet-700 uppercase tracking-wider">
                  Industry Connections
                </span>
              </div>
              <h2
                className={`${graduateFont.className} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4`}
              >
                Internship Placements
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                Gain real-world experience through internships with our industry
                partners
              </p>
            </div>

            {/* Internships Content */}
            <div className="mt-8">
              <div className="bg-gradient-to-br from-white to-violet-50/30 rounded-2xl border border-violet-200 shadow-lg p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-violet-100">
                    <LuBuilding2 className="h-6 w-6 text-violet-600" />
                  </div>
                  <h3
                    className={` ${graduateFont.className} text-xl font-bold text-gray-900 `}
                  >
                    Industry Partnerships
                  </h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our strong relationships with leading companies in the
                  industry provide students with valuable internship
                  opportunities. These placements allow you to apply classroom
                  knowledge in real-world settings, build professional networks,
                  and gain hands-on experience that enhances your career
                  prospects.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <LuCircleCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Hands-On Experience
                      </h4>
                      <p className="text-sm text-gray-600">
                        Work on real projects and contribute to industry
                        solutions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <LuCircleCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Professional Network
                      </h4>
                      <p className="text-sm text-gray-600">
                        Build connections with industry professionals and
                        mentors
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <LuCircleCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Career Preparation
                      </h4>
                      <p className="text-sm text-gray-600">
                        Develop skills and experience that employers value
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200">
                    <LuCircleCheck className="h-5 w-5 text-violet-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Industry Insights
                      </h4>
                      <p className="text-sm text-gray-600">
                        Understand current industry practices and trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      ) : null}
    </>
  );
};

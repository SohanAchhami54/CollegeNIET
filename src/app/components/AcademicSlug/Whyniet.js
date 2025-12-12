import React from "react";
import { graduateFont } from "@/font";
import { motion } from "framer-motion";
import { LuSparkles } from "react-icons/lu";
import { GoStar } from "react-icons/go";

export const Whyniet = ({program,whyUniversitySectionRef,isWhyUniversityInView}) => {
  return (
    <>
      {program.whyUniversity && (
        <motion.section
          ref={whyUniversitySectionRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isWhyUniversityInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="relative h-full">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 mb-4 sm:mb-6">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500">
                  <LuSparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-amber-700 uppercase tracking-wider">
                  Why Choose Us
                </span>
              </div>
              <h2
                className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 ${graduateFont.className}`}
              >
                Why Choose Us?
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Experience excellence in education
              </p>
            </div>
            <div className="relative bg-gradient-to-br from-white to-amber-50/30 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex-shrink-0">
                    <GoStar className="h-5 w-5 lg:h-6 lg:w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-gray-700 leading-relaxed text-base">
                      {program.whyUniversity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      )}
    </>
  );
};

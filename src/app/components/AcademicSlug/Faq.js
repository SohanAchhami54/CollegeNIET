import React from "react";
import { motion } from "framer-motion";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Tabs/accordion";
import { FiFileText } from "react-icons/fi";
import { LuAward, LuBriefcase, LuDollarSign } from "react-icons/lu";
import { robotoFont } from '@/font';
export const Faq = ({program,faqSectionRef,isFaqInView}) => {


        const totalFee = program.feeStructure.reduce((sum, fee) => {
        if (program.discountInfo?.semesterFeeDiscount) {
            // For discounted programs, only sum the discounted semester fees
            const discountedSem1 = Math.round(fee.semester1Fee * (1 - program.discountInfo.semesterFeeDiscount / 100));
            const discountedSem2 = Math.round(fee.semester2Fee * (1 - program.discountInfo.semesterFeeDiscount / 100));
            return sum + discountedSem1 + discountedSem2;
        } else {
            // For non-discounted programs, include everything
            return sum + fee.grandTotal;
        }
    }, 0);
  return (
    <>
      <motion.section
        ref={faqSectionRef}
        id="faq"
        className="faq-section scroll-mt-28"
        initial={{ opacity: 0, y: 50 }}
        animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="relative h-full">
          {/* Section Header */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-rose-50 via-pink-50 to-fuchsia-50 border border-rose-100 mb-4 sm:mb-6">
              <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-500">
                <FaRegCircleQuestion className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-rose-700 uppercase tracking-wider">
                Frequently Asked
              </span>
            </div>
            <h2
              className={`${robotoFont.className}vtext-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal text-gray-900 tracking-tight mb-3 sm:mb-4`}
            >
              FAQs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Get answers to common questions
            </p>
          </div>

          {/* FAQ Container */}
          <div className="relative mt-6 sm:mt-8">
            <div className="space-y-4 sm:space-y-5 lg:space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1" className="border-0">
                  <div className="bg-white rounded-lg">
                    <AccordionTrigger className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:gap-5 p-3 sm:p-4 lg:p-6 text-left hover:no-underline">
                      <span className="text-sm sm:text-base font-semibold text-gray-900 flex-1 min-w-0 pr-2 sm:pr-3 lg:pr-5">
                        What are the admission requirements?
                      </span>
                      <div className="flex-shrink-0">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100">
                          <FaRegCircleQuestion className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-0">
                      <div className="pt-3 sm:pt-4 lg:pt-6">
                        <ul className="space-y-2 text-sm sm:text-base text-gray-700 leading-relaxed">
                          {program.admissionEligibility.split("\n").map(
                            (item, index) =>
                              item.trim() && (
                                <li
                                  key={index}
                                  className="flex items-start gap-2"
                                >
                                  <span className="text-[#0d4e92] mt-1">•</span>
                                  <span>{item.replace(/^•\s*/, "")}</span>
                                </li>
                              )
                          )}
                        </ul>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>

                {program.entranceExamRequired !== undefined && (
                  <AccordionItem value="faq-entrance" className="border-0">
                    <div className="bg-white rounded-lg">
                      <AccordionTrigger className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:gap-5 p-3 sm:p-4 lg:p-6 text-left hover:no-underline">
                        <span className="text-sm sm:text-base font-semibold text-gray-900 flex-1 min-w-0 pr-2 sm:pr-3 lg:pr-5">
                          Is an entrance exam required?
                        </span>
                        <div className="flex-shrink-0">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100">
                            <FiFileText className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-0">
                        <div className="pt-3 sm:pt-4 lg:pt-6">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {program.entranceExamNote ||
                              (program.entranceExamRequired
                                ? "Yes, an entrance exam is required for admission to this program."
                                : "No, there is no entrance exam required. Direct admission is available for this program.")}
                          </p>
                        </div>
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                )}

                <AccordionItem value="faq-2" className="border-0">
                  <div className="bg-white rounded-lg">
                    <AccordionTrigger className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:gap-5 p-3 sm:p-4 lg:p-6 text-left hover:no-underline">
                      <span className="text-sm sm:text-base font-semibold text-gray-900 flex-1 min-w-0 pr-2 sm:pr-3 lg:pr-5">
                        What are the program fees?
                      </span>
                      <div className="flex-shrink-0">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100">
                          <LuDollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-0">
                      <div className="pt-3 sm:pt-4 lg:pt-6">
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          The total program fee is{" "}
                          <strong className="font-bold text-gray-900">
                            NPR {totalFee.toLocaleString()}
                          </strong>
                          . This includes all fees across all years. Please
                          refer to the detailed fee structure above for a
                          year-by-year breakdown.
                        </p>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="faq-3" className="border-0">
                  <div className="bg-white rounded-lg">
                    <AccordionTrigger className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:gap-5 p-3 sm:p-4 lg:p-6 text-left hover:no-underline">
                      <span className="text-sm sm:text-base font-semibold text-gray-900 flex-1 min-w-0 pr-2 sm:pr-3 lg:pr-5">
                        What are the career prospects after graduation?
                      </span>
                      <div className="flex-shrink-0">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100">
                          <LuBriefcase className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-0">
                      <div className="pt-3 sm:pt-4 lg:pt-6">
                        <p className="mb-3 sm:mb-4 font-semibold text-gray-900 text-base sm:text-lg">
                          Graduates can pursue careers in:
                        </p>
                        <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
                          {program.careerOutcomes.map((career, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 sm:gap-3 lg:gap-4"
                            >
                              <div className="flex-shrink-0 mt-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400"></div>
                              </div>
                              <span className="text-sm sm:text-base text-gray-700">
                                {career}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>

                <AccordionItem value="faq-4" className="border-0">
                  <div className="bg-white rounded-lg">
                    <AccordionTrigger className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:gap-5 p-3 sm:p-4 lg:p-6 text-left hover:no-underline">
                      <span className="text-sm sm:text-base font-semibold text-gray-900 flex-1 min-w-0 pr-2 sm:pr-3 lg:pr-5">
                        Are scholarships available?
                      </span>
                      <div className="flex-shrink-0">
                        <div className="p-1.5 sm:p-2 rounded-lg bg-gray-100">
                          <LuAward className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4 lg:pb-6 pt-0">
                      <div className="pt-3 sm:pt-4 lg:pt-6">
                        {program.scholarshipInfo ? (
                          <div className="space-y-2">
                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                              {program.scholarshipInfo.description}
                            </p>
                            {program.scholarshipInfo.note && (
                              <p className="text-sm text-gray-600 italic">
                                {program.scholarshipInfo.note}
                              </p>
                            )}
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            Yes, we offer various scholarships including
                            merit-based scholarships and need-based financial
                            aid. Please contact our admissions office for more
                            information about available scholarships and
                            eligibility criteria.
                          </p>
                        )}
                      </div>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

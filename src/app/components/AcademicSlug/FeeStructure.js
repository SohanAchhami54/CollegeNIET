import React from 'react'
import { motion } from 'framer-motion';
import { LuDollarSign } from "react-icons/lu";
import { graduateFont } from '@/font';
import { FiFileText } from 'react-icons/fi';
function FeeStructure({ program, feeSectionRef, isFeeInView }) {

    // Calculate total fee: for programs with discount, exclude security deposit from total
    // For discounted programs, total is sum of discounted semester fees only (875,000)
    // For non-discounted programs, total includes everything (1,370,000)
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

    // Calculate total discount amount
    const totalDiscount = program?.discountInfo?.semesterFeeDiscount
        ? program.feeStructure.reduce((sum, fee) => {
            const discountPercent = program.discountInfo.semesterFeeDiscount;
            const discount = Math.round(
                (fee.semester1Fee + fee.semester2Fee) * (discountPercent / 100)
            );
            return sum + discount;
        }, 0)
        : 0;
    return (
        <>
            <motion.section
                ref={feeSectionRef}
                id="fee-structure"
                className="scroll-mt-28"
                initial={{ opacity: 0, y: 50 }}
                animate={isFeeInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
            >
                <div className="relative">
                    {/* Section Header */}
                    <div className="mb-6 sm:mb-8 lg:mb-10">
                        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-100 mb-4 sm:mb-6">
                            <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-emerald-500 to-green-500">
                                <LuDollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-emerald-700 uppercase tracking-wider">Investment</span>
                        </div>
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 tracking-tight mb-3 sm:mb-4 ${graduateFont.className} `}>Fee Structure</h2>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">Transparent pricing for your educational journey</p>
                    </div>

                    {/* Fee Table Card */}
                    <div className="relative mt-6 sm:mt-8 rounded-xl sm:rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden">
                        {/* Scroll indicator - fade effect on right side */}
                        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-0 bg-gradient-to-l from-white to-transparent pointer-events-none z-10 sm:hidden"></div>

                        <div className="overflow-x-auto px-4 sm:px-0">
                            <div className="min-w-full inline-block">
                                <table className="w-full min-w-[600px] sm:min-w-full lg:table-fixed">
                                    <colgroup>
                                        <col className="w-auto lg:w-[35%]" />
                                        {program.feeStructure.map((_, index) => (
                                            <col key={index} className="lg:w-[16.25%]" />
                                        ))}
                                    </colgroup>
                                    <thead>
                                        <tr className="bg-gray-100 border-b-2 border-gray-300">
                                            <th scope="col" className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-5 text-left font-semibold text-gray-900 uppercase tracking-wide text-xs sm:text-sm">Particulars</th>
                                            {program.feeStructure.map((fee, index) => (
                                                <th key={index} scope="col" className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-5 text-center font-semibold text-gray-900 uppercase tracking-wide text-xs sm:text-sm">
                                                    {fee.year}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 font-medium text-gray-900 text-xs sm:text-sm lg:text-sm">
                                                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-2 lg:gap-2">
                                                    <span className="whitespace-nowrap">Admission Fee</span>
                                                    {program.discountInfo?.admissionFeeWaiver && (
                                                        <div className="text-[10px] sm:text-xs font-semibold text-red-800">
                                                            {(() => {
                                                                const text = program.discountInfo.note || "100% waiver in Admission Fee for this Batch";
                                                                return text.split(' ').map((word, i, arr) => {
                                                                    if (word === 'in' || word === 'for') {
                                                                        return <React.Fragment key={i}>{word}<br /></React.Fragment>;
                                                                    }
                                                                    return i < arr.length - 1 ? <React.Fragment key={i}>{word} </React.Fragment> : <React.Fragment key={i}>{word}</React.Fragment>;
                                                                });
                                                            })()}
                                                        </div>
                                                    )}
                                                </div>
                                            </td>
                                            {program.feeStructure.map((fee, index) => (
                                                <td key={index} className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center text-gray-700 text-xs sm:text-sm lg:text-sm">
                                                    {fee.admissionFee > 0 ? `NPR ${fee.admissionFee.toLocaleString()}` : <span className="text-gray-400">-</span>}
                                                </td>
                                            ))}
                                        </tr>
                                        {program.discountInfo?.semesterFeeDiscount && (
                                            <tr className="border-b border-gray-200 bg-blue-50/50">
                                                <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 font-medium text-gray-900 text-xs sm:text-sm lg:text-sm">
                                                    <span>Discount<br />({program.discountInfo.semesterFeeDiscount}% on Semester Fee)</span>
                                                </td>
                                                {program.feeStructure.map((fee, index) => {
                                                    const discountPercent = program?.discountInfo?.semesterFeeDiscount || 0;

                                                    const discount = Math.round(
                                                        (fee.semester1Fee + fee.semester2Fee) * (discountPercent / 100)
                                                    );

                                                    return (
                                                        <td
                                                            key={index}
                                                            className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center text-green-700 text-xs sm:text-sm lg:text-sm font-semibold"
                                                        >
                                                            -NPR {discount.toLocaleString()}
                                                        </td>
                                                    );
                                                })}

                                            </tr>
                                        )}
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 whitespace-nowrap font-medium text-gray-900 text-xs sm:text-sm lg:text-sm">Semester 1 Fee</td>
                                            {program.feeStructure.map((fee, index) => {
                                                const discountedFee = program.discountInfo?.semesterFeeDiscount
                                                    ? Math.round(fee.semester1Fee * (1 - program.discountInfo.semesterFeeDiscount / 100))
                                                    : fee.semester1Fee;
                                                return (
                                                    <td key={index} className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center text-gray-700 text-xs sm:text-sm lg:text-sm">
                                                        NPR {discountedFee.toLocaleString()}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 whitespace-nowrap font-medium text-gray-900 text-xs sm:text-sm lg:text-sm">Semester 2 Fee</td>
                                            {program.feeStructure.map((fee, index) => {
                                                const discountedFee = program.discountInfo?.semesterFeeDiscount
                                                    ? Math.round(fee.semester2Fee * (1 - program.discountInfo.semesterFeeDiscount / 100))
                                                    : fee.semester2Fee;
                                                return (
                                                    <td key={index} className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center text-gray-700 text-xs sm:text-sm lg:text-sm">
                                                        NPR {discountedFee.toLocaleString()}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 whitespace-nowrap font-medium text-gray-900 text-xs sm:text-sm lg:text-sm">Security Deposit</td>
                                            {program.feeStructure.map((fee, index) => (
                                                <td key={index} className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center text-gray-700 text-xs sm:text-sm lg:text-sm">
                                                    {fee.universityRegFee > 0 ? `NPR ${fee.universityRegFee.toLocaleString()}` : <span className="text-gray-400">-</span>}
                                                </td>
                                            ))}
                                        </tr>
                                        <tr className="bg-gray-50 border-t-2 border-gray-300">
                                            <td className="px-4 sm:px-5 lg:px-6 py-3 sm:py-4 lg:py-4 whitespace-nowrap font-bold text-gray-900 text-sm sm:text-base lg:text-base">Grand Total</td>
                                            {program.feeStructure.map((fee, index) => {
                                                let grandTotal;
                                                if (program.discountInfo?.semesterFeeDiscount) {
                                                    // For discounted programs, grand total is only discounted semester fees
                                                    const discountedSem1 = Math.round(fee.semester1Fee * (1 - program.discountInfo.semesterFeeDiscount / 100));
                                                    const discountedSem2 = Math.round(fee.semester2Fee * (1 - program.discountInfo.semesterFeeDiscount / 100));
                                                    grandTotal = discountedSem1 + discountedSem2;
                                                } else {
                                                    // For non-discounted programs, include everything
                                                    grandTotal = fee.total;
                                                }
                                                return (
                                                    <td key={index} className="px-3 sm:px-4 lg:px-4 py-3 sm:py-4 lg:py-4 whitespace-nowrap text-center font-bold text-gray-900 text-sm sm:text-base lg:text-base">
                                                        NPR {grandTotal.toLocaleString()}
                                                    </td>
                                                );
                                            })}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Mobile scroll hint */}
                        <div className="sm:hidden px-4 py-2 text-center text-xs text-gray-500 bg-gray-50 border-t border-gray-200">
                            <span className="inline-flex items-center gap-1">
                                <span>←</span> Scroll horizontally to view all columns
                                <span>→</span>
                            </span>
                        </div>
                    </div>

                    {/* Total Program Amount */}
                    <div className="mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl sm:rounded-2xl border border-gray-200 shadow-lg">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
                            <span className="text-base sm:text-lg font-semibold text-gray-700">Total Program Amount:</span>
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">NPR {totalFee.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Note Card */}
                    <div className="mt-6 sm:mt-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl border border-blue-200 shadow-lg">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-blue-500 flex-shrink-0">
                                <FiFileText className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <p className="text-blue-900 font-semibold mb-1">Important Note</p>
                                <p className="text-blue-800 text-base leading-relaxed">
                                    Admission Fee and Security Deposit apply only to the first year. Fees are subject to change. Please contact admissions for the most current details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default FeeStructure
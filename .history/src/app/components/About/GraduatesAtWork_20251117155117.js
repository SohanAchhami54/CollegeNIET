"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { graduateFont, robotoFont } from "@/font";

export default function GraduatesWorkAtSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const globalPartners = [
    "Cambridge University, UK",
    "Mayo Clinic, USA",
    "Nanyang Tech, Singapore",
    "AstraZeneca, USA",
    "Wake Forest Institute, USA",
    "Harbin Institute, China",
    "UNSW, Australia",
    "Waterloo Institute, Ireland",
    "Hannover Medical, Germany",
    "IIT India",
  ];

  const privateHospitals = [
    "Grande Int'l Hospital",
    "Nepal Mediciti Hospital",
    "Norvic Hospital",
    "Lumbini Medical Hospital",
    "Chitwan Medical College",
    "Biratnagar Eye Hospital",
    "Birt Medical College",
    "Dhulikhel Hospital",
    "Gautam Buddha Hospital",
    "Universal College of Medical Sciences",
    "National Kidney Center",
  ];

  const govtInstitutions = [
    "T.U. Teaching Hospital",
    "Patan Academy of Science & Technology",
    "Nepal Army Institute of Health Sciences",
    "Armed Police Force Hospital",
    "B.P. Koirala Institute of Health Sciences",
    "B.P. Koirala Memorial Cancer Hospital",
    "Kanti Children's Hospital",
    "Shahid Dharmabhakta Human Organ Transplant Centre",
    "Ministry of Health and Population",
    "National Public Health Laboratory",
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p
            className={`text-gray-400 mb-4 uppercase tracking-[0.2em] text-sm ${graduateFont.className}`}
          >
            Our Graduates Work At
          </p>

          <p
            className={`text-gray-500 mb-10 text-sm max-w-2xl mx-auto ${robotoFont.className}`}
          >
            500+ graduates placed globally. From Cambridge to Mayo Clinic, from
            top hospitals in Nepal to leading tech companies worldwide.
          </p>

          {/* GLOBAL ORGS */}
          <div className="mb-8">
            <h4
              className={`text-sm font-semibold text-gray-700 mb-4 ${robotoFont.className}`}
            >
              🌍 Global Universities & Companies
            </h4>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {globalPartners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 
                             hover:border-[#0d4e92]/40 hover:shadow-md hover:scale-105 transition-all"
                >
                  <div
                    className={`text-gray-700 text-xs font-medium ${robotoFont.className}`}
                  >
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* PRIVATE HOSPITALS */}
          <div className="mb-8">
            <h4
              className={`text-sm font-semibold text-gray-700 mb-4 ${robotoFont.className}`}
            >
              🏥 Private Hospitals in Nepal
            </h4>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {privateHospitals.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 
                             hover:border-emerald-400/40 hover:shadow-md hover:scale-105 transition-all"
                >
                  <div
                    className={`text-gray-700 text-xs font-medium ${robotoFont.className}`}
                  >
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* GOVERNMENT INSTITUTIONS */}
          <div>
            <h4
              className={`text-sm font-semibold text-gray-700 mb-4 ${robotoFont.className}`}
            >
              🏛️ Government Hospitals & Institutions
            </h4>

            <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
              {govtInstitutions.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 
                             hover:border-purple-400/40 hover:shadow-md hover:scale-105 transition-all"
                >
                  <div
                    className={`text-gray-700 text-xs font-medium ${robotoFont.className}`}
                  >
                    {partner}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

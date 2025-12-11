"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Star, Building } from "lucide-react";
import Image from "next/image";
import { graduateFont } from "@/font";
import { useQueries } from "@tanstack/react-query";

export default function RecognitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = useQueries({
    queries: [
      {
        queryKey: ["accreduitation_excellence"],
        queryFn: () =>
          api
            .get("/website/homepage-accredition-partnership/")
            .then((res) => res.data),
      },
    ],
  });

  const [accreduitation_excellence] = results;

  // Debug: See full structure
  console.log("FULL ACCREDITATION RESPONSE:", accreduitation_excellence);

  // Safely extract list depending on API structure
  const accreditationData = Array.isArray(accreduitation_excellence?.data?.data)
    ? accreduitation_excellence.data.data
    : Array.isArray(accreduitation_excellence?.data)
    ? accreduitation_excellence.data
    : [];

  const recognitions = [
    {
      icon: Building,
      name: "Purbanchal University",
      description: "Affiliated",
      gradient: "from-blue-500 to-cyan-400",
      imageSrc: "/PU.png",
    },
    {
      icon: Shield,
      name: "UGC-QAA Certified",
      description: "First in Kathmandu Valley",
      gradient: "from-green-500 to-emerald-400",
      imageSrc: "/UGC Logo.png",
    },
    {
      icon: Award,
      name: "Best Private College",
      description: "Ministry of Education Award",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Star,
      name: "International Conferences",
      description: "ICIDN, Ka SAM, MMDR",
      gradient: "from-orange-500 to-amber-400",
    },
  ];

  const partners = [
    "Wiley",
    "Elsevier",
    "SAGE",
    "BIOMED-NEPAL Journal",
    "International Conferences",
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* -------------------------------
                SECTION HEADER
        -------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl lg:text-6xl text-gray-900 mb-6 tracking-tight">
            Accredited
            <br />
            <span className="bg-gradient-to-r from-[#0d4e92] to-cyan-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            First UGC-QAA certified engineering college in Kathmandu Valley.
            Awarded Best Private College by Ministry of Education. Hosting
            international conferences since 2008.
          </p>
        </motion.div>

        {/* -------------------------------
                MAIN RECOGNITION GRID
        -------------------------------- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {accreditationData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-8 rounded-[2rem] bg-white border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all h-full flex flex-col items-center text-center">
                  {/* If image exists, use it */}
                  {item.imageSrc ? (
                    <div className="mb-6 group-hover:scale-110 transition-transform w-20 h-20 relative">
                      <Image
                        src={`https://biomedical.edu.np${item.icon}`}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl h-20 w-20 mb-6 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                  )}

                  <h3
                    className={`${graduateFont.className} text-xl font-semibold mb-2`}
                  >
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>

                  <div
                    className={`absolute inset-0 rounded-[2rem] bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* -------------------------------
                PARTNER LOGOS
        -------------------------------- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-center text-gray-400 mb-8 uppercase tracking-[0.2em] text-sm">
            Research & Publications
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-2xl bg-white border border-gray-200 hover:border-[#0d4e92]/30 hover:shadow-lg transition-all"
              >
                <div className="text-gray-600 text-sm font-medium">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

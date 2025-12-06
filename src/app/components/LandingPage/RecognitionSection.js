"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Shield, Star } from "lucide-react";
import Image from "next/image";
import { graduateFont } from "@/font";

export default function RecognitionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const recognitions = [
    {
      imageSrc: "/PU.png", // ⭐ first one uses image
      name: "Purbanchal University",
      description: "Affiliated",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Shield,
      name: "UGC-QAA Certified",
      description: "First in Kathmandu Valley",
      gradient: "from-green-500 to-emerald-400",
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

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {recognitions.map((item, index) => {
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
                  {/* ⭐ If image exists, show image */}
                  {item.imageSrc ? (
                    <div className="mb-6 group-hover:scale-110 transition-transform w-20 h-20 relative">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  ) : (
                    <div
                      className={`rounded-2xl h-20 w-20 mb-4 bg-gradient-to-br ${item.gradient} flex items-center justify-center transition-transform group-hover:scale-110`}
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
      </div>
    </section>
  );
}

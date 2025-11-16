"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";

const RecognitionSection = () => {
  const ref = useRef();
  const isInternaltimeView = useInView(ref, { once: true, margin: "-100px" });

  const freq = [
    {
      icon: CorporateFareOutlinedIcon,
      name: "Purvanchal University",
      description: "Affiliated",
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: EmojiEventsOutlinedIcon,
      name: "ISO 9001:2015",
      description: "Certified",
      gradient: "from-purple-400 to-pink-400",
    },
    {
      icon: ShieldOutlinedIcon,
      name: "Government Approved",
      description: "Ministry of Education",
      gradient: "from-green-500 to-emerald-300",
    },
    {
      icon: StarBorderRoundedIcon,
      name: "International Standards",
      description: "Accredited Programs",
      gradient: "from-orange-500 to-amber-400",
    },
  ];

  return (
    <section
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInternaltimeView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 lg:mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold py-1">
          Accredited
          <br />
          <span className="bg-gradient-to-r from-cyan-900 to-blue-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>
        <p className="p-2 m-2 text-lg md:text-xl text-gray-500">
          Recognized by leading national and international educational bodies.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 md:px-12 lg:px-20">
        {freq.map((start, index) => {
          const Icon = start.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInternaltimeView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-64 border border-gray-200 rounded-3xl flex flex-col items-center justify-center hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer p-6 bg-white"
            >
              <div
                className={`rounded-2xl h-20 w-20 mb-4 bg-gradient-to-br ${start.gradient} flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                <Icon sx={{ fontSize: 40, color: "#fff" }} />
              </div>

              <h2 className="text-xl font-semibold text-center">
                {start.name}
              </h2>
              <h3 className="mt-2 text-gray-500 text-md text-center">
                {start.description}
              </h3>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInternaltimeView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20"
      >
        <h1 className="text-center text-gray-400 tracking-wide">
          INDUSTRY PARTNERS
        </h1>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-6 md:px-20">
          {[
            "Partner 1",
            "Partner 2",
            "Partner 3",
            "Partner 4",
            "Partner 5",
          ].map((start, index) => (
            <div
              key={index}
              className="border p-4 border-gray-300 rounded-xl hover:shadow-lg transition"
            >
              <h1 className="text-center text-md text-gray-600">{start}</h1>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default RecognitionSection;

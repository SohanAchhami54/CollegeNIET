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
        <h1 className="text-6xl py-1 ">
          Accredited
          <br />
          <span className="bg-gradient-to-r from-cyan-900 to-blue-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </h1>
        <p className="p-2 m-2 text-xl text-gray-500">
          Recognized by leading national and international educational bodies.
        </p>
      </motion.div>

      <div className="flex justify-around ">
        {freq.map((start, index) => {
          const Icon = start.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInternaltimeView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-60 w-70  group-relative border  border-gray-300 rounded-4xl  flex flex-col items-center justify-center  hover:bg-black/10 transition-all group"
            >
              <div className="relative h-full w-full mt-6 flex flex-col items-center justify-center">
                <div
                  className={`border-0 rounded-2xl h-20 w-20 mb-2 bg-gradient-to-br ${start.gradient} flex items-center justify-center group-hover:scale-110 transition-transform `}
                >
                  <Icon sx={{ height: 50, width: 35 }} />
                </div>
                <h2 className="mt-2 text-xl">{start.name}</h2>
                <h3 className="mt-2 mb-4 text-gray-500 text-md">
                  {start.description}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInternaltimeView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-15"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-gray-400">INDUSTRY PARTNERS</h1>
        </div>
        <div className="mt-8 px-50 gap-1 flex flex-row justify-around">
          {[
            "Partner 1",
            "Partner 2",
            "Partner 3",
            "Partner 4",
            "Partner 5",
          ].map((start, index) => (
            <div
              key={index}
              className="border px-10 py-4 border-gray-300 rounded-2xl hover:shadow-xl"
            >
              <h1 className="text-md text-gray-300">{start}</h1>
            </div>
          ))}
        </div>
      </motion.div>
      <div></div>
    </section>
  );
};

export default RecognitionSection;

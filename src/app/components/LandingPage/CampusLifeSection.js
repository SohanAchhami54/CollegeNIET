"use client";
import React, { useRef, useState } from "react";
import CampusLife from "next/image";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useInView, motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const CampusLifeSection = () => {
  const ref = useRef(null);
  const isInternalTimeView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testData = [
    {
      name: "Priya Sharma",
      role: "AI Engineering, 2025",
      quote:
        "NIET provided hands-on experience in ML and robotics. The industry connections helped me secure my dream internship at a leading AI firm.",
      gradient: "from-[#0b4c78] to-cyan-400",
    },
    {
      name: "Rohan Thapa",
      role: "Biomedical Engineering, 2024",
      quote:
        "The state-of-the-art biomedical labs and research opportunities gave me the skills to innovate in healthcare technology. Best decision ever.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      name: "Anjali Patel",
      role: "Computer Engineering, 2025",
      quote:
        "The faculty's real-world experience and personalized mentorship helped me land multiple job offers even before graduation. NIET changed my life.",
      gradient: "from-emerald-500 to-teal-400",
    },
    {
      name: "Sanjay Kumar",
      role: "AI Engineering, 2024",
      quote:
        "The AI lab facilities are world-class. I published my first research paper in my second year thanks to the support from NIET faculty.",
      gradient: "from-blue-500 to-indigo-400",
    },
    {
      name: "Nikita Rai",
      role: "Biomedical Engineering, 2025",
      quote:
        "NIET's internship program connected me with top hospitals. I'm now working on designing next-gen diagnostic equipment.",
      gradient: "from-rose-500 to-orange-400",
    },
    {
      name: "Arjun Bhattarai",
      role: "Computer Engineering, 2024",
      quote:
        "The curriculum is perfectly aligned with industry needs. I started my own tech startup in final year with guidance from NIET mentors.",
      gradient: "from-violet-500 to-purple-400",
    },
    {
      name: "Shreya Adhikari",
      role: "AI Engineering, 2025",
      quote:
        "From hackathons to research projects, NIET gave me countless opportunities to grow. Now I'm working on AI solutions for agriculture.",
      gradient: "from-cyan-500 to-blue-400",
    },
    {
      name: "Bibek Shrestha",
      role: "Biomedical Engineering, 2024",
      quote:
        "The hands-on training in medical device design prepared me for real-world challenges. NIET's industry partnerships made all the difference.",
      gradient: "from-amber-500 to-yellow-400",
    },
    {
      name: "Kritika Tamang",
      role: "Computer Engineering, 2025",
      quote:
        "Small class sizes meant personalized attention from professors. I mastered cloud computing and cybersecurity through NIET's excellent program.",
      gradient: "from-pink-500 to-fuchsia-400",
    },
    {
      name: "Manish Karki",
      role: "AI Engineering, 2024",
      quote:
        "NIET's focus on practical skills over theory helped me build a strong portfolio. Graduated with 3 job offers from top tech companies.",
      gradient: "from-teal-500 to-green-400",
    },
  ];

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testData.length - itemsPerView);

  const nextData = () =>
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prevData = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div ref={ref}>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInternalTimeView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center mt-11"
      >
        <h1 className="text-6xl">
          Experience
          <br />
          <span className="items-center ml-7 bg-gradient-to-r from-[#0b4c78] via-purple-500 to-pink-500 bg-clip-text text-transparent">
            NIET Life
          </span>
        </h1>
        <p className="m-3 p-3 text-xl text-gray-500">
          A vibrant community of innovators,makers and future leaders.
        </p>
      </motion.div>

      {/* Video + Features */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ml-12 mb-16">
        {/* Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInternalTimeView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative w-full h-80 sm:h-96 lg:h-[500px] p-6 "
        >
          <CampusLife
            src="/pexels.jpeg"
            alt="CmapusSection"
            fill
            className=" object-cover rounded-4xl"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button>
              <PlayCircleFilledWhiteIcon
                sx={{
                  height: 80,
                  width: 80,
                  color: "white",
                  transition: "transform 0.4s ease",
                  " &:hover": { transform: "scale(1.1)" },
                }}
              />
            </button>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInternalTimeView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center gap-6 mt-10 lg:mt-20 lg:mr-10"
        >
          {[
            {
              icon: WorkspacePremiumOutlinedIcon,
              title: "Technical Competitions",
              desc: "Hackathons, robotics contests, and innovation challenges",
            },
            {
              icon: LocalCafeOutlinedIcon,
              title: "Innovation Hub",
              desc: "24/7 coworking space for student projects and startups",
            },
            {
              icon: FitnessCenterOutlinedIcon,
              title: "Sports & Recreation",
              desc: "Modern gym, sports facilities, and wellness programs",
            },
          ].map((start, index) => {
            const Icon = start.icon;
            return (
              <div
                key={index}
                className="flex items-center border rounded-2xl border-gray-200 p-3 m-3 hover:shadow-2xl transition-all group "
              >
                <div className="w-15 h-15 m-2 p-2 flex items-center justify-center border-0 rounded-2xl bg-gradient-to-br from-[#0b4c78] to-cyan-400 group-hover:scale-110 transition-transform">
                  <Icon sx={{ m: 3, height: 30, width: 30, color: "white" }} />
                </div>
                <div>
                  <h3 className="m-0.5 p-0.5 text-xl">{start.title}</h3>
                  <p className="ml-1 text-gray-500">{start.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Testimonials */}
      <div className="text-4xl text-bold flex items-center justify-center">
        <h1 className="mb-5">What Our Students Say</h1>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 gap-4"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testData.map((start, index) => (
              <div key={index} className="w-full lg:w-1/3 flex-shrink-0">
                <div
                  className="flex-none flex flex-col m-2 p-4 border rounded-2xl relative z-10 bg-white shadow-lg bg-gradient-to-br from-gray-900 to-gray-800"
                  style={{
                    minWidth: `calc((100% - ${
                      (itemsPerView - 1) * 16
                    }px) / ${itemsPerView})`,
                    height: "300px", // Set fixed height
                  }}
                >
                  <FormatQuoteIcon className="text-gray-300 mb-3 " />
                  <p className="text-gray-200 mb-2 m-6">"{start.quote}"</p>
                  <div className="mt-4 p-2 flex flex-row">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br p-2 m-2 ${start.gradient}`}
                    ></div>
                    <div className="pt-1">
                      <h2 className="font-bold text-gray-200">{start.name}</h2>
                      <p className="text-gray-400 text-sm">{start.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-row items-center justify-center gap-4 mt-6">
          <button
            onClick={prevData}
            disabled={currentIndex === 0}
            className={`border rounded-4xl p-3 m-3 border-gray-300 ${
              currentIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-blue-500 hover:bg-blue-50"
            } hover:shadow-lg transition hover:border-blue-500`}
          >
            <ArrowBackIosIcon sx={{ height: "20px", paddingLeft: "2px" }} />
          </button>
          <button
            onClick={nextData}
            disabled={currentIndex >= maxIndex}
            className={`border rounded-4xl p-3 m-2 border-gray-300     ${
              currentIndex >= maxIndex
                ? "opacity-30 cursor-not-allowed"
                : "hover:border-blue-500 hover:bg-blue-50"
            } hover:shadow-lg transition hover:border-blue-500`}
          >
            <ArrowForwardIosIcon sx={{ height: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampusLifeSection;

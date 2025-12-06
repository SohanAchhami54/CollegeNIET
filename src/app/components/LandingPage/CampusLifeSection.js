"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import LocalCafeOutlinedIcon from "@mui/icons-material/LocalCafeOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import { useInView, motion } from "framer-motion";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { graduateFont } from "@/font";

const CampusLifeSection = () => {
  const ref = useRef(null);
  const isVisible = useInView(ref, { once: true, margin: "-100px" });
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

  const nextData = () => setCurrentIndex((p) => Math.min(p + 1, maxIndex));
  const prevData = () => setCurrentIndex((p) => Math.max(p - 1, 0));

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#0d4e92]/5 to-white py-16 lg:py-28"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center px-4"
      >
        <h1
          className={`${graduateFont.className} text-4xl lg:text-6xl font-bold mb-4`}
        >
          Experience
          <br />
          <span className="bg-gradient-to-r from-[#0b4c78] via-purple-500 to-pink-500 bg-clip-text text-transparent">
            NIET Life
          </span>
        </h1>

        <p className="text-lg lg:text-xl text-gray-600 max-w-xl mx-auto">
          A vibrant community of innovators, makers, and future leaders.
        </p>
      </motion.div>

      {/* VIDEO + FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 m-0 lg:m-15 lg:px-12 mt-16">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden group"
        >
          <Image
            src="/pexels.jpg"
            alt="Campus Life"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircleFilledWhiteIcon
              sx={{
                width: 90,
                height: 90,
                color: "white",
                filter: "drop-shadow(0 0 12px rgba(0,0,0,0.5))",
              }}
            />
          </div>
        </motion.div>

        {/* FEATURES LIST */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6 justify-center"
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
            {
              icon: PeopleAltOutlinedIcon,
              title: "Student Clubs",
              desc: "Active student organizations and cultural activities",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all"
              >
                <div className="min-w-16 min-h-16 rounded-2xl bg-gradient-to-br from-[#0b4c78] to-cyan-400 flex items-center justify-center text-white">
                  <Icon sx={{ width: 30, height: 30, color: "white" }} />
                </div>

                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* TESTIMONIAL HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${graduateFont.className} text-center text-3xl lg:text-4xl mt-20`}
      >
        What Our Students Say
      </motion.h2>

      {/* TESTIMONIAL CAROUSEL */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mt-10 px-4 lg:px-12"
      >
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {testData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="min-w-[80%] sm:min-w-[50%] lg:min-w-[33%] p-6 rounded-3xl bg-gray-900 text-white relative overflow-hidden"
              >
                <div
                  className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.gradient} opacity-20 blur-2xl`}
                ></div>

                <FormatQuoteIcon className="text-white/30 mb-4" />

                <p className="text-white/90 leading-relaxed mb-6">
                  {item.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient}`}
                  ></div>
                  <div>
                    <h4 className="text-white">{item.name}</h4>
                    <p className="text-white/50 text-sm">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CAROUSEL BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center gap-4 mt-6"
        >
          <button
            onClick={prevData}
            disabled={currentIndex === 0}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center disabled:opacity-40"
          >
            <ArrowBackIosIcon fontSize="small" />
          </button>

          <button
            onClick={nextData}
            disabled={currentIndex >= maxIndex}
            className="w-12 h-12 rounded-full bg-white border border-gray-300 flex items-center justify-center disabled:opacity-40"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </motion.div>

        {/* PROGRESS INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-4 text-gray-500 text-sm"
        >
          Showing {currentIndex + 1}-
          {Math.min(currentIndex + itemsPerView, testData.length)} of{" "}
          {testData.length}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CampusLifeSection;

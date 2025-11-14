// "use client";
// import React from "react";

// const timeline = [
//   { year: "2005", title: "Foundation & Pioneer Status" },
//   { year: "2008", title: "Global Partnerships" },
//   { year: "2012", title: "Industry Integration" },
//   { year: "2018", title: "Research Excellence" },
//   { year: "2025", title: "Expansion into AI & Computing" },
// ];

// export default function TimelineSection() {
//   return (
//     <section className="py-20 bg-white px-6">
//       <h2 className="text-center text-4xl font-bold mb-10 text-gray-900">
//         Our Journey
//       </h2>
//       <div className="max-w-3xl mx-auto space-y-8 border-l-2 border-blue-600 pl-6">
//         {timeline.map((item, i) => (
//           <div key={i}>
//             <h3 className="text-xl font-semibold text-blue-700">{item.year}</h3>
//             <p className="text-gray-700">{item.title}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";
// import * as React from "react";
// import { Calendar } from "lucide-react";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

// const timeline = [
//   {
//     year: "2005",
//     title: "Foundation & Pioneer Status",
//     description: "Established as one of Nepal’s first IT colleges to provide international degree programs.",
//     keywords: "Foundation, Education, Innovation",
//   },
//   {
//     year: "2008",
//     title: "Global Partnerships",
//     description: "Collaborated with universities abroad to enhance academic exchange and research exposure.",
//     keywords: "Collaboration, Growth, Expansion",
//   },
//   {
//     year: "2012",
//     title: "Industry Integration",
//     description: "Started internship programs and industry tie-ups to bridge the gap between theory and practice.",
//     keywords: "Industry, Internship, Skills",
//   },
//   {
//     year: "2018",
//     title: "Research Excellence",
//     description: "Introduced advanced research and development labs focusing on emerging technologies.",
//     keywords: "Research, Technology, Innovation",
//   },
//   {
//     year: "2025",
//     title: "Expansion into AI & Computing",
//     description: "Leading projects in Artificial Intelligence, Data Science, and Smart Computing Systems.",
//     keywords: "AI, Data Science, Computing",
//   },
// ];

// export default function TimelineSection() {
//   const timelineRef = useRef(null);
//   const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

//   const iconColors = [
//     "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
//     "linear-gradient(to bottom right, #3b82f6, #6366f1)",
//     "linear-gradient(to bottom right, #6366f1, #a855f7)",
//     "linear-gradient(to bottom right, #a855f7, #ec4899)",
//     "linear-gradient(to bottom right, #ec4899, #f43f5e)",
//   ];

//   const contentColors = [
//     { background: "#f0f9ff", border: "#e0f2fe" },
//     { background: "#eff6ff", border: "#dbeafe" },
//     { background: "#f5f3ff", border: "#ede9fe" },
//     { background: "#faf5ff", border: "#f3e8ff" },
//     { background: "#fdf2f8", border: "#fce7f3" },
//   ];

//   return (
//     <section ref={timelineRef} className="py-20 lg:py-32 bg-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 lg:mb-20"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
//             <Calendar className="h-4 w-4 text-[#0b4c78]" />
//             <span className="text-[#0b4c78] text-sm font-medium">Our Journey</span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight">
//             Journey Timeline
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Two decades of excellence in education and innovation
//           </p>
//         </motion.div>

//         <VerticalTimeline lineColor="#3b82f6">
//           {timeline.map((milestone, index) => {
//             const isLeft = index % 2 === 0;

//             return (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//               >
//                 <VerticalTimelineElement
//                   position={isLeft ? "right" : "left"}
//                   contentStyle={{
//                     background: contentColors[index % contentColors.length].background,
//                     color: "#333",
//                     border: `2px solid ${contentColors[index % contentColors.length].border}`,
//                     borderRadius: "1rem",
//                     boxShadow:
//                       "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
//                     padding: "1.5rem",
//                   }}
//                   contentArrowStyle={{
//                     borderRight: `7px solid ${contentColors[index % contentColors.length].background}`,
//                   }}
//                   date={milestone.year}
//                   dateClassName="text-gray-600 font-semibold text-xl lg:text-lg"
//                   iconStyle={{
//                     background: iconColors[index % iconColors.length],
//                     color: "#fff",
//                     boxShadow:
//                       "0 0 0 4px white, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
//                   }}
//                   icon={<Calendar className="h-5 w-5" />}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                     {milestone.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed mb-4">
//                     {milestone.description}
//                   </p>
//                   <div className="flex flex-wrap gap-2">
//                     {milestone.keywords.split(", ").map((keyword, i) => (
//                       <span
//                         key={i}
//                         className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
//                       >
//                         {keyword}
//                       </span>
//                     ))}
//                   </div>
//                 </VerticalTimelineElement>
//               </motion.div>
//             );
//           })}
//         </VerticalTimeline>
//       </div>
//     </section>
//   );
// }


// 

"use client";
import React from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Divider,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const timeline = [
  {
    year: "2005",
    title: "Foundation & Pioneer Status",
    description:
      "Established as one of Nepal’s first IT colleges to provide international degree programs.",
    keywords: "Foundation, Education, Innovation",
  },
  {
    year: "2008",
    title: "Global Partnerships",
    description:
      "Collaborated with universities abroad to enhance academic exchange and research exposure.",
    keywords: "Collaboration, Growth, Expansion",
  },
  {
    year: "2012",
    title: "Industry Integration",
    description:
      "Started internship programs and industry tie-ups to bridge the gap between theory and practice.",
    keywords: "Industry, Internship, Skills",
  },
  {
    year: "2018",
    title: "Research Excellence",
    description:
      "Introduced advanced research and development labs focusing on emerging technologies.",
    keywords: "Research, Technology, Innovation",
  },
  {
    year: "2025",
    title: "Expansion into AI & Computing",
    description:
      "Leading projects in Artificial Intelligence, Data Science, and Smart Computing Systems.",
    keywords: "AI, Data Science, Computing",
  },
];

export default function TimelineSection() {
  const iconColors = [
    "from-cyan-500 to-blue-500",
    "from-blue-500 to-indigo-500",
    "from-indigo-500 to-purple-500",
    "from-purple-500 to-pink-500",
    "from-pink-500 to-rose-500",
  ];

  const isSmall = useMediaQuery("(max-width: 900px)");

  return (
    <Box component="section" className="py-20 bg-white">
      <Container maxWidth="lg" className="px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <Calendar className="h-4 w-4 text-[#0b4c78]" />
            <span className="text-[#0b4c78] text-sm font-medium">
              Our Journey
            </span>
          </div>
          <Typography variant="h4" className="font-bold text-gray-900 mb-3">
            Journey Timeline
          </Typography>
          <div className="flex justify-center">
          <Typography variant="body1" className="text-gray-600 max-w-2xl mx-auto px-6 text-center">
            Two decades of excellence in education and innovation
          </Typography>
          </div>
        </motion.div>

        {/* Timeline Line */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const gradient = iconColors[index % iconColors.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`flex flex-col sm:flex-row items-center ${
                    isLeft ? "sm:justify-start" : "sm:justify-end"
                  }`}
                >
                  {/* Left Side (Content) */}
                  <div
                    className={`sm:w-1/2 ${
                      isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
                    }`}
                  >
                    <Paper
                      elevation={3}
                      className="p-6 rounded-2xl bg-white border border-blue-50 shadow-md"
                    >
                      <Typography
                        variant="h6"
                        className="text-blue-700 font-semibold"
                      >
                        {item.year}
                      </Typography>
                      <Divider className="my-3" />
                      <Typography
                        variant="subtitle1"
                        className="font-bold text-gray-900"
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        className="text-gray-600 mt-2 mb-4"
                      >
                        {item.description}
                      </Typography>

                      <div
                        className={`flex flex-wrap gap-2 ${
                          isLeft ? "justify-end" : "justify-start"
                        }`}
                      >
                        {item.keywords.split(", ").map((kw, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </Paper>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden sm:flex flex-col items-center z-10">
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        background: `linear-gradient(to bottom right, ${gradient.replace(
                          "from-",
                          ""
                        )})`,
                        border: "3px solid white",
                        boxShadow: "0 0 8px rgba(0,0,0,0.2)",
                      }}
                    >
                      <Calendar size={16} />
                    </Avatar>
                    <div className="h-12 w-0.5 bg-blue-100"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Box>
  );
}



// "use client";
// import React from "react";
// import {
//   Box,
//   Container,
//   Paper,
//   Typography,
//   Divider,
//   Avatar,
//   useMediaQuery,
// } from "@mui/material";
// import { motion } from "framer-motion";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import { graduateFont } from "@/font";
// import { robotoFont } from "@/font";

// const timeline = [
//   {
//     year: "2005",
//     title: "Foundation & Pioneer Status",
//     description:
//       "Established as one of Nepal’s first IT colleges to provide international degree programs.",
//     keywords: "Foundation, Education, Innovation",
//   },
//   {
//     year: "2008",
//     title: "Global Partnerships",
//     description:
//       "Collaborated with universities abroad to enhance academic exchange and research exposure.",
//     keywords: "Collaboration, Growth, Expansion",
//   },
//   {
//     year: "2012",
//     title: "Industry Integration",
//     description:
//       "Started internship programs and industry tie-ups to bridge the gap between theory and practice.",
//     keywords: "Industry, Internship, Skills",
//   },
//   {
//     year: "2018",
//     title: "Research Excellence",
//     description:
//       "Introduced advanced research and development labs focusing on emerging technologies.",
//     keywords: "Research, Technology, Innovation",
//   },
//   {
//     year: "2025",
//     title: "Expansion into AI & Computing",
//     description:
//       "Leading projects in Artificial Intelligence, Data Science, and Smart Computing Systems.",
//     keywords: "AI, Data Science, Computing",
//   },
// ];

// export default function TimelineSection() {
//   const iconColors = [
//     "from-cyan-500 to-blue-500",
//     "from-blue-500 to-indigo-500",
//     "from-indigo-500 to-purple-500",
//     "from-purple-500 to-pink-500",
//     "from-pink-500 to-rose-500",
//   ];

//   const isSmall = useMediaQuery("(max-width: 900px)");

//   return (
//     <Box component="section" className="py-20 bg-white">
//       <Container maxWidth="lg" className="px-6">

//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-4">
//             <CalendarMonthIcon className="h-4 w-4 text-[#0b4c78]" fontSize="small" />
//             <span className={`text-[#0b4c78] text-sm font-medium ${robotoFont.className}`}>Our Journey</span>
//           </div>

//           <div className={`flex justify-center ${graduateFont.className}`}>

//           <Typography variant="h4" className={`font-bold text-gray-900 mb-3`}>
//             Journey Timeline
//           </Typography>
//           </div>

//           <div className={`flex justify-center ${robotoFont.className}`}>
//             <Typography
//               variant="body1"
//               className={`text-gray-600 max-w-2xl mx-auto px-6 text-center ${robotoFont.className}`}
//             >
//               Two decades of excellence in education and innovation
//             </Typography>
//           </div>
//         </motion.div>

//         {/* Timeline container */}
//         <div className="relative max-w-5xl mx-auto">

//           <div className="absolute left-1/2 top-0 h-full w-1 bg-blue-200 -translate-x-1/2 hidden sm:block"></div>

//           <div className="space-y-12">

//             {timeline.map((item, index) => {
//               const isLeft = index % 2 === 0;
//               const gradient = iconColors[index % iconColors.length];

//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 60 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.15 }}
//                   viewport={{ once: true }}
//                   className={`flex flex-col sm:flex-row items-center ${
//                     isLeft ? "sm:justify-start" : "sm:justify-end"
//                   }`}
//                 >
//                   {/* Card */}
//                   <div
//                     className={`sm:w-1/2 ${
//                       isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12"
//                     }`}
//                   >
//                     <Paper
//                       elevation={3}
//                       className="p-6 rounded-2xl bg-white border border-blue-50 shadow-md"
//                     >
//                       <Typography
//                         variant="h6"
//                         className="text-blue-700 font-semibold"
//                       >
//                         {item.year}
//                       </Typography>

//                       <Divider className="my-3" />

//                       <Typography
//                         variant="subtitle1"
//                         className="font-bold text-gray-900"
//                       >
//                         {item.title}
//                       </Typography>

//                       <Typography
//                         variant="body2"
//                         className="text-gray-600 mt-2 mb-4"
//                       >
//                         {item.description}
//                       </Typography>

//                       <div
//                         className={`flex flex-wrap gap-2 ${
//                           isLeft ? "justify-end" : "justify-start"
//                         }`}
//                       >
//                         {item.keywords.split(", ").map((kw, i) => (
//                           <span
//                             key={i}
//                             className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
//                           >
//                             {kw}
//                           </span>
//                         ))}
//                       </div>
//                     </Paper>
//                   </div>

//                   <div className="hidden sm:flex flex-col items-center z-10 absolute left-1/2 -translate-x-1/2">
//                     <Avatar
//                       sx={{
//                         width: 48,
//                         height: 48,
//                         background: gradient === "from-cyan-500 to-blue-500" ? "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)" :
//                                    gradient === "from-blue-500 to-indigo-500" ? "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)" :
//                                    gradient === "from-indigo-500 to-purple-500" ? "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)" :
//                                    gradient === "from-purple-500 to-pink-500" ? "linear-gradient(135deg, #a855f7 0%, #ec4899 100%)" :
//                                    "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
//                         border: "4px solid white",
//                         boxShadow: "0 0 12px rgba(0,0,0,0.15)",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                       }}
//                     >
//                       <CalendarMonthIcon sx={{ color: "white", fontSize: 24 }} />
//                     </Avatar>

//                     <div className="h-12 w-0.5 bg-blue-100"></div>
//                   </div>
//                 </motion.div>
//               );
//             })}

//           </div>
//         </div>
//       </Container>
//     </Box>
//   );
// }


"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaRegCalendarAlt } from "react-icons/fa";

import { graduateFont } from "@/font";
import { robotoFont } from "@/font";

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

const iconGradients = [
  "linear-gradient(to bottom right, #06b6d4, #3b82f6)",
  "linear-gradient(to bottom right, #3b82f6, #6366f1)",
  "linear-gradient(to bottom right, #6366f1, #a855f7)",
  "linear-gradient(to bottom right, #a855f7, #ec4899)",
  "linear-gradient(to bottom right, #ec4899, #f43f5e)",
];

const contentColors = [
  { bg: "#f0f9ff", border: "#e0f2fe" },
  { bg: "#eff6ff", border: "#dbeafe" },
  { bg: "#f5f3ff", border: "#ede9fe" },
  { bg: "#faf5ff", border: "#f3e8ff" },
  { bg: "#fdf2f8", border: "#fce7f3" },
];

export default function TimelineSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      {/* Mobile styling override */}
      <style>{`
        @media (max-width: 1024px) {
          .vertical-timeline-element {
            margin-bottom: 40px !important;
          }
          .vertical-timeline-element-date {
            font-size: 1.4rem !important;
            font-weight: 600 !important;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <FaRegCalendarAlt className="h-4 w-4 text-[#0d4e92]" />
            <span className={`text-[#0d4e92] text-sm font-medium ${robotoFont.className}`}>
              Our Journey
            </span>
          </div>

          <h2
            className={`text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight ${graduateFont.className}`}
          >
            Journey Timeline
          </h2>

          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto ${robotoFont.className}`}
          >
            Two decades of excellence in education and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(14,165,233,0.4)">
          {timeline.map((item, index) => {
            const color = contentColors[index % contentColors.length];
            const iconBG = iconGradients[index % iconGradients.length];

            return (
              <VerticalTimelineElement
                key={index}
                position={index % 2 === 0 ? "right" : "left"}
                date={item.year}
                dateClassName={`text-gray-700 font-semibold ${robotoFont.className}`}
                iconStyle={{
                  background: iconBG,
                  color: "#fff",
                  boxShadow:
                    "0 0 0 4px white, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                }}
                icon={<FaRegCalendarAlt className="text-white h-5 w-5" />}
                contentStyle={{
                  background: color.bg,
                  border: `2px solid ${color.border}`,
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${color.bg}`,
                }}
              >
                <h3
                  className={`text-2xl font-bold text-gray-900 mb-2 ${graduate.className}`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-gray-700 leading-relaxed mb-4 ${robotoFont.className}`}
                >
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.keywords.split(", ").map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-200 transition-colors"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
}


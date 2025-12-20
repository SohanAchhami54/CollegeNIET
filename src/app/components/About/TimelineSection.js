"use client";
import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaRegCalendarAlt } from "react-icons/fa";
import { graduateFont, robotoFont } from "@/font";
import { useQueries } from "@tanstack/react-query";
import api from "@/Api/axios";

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
  const results = useQueries({
    queries: [
      {
        queryKey: ["aboutustimeline"],
        queryFn: () => api.get('website/journey-timeline/').then(res => res.data)
      },
      {
        queryKey: ["aboutustimelinecontent"],
        queryFn: () => api.get('website/journey-timeline/content/').then(res => res.data)
      }
    ]
  });

  const [aboutustimeline, aboutustimelinecontent] = results;

  // if (aboutustimeline.isLoading || aboutustimelinecontent.isLoading) return <p>Loading...</p>;
  // if (aboutustimeline.error || aboutustimelinecontent.error) return <p>Error: {aboutustimeline.error?.message || aboutustimelinecontent.error?.message}</p>;


  console.log('About Us Timeline Data:', aboutustimeline?.data);
  console.log('About Us Timeline Content Data:', aboutustimelinecontent?.data);
  // fallback if API fails or data empty
  const timelineData = aboutustimelinecontent.data && aboutustimelinecontent?.data.length > 0
    ? aboutustimelinecontent.data
    : [];

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
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <FaRegCalendarAlt className="h-4 w-4 text-[#0d4e92]" />
            <span className={`text-[#0d4e92] text-sm font-medium ${robotoFont.className}`}>Our Journey</span>
          </div>

          <h2 className={`text-4xl lg:text-5xl text-gray-900 mb-6 tracking-tight ${graduateFont.className}`}>
            {aboutustimeline?.data?.heading_line}
          </h2>

          <p className={`text-xl text-gray-600 max-w-2xl mx-auto ${robotoFont.className}`}>
            {aboutustimeline?.data?.support_text}
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor="rgba(14,165,233,0.4)">
        {timelineData?.map((item, index) => {
            const color = contentColors[index % contentColors.length];
            const iconBG = iconGradients[index % iconGradients.length];
            const tags = [item.tag_1, item.tag_2, item.tag_3].filter(Boolean);
            
            return (
            <VerticalTimelineElement
                key={item.id}
                position={index % 2 === 0 ? "right" : "left"}
                date={item.year}
                dateClassName={`text-gray-700 font-semibold ${robotoFont.className}`}
                iconStyle={{
                background: iconBG,
                color: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow:
                    "0 0 0 4px white, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)",
                }}
                icon={
                <img
                    src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${item.icon}`}
                    alt={item.heading}
                    className="w-6 h-6 object-contain"
                />
                }
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
                <h3 className={`text-2xl font-bold text-gray-900 mb-2 ${graduateFont.className}`}>
                {item.heading}
                </h3>

                <p className={`text-gray-700 leading-relaxed mb-4 ${robotoFont.className}`}>
                {item.support_text}
                </p>

                <div className="flex flex-wrap gap-2">
                    {tags?.map((tag, i) => (
                        <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium border border-gray-200"
                        >
                        {tag}
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


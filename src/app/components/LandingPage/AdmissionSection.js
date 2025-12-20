"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@mui/material";
import {
  FileText,
  PenTool,
  MessageSquare,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { graduateFont } from "@/font";
import api from "@/Api/axios";
import { useQueries } from "@tanstack/react-query";
import Image from "next/image";

export default function AdmissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const results = useQueries({
    queries: [
      {
        queryKey: ["admission_detail"],
        queryFn: () =>
          api.get("/website/journey-to-niet/").then((res) => res.data),
      },
      {
        queryKey: ["admission_detail_step"],
        queryFn: () =>
          api.get("/website/journey-to-niet/step/").then((res) => res.data),
      },
    ],
  });
  const [admission_detail, admission_detail_step] = results;
  // console.log("admission-detail:", admission_detail);
  // console.log("admission-detail-steps:", admission_detail_step?.data);

  const admissionstepsDetail = Array.isArray(admission_detail_step?.data)
    ? admission_detail_step.data
    : [];

  const steps = [
    {
      icon: FileText,
      title: "Apply Online",
      description:
        "Submit your application and documents through our streamlined portal.",
    },
    {
      icon: PenTool,
      title: "Entrance Exam",
      description:
        "Take the NIET exam covering math, science, and logical reasoning.",
    },
    {
      icon: MessageSquare,
      title: "Interview",
      description: "Discuss your goals with our admission committee.",
    },
    {
      icon: GraduationCap,
      title: "Enroll",
      description: "Complete enrollment and begin your engineering journey.",
    },
  ];

  return (
    <section
      id="admissions"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2
            className={`${graduateFont.className} text-4xl lg:text-6xl text-white mb-6 tracking-tight`}
          >
            {admission_detail?.data?.heading_line
              ?.split(" ")
              ?.slice(0, 3)
              .join(" ")}
            <br />
            <span className="text-cyan-300">
              {admission_detail?.data?.heading_line
                ?.split(" ")
                ?.slice(3)
                .join(" ")}
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            {admission_detail?.data?.support_text}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {admissionstepsDetail.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center z-10">
                  <span className="text-2xl text-white/60">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="relative p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all h-full">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Image
                      src={`https://biomedical.edu.np${step.icon}`}
                      alt={steps.heading || "icon"}
                      width={8}
                      height={8}
                      className="h-8 w-8 text-blue-600"
                    />
                  </div>

                  <h3
                    className={`${graduateFont.className} text-xl text-white mb-3`}
                  >
                    {step.heading}
                  </h3>
                  <p className="text-blue-100">{step.support_text}</p>
                </div>

                {/* Arrow Connector (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                    <ArrowRight className="h-6 w-6 text-white/30" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            size="large"
            className="group flex items-center justify-center shadow-2xl px-10 h-14 text-lg"
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "#0d4e92",
              borderRadius: "9999px",
              "&:hover": {
                backgroundColor: "#ebf8ff",
              },
            }}
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <p className="text-blue-100 mt-6 text-sm">
            Applications for {admission_detail?.data?.deadline} admission open •
            Early deadline: {admission_detail?.data?.intake_year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

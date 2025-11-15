"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Box, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const CTASection = () => {
  const ref = useRef();
  const isInternalTimeView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-950 text-white relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInternalTimeView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl lg:text-7xl text-white mb-8 tracking-tight leading-[1.1]">
            Ready to Start Your
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Engineering Journey?
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 500+ students building the future of technology.
            <br />
            <span>Applications for 2026 admission are now open.</span>
          </p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              sx={{
                backgroundColor: "white",
                borderRadius: "9999px",
                color: "#0b4c78",
                border: "1px solid #d1d5db",
                px: 2,
                fontWeight: "bold",
                height: 56,
                fontSize: "1.125rem",
                boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                textTransform: "none",
                display: "flex",
                alignItems: "center",

                "&:hover": {
                  backgroundColor: "#e0f2ff",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
                },
                "&:hover svg": {
                  transform: "translateX(4px)",
                },
              }}
            >
              Apply Now
              <ArrowRightAltIcon
                sx={{
                  ml: 2,
                  height: "20px",
                  width: "20px",
                  transition: "transform 0.3s ease",
                }}
              />
            </Button>

            <Button
              sx={{
                borderRadius: "9999px",
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                border: "2px solid white",
                color: "white",
                fontSize: "1.2rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                height: "3.5rem",

                textTransform: "none",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              <FileDownloadOutlinedIcon className="mr-3 " />
              Download Brochure
            </Button>

            <Button
              sx={{
                borderRadius: "9999px",
                backgroundColor: "rgba(255,255,255,0.2)",
                backdropFilter: "blur(12px)",
                border: "2px solid white",
                color: "white",
                fontSize: "1.2rem",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                height: "3.5rem",

                textTransform: "none",

                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.3)",
                },
              }}
            >
              <LocationOnSharpIcon sx={{ mr: 1, width: 20, height: 20 }} />
              Visit Campus
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opoacity: 0, y: 30 }}
          animate={isInternalTimeView ? { opacity: 1, y: 0 } : {}}
          transaction={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {[
            {
              icon: LocalPhoneOutlinedIcon,
              label: "Phone",
              value: "+977 9845301787",
              gradient: "form-blue-500 to-cyan-400",
            },
            {
              icon: EmailOutlinedIcon,
              label: "Email",
              value: "admissions@niet.edu.np",
              gradient: "from-purple-500 to-pink-400",
            },
            {
              icon: LocationOnOutlinedIcon,
              label: "Location",
              value: "Kathmandu, Nepal",
              gradient: "from-orange-500 to-amber-400",
            },
          ].map((start, index) => {
            const Icon = start.icon;
            return (
              <div
                key={index}
                className="relative p-8 rounded-[2rem] bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${start.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon sx={{ m: 3, height: 30, width: 30 }} />
                </div>
                <div className="text-blue-200 text-sm mb-2">{start.label}</div>
                <div className="text-white text-lg">{start.value}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

"use client";

import React from "react";
import { graduateFont, robotoFont } from "@/font";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";

import ApartmentIcon from "@mui/icons-material/Apartment";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

const containerOptions = {
  viewport: { once: true, amount: 0.25 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60, y: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60, y: 0, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] },
  },
};

export default function AccreditationSection() {
  return (
    <section className="py-40 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          {...containerOptions}
          className={`text-center mb-16 ${graduateFont.className}`}
        >
          <Box
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 ${robotoFont.className}`}
          >
            <MilitaryTechIcon className="text-[#0b4c78]" fontSize="small" />
            <Typography variant="body2" className={`text-[#0b4c78] ${robotoFont.className}`}>
              Accreditation & Partnerships
            </Typography>
          </Box>

          <Typography variant="h3" className={`text-gray-900 tracking-tight ${graduateFont.className}`}>
            Recognized Excellence
          </Typography>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 — slide from left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideLeft}
            {...containerOptions}
          >
            <Card
              elevation={0}
              className="rounded-2xl p-8 border border-gray-200 shadow-lg bg-white"
              sx={{ borderRadius: "2rem", boxShadow: "4", ":hover": { boxShadow: "8" } }}
            >
              <CardContent className="p-0">
                <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0b4c78] to-cyan-500 flex items-center justify-center mb-6">
                  <ApartmentIcon className="text-white" fontSize="large" />
                </Box>

                <Typography variant="h5" className="text-gray-900 mb-4">
                  <span className={`${graduateFont.className}`}>
                  Purbanchal University
                  </span>
                </Typography>

                <Typography className="text-gray-600 leading-relaxed">
                   <span className={`${robotoFont.className}`}>
                  NIET is affiliated with Purbanchal University for all BE and BTech programs...
                  </span>
                 
                </Typography>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 — slide from right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideRight}
            {...containerOptions}
          >
            <Card
              elevation={0}
              className="rounded-2xl p-8 border border-gray-200 shadow-xl bg-white"
              sx={{ borderRadius: "2rem", boxShadow: "4", ":hover": { boxShadow: "8" } }}
            >
              <CardContent className="p-0">
                <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <MilitaryTechIcon className="text-white" fontSize="large" />
                </Box>

                <Typography variant="h5" className="text-gray-900 mb-4">
                  <span className={`${graduateFont.className}`}>
                  USC-GAA Accredited
                  </span>
                </Typography>

                <Typography className="text-gray-600 leading-relaxed">
                   <span className={`${robotoFont.className}`}>
                  NIET maintains global standards in engineering education...
                  </span>
                  
                </Typography>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

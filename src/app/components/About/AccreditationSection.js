"use client";

import React from "react";
import { graduateFont, robotoFont } from "@/font";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

  {/* Card 1 — slide from left */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideLeft}
    {...containerOptions}
  >
    <div className="h-full">

      <Card
        elevation={0}
        className="rounded-2xl p-8 border border-gray-200 shadow-lg bg-white h-full flex flex-col"
        sx={{ borderRadius: "2rem", boxShadow: "4", ":hover": { boxShadow: "8" } }}
      >
        <CardContent className="p-0 flex flex-col flex-1">
         <div className="w-16 h-16 mb-6 relative">
        <Image
            src="/PU2.png" 
            alt="Card 1"
            fill
            className="object-cover rounded-2xl"
        />
        </div>

          <Typography variant="h5" className="text-gray-900 mb-4">
            <span className={`${graduateFont.className}`}>
              Purbanchal University
            </span>
          </Typography>

          <Typography className="text-gray-600 leading-relaxed">
            <span className={`${robotoFont.className}`}>
              NIET is affiliated with Purbanchal University for all BE and BTech Programs. 
              Our programs meet the rigorous standards set by Purbanchal University, 
              ensuring quality education and recognized degrees.
            </span>
          </Typography>
        </CardContent>
      </Card>

    </div>
  </motion.div>

  {/* Card 2 — slide from right */}
  <motion.div
    initial="hidden"
    whileInView="visible"
    variants={slideRight}
    {...containerOptions}
  >
    <div className="h-full">

      <Card
        elevation={0}
        className="rounded-2xl p-8 border border-gray-200 shadow-xl bg-white h-full flex flex-col"
        sx={{ borderRadius: "2rem", boxShadow: "4", ":hover": { boxShadow: "8" } }}
      >
        <CardContent className="p-0 flex flex-col flex-1">
              <div className="w-16 h-16 mb-6 relative">
            <Image 
              src="/UGC.png" 
              alt="Card 1" 
              fill
              className="object-cover rounded-2xl" 
            />
          </div>

          <Typography variant="h5" className="text-gray-900 mb-4">
            <span className={`${graduateFont.className}`}>
              USC-GAA Accredited
            </span>
          </Typography>

          <Typography className="text-gray-600 leading-relaxed">
            <span className={`${robotoFont.className}`}>
              NIET is the first affiliated college in Nepal, first among 
              Purbanchal University colleges, and first Engineering College 
              in Kathmandu Valley to receive QAA Institutional Accreditation 
              Certificate from UGC Nepal. This recognition validates our 
              commitment to maintaining the highest standards in engineering education.
            </span>
          </Typography>
        </CardContent>
      </Card>

    </div>
  </motion.div>

</div>

      </div>
    </section>
  );
}

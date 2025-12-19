"use client";

import React from "react";
import { graduateFont, robotoFont } from "@/font";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import api from "@/Api/axios";
import { useQueries } from "@tanstack/react-query"; 

const containerOptions = {
  viewport: { once: true, amount: 0.25 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

const slideVariants = {
  left: {
    hidden: { opacity: 0, x: -60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.2 } },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: "blur(4px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 1.2 } },
  },
};

// Extract only text after the comma
const extractDescription = (text) => {
  if (!text) return "";
  const parts = text.split(",");
  return parts.length > 1 ? parts.slice(1).join(",").trim() : text;
};

export default function AccreditationSection() {

  const results = useQueries({
    queries: [
      {
        queryKey: ["accreditation_partnerships"],
        queryFn: () =>
          api.get("website/aboutus-accredition-partnership/").then((res) => res.data),
      },
    ],
  });

  const [accreditation_partnerships] = results;

  if (accreditation_partnerships.isLoading) return <p>Loading...</p>;
  if (accreditation_partnerships.error) return <p>Error loading data</p>;

  const items = accreditation_partnerships.data || [];

  

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
          <Box className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <MilitaryTechIcon className="text-[#0b4c78]" fontSize="small" />
            <Typography variant="body2" className={robotoFont.className}>
              Accreditation & Partnerships
            </Typography>
          </Box>

          <Typography variant="h3" className="text-gray-900 tracking-tight">
            Recognized Excellence
          </Typography>
        </motion.div>

        {/* Dynamic Cards from API */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial="hidden"
              whileInView="visible"
              variants={slideVariants[index % 2 === 0 ? "left" : "right"]}
              {...containerOptions}
            >
              <Card
                elevation={0}
                className="rounded-2xl p-8 border border-gray-200 shadow-lg bg-white h-full"
                sx={{
                  borderRadius: "2rem",
                  boxShadow: "4",
                  ":hover": { boxShadow: "8" },
                }}
              >
                <CardContent className="p-0">
                  
                  {/* Icon */}
                  <div className="w-20 h-20 mb-6 relative">
                    <Image
                      src={`https://biomedical.edu.np${item.icon}`}
                      alt={item.heading}
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Heading */}
                  <Typography variant="h5" className="text-gray-900 mb-4">
                    <span className={graduateFont.className}>{item.heading}</span>
                  </Typography>

                  {/* Description after comma only */}
                  <Typography className="text-gray-600 leading-relaxed">
                    <span className={robotoFont.className}>
                      {extractDescription(item.support_text)}
                    </span>
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

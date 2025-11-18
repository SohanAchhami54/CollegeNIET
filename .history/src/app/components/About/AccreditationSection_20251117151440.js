"use client";

import React from "react";
import { graduateFont, robotoFont } from "@/font";
import {
  Box,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

import ApartmentIcon from "@mui/icons-material/Apartment";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

export default function AccreditationSection() {
  return (
    <section className="py-40 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className={`text-center mb-16 ${graduateFont.className} `}>
          <Box className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 mb-6 ${robotoFont.className}  `}>
            <MilitaryTechIcon className="text-[#0b4c78]" fontSize="small" />
            <Typography variant="body2" className={`text-[#0b4c78] ${robotoFont.className} `}>
              Accreditation & Partnerships
            </Typography>
          </Box>

          <Typography
            variant="h3"
            className={`text-gray-900 tracking-tight ${graduateFont.className}`}
          >
            Recognized Excellence
          </Typography>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* Card 1 */}
          <Card
            elevation={0}
            className="rounded-2xl p-8 border border-gray-200 shadow-lg bg-white"
            sx={{borderRadius: '2rem', boxShadow:'4', ":hover": {boxShadow:'8'}}}
          >
            <CardContent className={`p-0 ${graduateFont.className} `}>
              <Box className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0b4c78] to-cyan-500 flex items-center justify-center mb-6 `}>
                <ApartmentIcon className="text-white" fontSize="large" />
              </Box>

              <Typography variant="h5" className={`text-gray-900 mb-4 ${graduateFont.className}`}>
                Purbanchal University
              </Typography>

              <Typography className={`text-gray-600 leading-relaxed ${robotoFont.className} `}>
                NIET is affiliated with Purbanchal University for all BE and BTech programs.
                Our curriculum follows university standards and ensures accredited, 
                high-quality education.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card
            elevation={0}
            // className="rounded-2xl shadow-md hover:shadow-xl p-8 border border-gray-200 bg-white"

            className="rounded-2xl p-8 border border-gray-200 shadow-xl bg-white"
            sx={{borderRadius: '2rem',boxShadow:'4',":hover": {boxShadow:'8'}}}
          >
            <CardContent className="p-0">
              <Box className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <MilitaryTechIcon className="text-white" fontSize="large" />
              </Box>

              <Typography variant="h5" className="text-gray-900 mb-4">
                USC-GAA Accredited
              </Typography>

              <Typography className="text-gray-600 leading-relaxed">
                NIET maintains global standards in engineering education.
                USC-GAA accreditation ensures our graduates are competitive
                internationally in both academia and industry.
              </Typography>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}



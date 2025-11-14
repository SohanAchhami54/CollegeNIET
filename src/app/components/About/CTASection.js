"use client";
import React from "react";
import { Button } from "@mui/material";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 text-center text-white px-6">
      <h2 className="text-4xl font-bold mb-6">
        The Future of Engineering Starts Now
      </h2>
      <p className="max-w-2xl mx-auto text-blue-100 mb-10">
        Ready to lead in AI, Healthcare, and Technology? Join NIET today.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <Button variant="contained" color="info" size="large"
        sx={{BorderRadius :"24px"}}>
          Apply Now
        </Button>
        <Button variant="outlined" color="inherit" size="large">
          Download Brochure
        </Button>
      </div>
    </section>
  );
}

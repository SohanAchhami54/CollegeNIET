"use client";
import React from "react";

export const metadata={
    title: "Our Mission - NIET",
    description: "Learn about NIET's mission to empower the next generation of engineers in biomedical, AI, and computer technology through innovative education and research."
}

export default function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 px-6 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        Building the Future,{" "}
        <span className="block text-4xl font-bold text-blue-700 mb-4">
          One Engineer at a Time
        </span>
        <p className="text-lg text-gray-700 font-medium max-w-2xl mx-auto leading-relaxed"> At NIET (National Institute of Engineering and Technology), 
            we're not just teaching engineering—we're creating the innovators 
            who'll shape tomorrow's tech landscape.</p>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
          <p>Empower students to drive innovation in biomedical technology, artificial intelligence, and computer systems.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
          <p>We aim to be recognized globally for excellence in BME, AI innovation, and computer systems development.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-3">Our Programs</h3>
          <p>Offering BE in Biomedical, BE in Computer, and BTech in AI Engineering.</p>
        </div>
      </div>
    </section>
  );
}

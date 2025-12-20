"use client";
import React from "react";
import Reusablebuilding from "../ReusableComHero/Reusablebuilding";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Reusablecomhero from "../ReusableComHero/Reusablecomhero";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import api from "@/Api/axios";

const reusecom = {
  badgeIcon: <AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon2: <AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon3: <AutoAwesomeIcon className="text-blue-400" />,
  badgeIcon4: <AutoAwesomeIcon className="text-blue-400" />,
  badgeText: "Pioneering Engineering Eduction Since 2005",
  headingpart1: "🚀 NIET - Pioneering Engineering",
  headingpart2: 'Eduction Since 2005',
  paragraph: "NIET (National Institute of Engineering and Technology) is Nepal's premier institute for Biomedical Engineering, now expanding into AI and Computer Engineering to shape the future of technology and healthcare ",
  badgeText2: "BE in Biomedical Engineering",
  badgeText3: "BTech in AI (Artificial Intelligence) (NEW 2025)",
  badgeText4: "BE in Computer Engineering (NEW 2025)"
};

// Motion variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};


export default function HeroSection() {

  const { data } = useQuery({
    queryKey: ['herosection'],
    queryFn: () => api.get('website/hero-section/')
  })
  // if (isLoading) {
  //   return <p> Loading.....</p>
  // }
  // if (error) {
  //   return <p>{error.message} </p>
  // }
  // console.log('Hero message:', data)
  const aboutpage = data?.data[5]
  // console.log('aboutpagedata:', aboutpage)


  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 px-6">
      {/* building image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.99 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        <Reusablebuilding path={aboutpage?.background_image} />
      </motion.div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
          >
            <motion.div variants={fadeUp} className="mb-8">
              <Reusablecomhero
                badgeIcon={reusecom.badgeIcon}
                badgeText={reusecom.badgeText}
                headingpart1={reusecom.headingpart1}
                headingpart2={reusecom.headingpart2}
                paragraph={reusecom.paragraph}
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto mt-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
          >
            <motion.div variants={fadeUp}>
              <Reusablecomhero
                badgeIcon2={reusecom.badgeIcon2}
                badgeText2={reusecom.badgeText2}
                badgeIcon3={reusecom.badgeIcon3}
                badgeText3={reusecom.badgeText3}
                badgeIcon4={reusecom.badgeIcon4}
                badgeText4={reusecom.badgeText4}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Hero from "./components/LandingPage/Hero";
import AdmissionSection from "./components/LandingPage/AdmissionSection";

import FAQSection from "./components/LandingPage/FAQSection";
import RecognitionSection from "./components/LandingPage/RecognitionSection";

import CTASection from "./components/LandingPage/CTASection";
//import CTASection from "./components/LandingPage/CTASection";

import Programsection from "./components/LandingPage/Programsection";
import CampusLifeSection from "./components/LandingPage/CampusLifeSection";
import Graduate from "./components/LandingPage/Graduate";
import Data1 from "@/Uttam/Data1";

export default function Home() {
  return (
    <>
      <Hero />
      <Programsection />
      <Graduate />
      <CampusLifeSection />
      <AdmissionSection />
      <RecognitionSection />
      <FAQSection />
      <CTASection/>
      {/* <Data1 /> */}



    </>
  );
}

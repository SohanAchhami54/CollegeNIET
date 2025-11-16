import Image from "next/image";
import Hero from "./components/LandingPage/Hero";
import AdmissionSection from "./components/LandingPage/AdmissionSection";

import FAQSection from "./components/LandingPage/FAQSection";
import RecognitionSection from "./components/LandingPage/RecognitionSection";
import CTASection from "./components/LandingPage/CTASection";
//import CTASection from "./components/LandingPage/CTASection";

export default function Home() {
  return (
      <>
        <Hero/>
        
       
       
        <CampusLifeSection />       
        <AdmissionSection/>
         <RecognitionSection/>
         <FAQSection/>
         <CTASection/>
      </>
  );
}

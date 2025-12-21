
import Header from "../components/Header/Header";
import HeroSection from "../components/About/HeroSection";
import MissionSection from "../components/About/MissionSection";
import TimelineSection from "../components/About/TimelineSection";
import AccreditationSection from "../components/About/AccreditationSection";
import CTASection from "../components/About/CTASection";
import GraduatesWorkAtSection from "../components/About/GraduatesAtWork";

// import Footer from "@/components/Footer/Footer";

export default function AboutPage(){
    return(
        <div>
            
            <HeroSection />
            <MissionSection />
            <TimelineSection />
            <GraduatesWorkAtSection />
            <AccreditationSection />
            <CTASection />
        </div>
    )
}
export const metadata = {
  title:
    "About NIET | Top Engineering College in Nepal for AI, Biomedical & Computer Engineering",
  description:
    "National Institute of Engineering and Technology (NIET) is Nepal'  s pioneer biomedical engineering college, now offering BTech in Artificial Intelligence and BE in Computer Engineering with industry-aligned curriculum and global recognition.",
  keywords: [
    "Top Engineering College in Nepal",
    "Biomedical Engineering College Nepal",
    "BTech Artificial Intelligence Nepal",
    "BE Computer Engineering Nepal",
    "NIET Engineering College",
    "Best Engineering Institute in Nepal",
    "Engineering Education Nepal",
  ],
  openGraph: {
    title:
      "About NIET | Pioneering Engineering Education in Nepal Since 2005",
    description:
      "NIET is Nepal's premier institute for Biomedical Engineering, BTech in AI, and BE in Computer Engineering, affiliated with Purbanchal University and recognized for academic excellence.",
    
    siteName: "National Institute of Engineering and Technology (NIET)",
    type: "website",
  },
  twitter: {
    
    title:
      "About NIET | Premier Engineering College in Nepal",
    description:
      "Learn about NIET's mission, vision, accreditation, and leadership in Biomedical Engineering, AI, and Computer Engineering education in Nepal.",
  },
};


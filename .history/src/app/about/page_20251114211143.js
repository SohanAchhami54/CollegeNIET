import Header from "../components/Header/Header";
import HeroSection from "../components/About/HeroSection";
import MissionSection from "../components/About/MissionSection";
import TimelineSection from "../components/About/TimelineSection";
import AccreditationSection from "../components/About/AccreditationSection";
import CTASection from "../components/About/CTASection";

// import Footer from "@/components/Footer/Footer";

export default function AboutPage(){
    return(
        <div>
            <Header />
            <HeroSection />
            <MissionSection />
            <TimelineSection />
            <AccreditationSection />
            <CTASection />
        </div>
    )
}
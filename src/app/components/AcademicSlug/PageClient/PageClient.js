"use client";
import React, { useCallback, useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
// Icons
import {
  LuBookOpen,
  LuDollarSign,
  LuAward,
  LuFlaskConical,
  LuBriefcase,
  LuBookMarked,
  LuSparkles,
} from "react-icons/lu";
import { FaRegCircleUser, FaRegCircleQuestion } from "react-icons/fa6";

import { FiFileText, FiArrowRight } from "react-icons/fi";
import { MdOutlineFileDownload } from "react-icons/md";
import { useInView } from "framer-motion";
import { graduateFont, robotoFont } from "@/font";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OverviewSection from "../OverviewSection";
import FeeStructure from "../FeeStructure";
import { HightlightCareer } from "../Hightlight";
import Faculty from "../Faculty";
import { LabResources } from "../LabResources";
import { Internship } from "../Internship";
import { Module } from "../Module";
import { Whyniet } from "../Whyniet";
import { Faq } from "../Faq";
import { RelatedCourse } from "../RelatedCourse";
import { CTASectionAcademic } from "../CTASectionAcademic";


// Function to get appropriate icon for a course based on its name

const PageClient = ({ program, allPrograms, relatedPrograms }) => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("overview");

  function getProgramBrochure(programId) {
    const brochureMap = {
      "btech-ai": { path: "/AI.pdf", filename: "B.Tech_AI_Brochure.pdf" },
      "be-bme": {
        path: "/BioM.pdf",
        filename: "BE_Biomedical_Engineering_Brochure.pdf",
      },
      "be-computer": {
        path: "/CE.pdf",
        filename: "BE_Computer_Engineering_Brochure.pdf",
      },
    };

    return (
      brochureMap[programId] || {
        path: "/NEIT Prospectus.pdf",
        filename: "NEIT Prospectus.pdf",
      }
    );
  }

  // Function to scroll to a specific section
  const scrollToSection = useCallback((sectionId) => {
    const refs = {
      overview: overviewSectionRef,
      "fee-structure": feeSectionRef,
      "degree-highlights": degreeSectionRef,
      faculty: facultySectionRef,
      "labs-resources": labsSectionRef,
      internships: internshipsSectionRef,
      modules: modulesSectionRef,
      "why-niet": whyUniversitySectionRef,
      faq: faqSectionRef,
    };

    const ref = refs[sectionId];
    if (ref?.current) {
      const offset = 100; // Account for fixed header
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  }, []);

  useEffect(() => {
    if (!program) {
      router.push("/academics");
      return;
    }

    // Handle hash-based scrolling on page load
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [program, router, scrollToSection]);

  // Handle scroll to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "overview", ref: overviewSectionRef },
        { id: "fee-structure", ref: feeSectionRef },
        { id: "degree-highlights", ref: degreeSectionRef },
        ...(program &&
        (program.id === "btech-ai" ||
          program.id === "be-bme" ||
          program.id === "be-computer")
          ? [
              { id: "faculty", ref: facultySectionRef },
              { id: "labs-resources", ref: labsSectionRef },
              { id: "internships", ref: internshipsSectionRef },
            ]
          : []),
        { id: "modules", ref: modulesSectionRef },
        { id: "why-niet", ref: whyUniversitySectionRef },
        { id: "faq", ref: faqSectionRef },
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [program]);


  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Refs for animations
  const heroRef = useRef(null);
  const overviewSectionRef = useRef(null);
  const feeSectionRef = useRef(null);
  const degreeSectionRef = useRef(null);
  const facultySectionRef = useRef(null);
  const labsSectionRef = useRef(null);
  const internshipsSectionRef = useRef(null);
  const modulesSectionRef = useRef(null);
  const whyUniversitySectionRef = useRef(null);
  const faqSectionRef = useRef(null);
  const mainContentRef = useRef(null);
  const sidebarRef = useRef(null);
  const stickyNavRef = useRef(null);
  const relatedProgramsRef = useRef(null);
  const ctaSectionRef = useRef(null);

  // UseInView hooks (assuming you are using framer-motion or react-intersection-observer)
  const isHeroInView = useInView(heroRef, { once: true });
  const isOverviewInView = useInView(overviewSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isFeeInView = useInView(feeSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isDegreeInView = useInView(degreeSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isFacultyInView = useInView(facultySectionRef, {
    once: true,
    margin: "-100px",
  });
  const isLabsInView = useInView(labsSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isInternshipsInView = useInView(internshipsSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isModulesInView = useInView(modulesSectionRef, {
    once: true,
    margin: "-100px",
  });
  const isWhyUniversityInView = useInView(whyUniversitySectionRef, {
    once: true,
    margin: "-100px",
  });
  const isFaqInView = useInView(faqSectionRef, {
    once: true,
    margin: "-100px",
  });

  // Enhanced sticky positioning for sidebar
  useEffect(() => {
    if (!stickyNavRef.current || !mainContentRef.current || !sidebarRef.current)
      return;

    const stickyNav = stickyNavRef.current;
    const sidebarElement = sidebarRef.current;
    const headerHeight = 112; // 7rem = 112px
    let initialNavLeft = 0;
    let initialNavWidth = 0;

    const updateStickyPosition = () => {
      const parentRect = mainContentRef.current.getBoundingClientRect();
      const navRect = stickyNav.getBoundingClientRect();

      // Store initial position and width on first call
      if (initialNavLeft === 0) {
        initialNavLeft = navRect.left;
        initialNavWidth = navRect.width;
      }

      const parentTop = parentRect.top;
      const parentBottom = parentRect.bottom;
      const navHeight = navRect.height;

      // Check if we should use fixed positioning
      if (parentTop < headerHeight && parentBottom > headerHeight) {
        let targetTop = headerHeight;

        if (parentBottom < headerHeight + navHeight) {
          targetTop = Math.max(headerHeight, parentBottom - navHeight);
        }

        stickyNav.style.cssText = `
                position: fixed !important;
                top: ${targetTop}px !important;
                left: ${initialNavLeft}px !important;
                width: ${initialNavWidth}px !important;
                z-index: 40 !important;
            `;
      } else {
        stickyNav.style.cssText = `
                position: relative !important;
                top: 0 !important;
                left: auto !important;
                width: auto !important;
                z-index: auto !important;
            `;
      }
    };

    // Initial update after a short delay
    const timeout = setTimeout(() => {
      updateStickyPosition();
    }, 150);

    // Update on scroll with throttling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateStickyPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Update on resize
    const handleResize = () => {
      initialNavLeft = 0;
      initialNavWidth = 0;
      updateStickyPosition();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigation items - conditionally includes faculty, labs, internships
  const navItems = [
    { id: "overview", label: "Overview", icon: <LuBookOpen /> },
    { id: "fee-structure", label: "Fee", icon: <LuDollarSign /> },
    { id: "degree-highlights", label: "Highlights", icon: <LuAward /> },
    ...(program &&
    (program.id === "btech-ai" ||
      program.id === "be-bme" ||
      program.id === "be-computer")
      ? [
          { id: "faculty", label: "Faculty", icon: <FaRegCircleUser /> },
          { id: "labs-resources", label: "Labs", icon: <LuFlaskConical /> },
          { id: "internships", label: "Internships", icon: <LuBriefcase /> },
        ]
      : []),
    { id: "modules", label: "Modules", icon: <LuBookMarked /> },
    { id: "why-niet", label: "Why us", icon: <LuSparkles /> },
    { id: "faq", label: "FAQ", icon: <FaRegCircleQuestion /> },
  ];

  return (
    <>
      <main className="relative bg-gradient-to-r from-white via-gray-50/30 to-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 xl:py-32">
          {/* Mobile Navigation */}
          <div className="lg:hidden overflow-x-auto pb-4 sm:pb-6 mb-6 sm:mb-8 -mx-4 sm:-mx-6 px-4 sm:px-6 sticky top-16 bg-white shadow-sm z-40">
            <nav className="flex gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex justify-center items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#0d4e92] to-cyan-500 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {/* <span className='h-3.5 w-3.5 sm:h-5 sm:w-5 flex-shrink-0'>
                                        {item.icon}
                                    </span> */}

                  {React.cloneElement(item.icon, {
                    className: " h-3.5 w-3.5 sm:w-4 sm:h-4 ",
                  })}
                  <span className="text-xs sm:text-sm">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Desktop Sidebar Navigation */}
          <div className="hidden lg:fixed lg:left-0 lg:top-24 lg:w-64 lg:h-screen lg:border-r lg:border-gray-200 lg:bg-white lg:overflow-y-auto lg:z-30">
            <nav className="p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left font-medium ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#0d4e92] to-cyan-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="h-5 w-5 flex-shrink-0">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* for side bar and main content  */}

          <div className="lg:flex lg:gap-12 items-start" ref={mainContentRef}>
            <aside
              ref={sidebarRef}
              className="hidden lg:block flex-shrink-0 "
              style={{ width: "25%", maxWidth: "25%" }}
            >
              <nav
                ref={stickyNavRef}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3
                  className={`text-xs font-bold text-gray-500 uppercase tracking-wider mb-6 ${graduateFont.className}`}
                >
                  On this page
                </h3>
                <div className="space-y-1.5  ">
                  {[
                    { id: "overview", label: "Overview", icon: <LuBookOpen /> },
                    {
                      id: "fee-structure",
                      label: "Fee Structure",
                      icon: <LuDollarSign />,
                    },
                    {
                      id: "degree-highlights",
                      label: "Highlights & Careers",
                      icon: <LuAward />,
                    },
                    ...(program &&
                    (program.id === "btech-ai" ||
                      program.id === "be-bme" ||
                      program.id === "be-computer")
                      ? [
                          {
                            id: "faculty",
                            label: "Faculty",
                            icon: <FaRegCircleUser />,
                          },
                          {
                            id: "labs-resources",
                            label: "Labs & Resources",
                            icon: <LuFlaskConical />,
                          },
                          {
                            id: "internships",
                            label: "Internships",
                            icon: <LuBriefcase />,
                          },
                        ]
                      : []),
                    { id: "modules", label: "Modules", icon: <LuBookMarked /> },
                    {
                      id: "why-niet",
                      label: "Why NIET?",
                      icon: <LuSparkles />,
                    },
                    { id: "faq", label: "FAQ", icon: <FaRegCircleQuestion /> },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`group min-w-[270px] flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium  transition-all duration-200 ease-in-out text-left font-medium ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 scale-[1.02]"
                            : "text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-gray-900 hover:scale-[1.01] "
                        }`}
                      >
                        <span className="flex-shrink-0">
                          {React.cloneElement(item.icon, {
                            className: `h-5 w-5   ${
                              activeSection === item.id
                                ? "text-white"
                                : "text-blue-600 group-hover:text-blue-700"
                            }`,
                          })}
                        </span>
                        <span className={`${robotoFont.className}`}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {/* Action Buttons */}
                <div className="space-y-3 pt-6 border-t border-gray-200">
                  <Link
                    href={
                      program
                        ? getProgramBrochure(program.id).path
                        : "/NEIT Prospectus.pdf"
                    }
                    download={
                      program
                        ? getProgramBrochure(program.id).filename
                        : "NEIT Prospectus.pdf"
                    }
                    className="inline-flex items-center justify-center w-full"
                  >
                    <Button
                      size="default"
                      className="bg-white text-[#0d4e92] hover:bg-blue-50 text-sm w-full border border-gray-200 shadow-sm"
                      aria-label="Download program brochure flex justify-between items-center"
                    >
                      {/* <Download className="mr-2 h-4 w-4" /> */}
                      <MdOutlineFileDownload className="h-4 w-4  " />
                      <span className={`${robotoFont.className} font-normal`}>
                        {" "}
                        Download Brochure{" "}
                      </span>
                    </Button>
                  </Link>
                  <Button
                    size="default"
                    variant="outline"
                    className="bg-white border-gray-300 text-gray-700 hover:bg-gray-50 text-sm w-full shadow-sm flex justify-center items-center "
                    onClick={() => scrollToSection("fee-structure")}
                    aria-label="View fee structure"
                  >
                    {/* <FileText className="mr-2 h-4 w-4" /> */}
                    <FiFileText />
                    <span className={`${robotoFont.className}`}>
                      Fee Structure{" "}
                    </span>
                  </Button>
                  <Link
                    href="https://entrance.puexam.edu.np/studentlogin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full"
                  >
                    <Button
                      size="default"
                      className="bg-white text-[#0d4e92] hover:bg-blue-50 text-sm w-full border border-gray-200 shadow-sm flex justify-center items-center"
                      aria-label="Apply now for this program"
                    >
                      <span className=""> Apply Now </span>
                      <FiArrowRight />
                    </Button>
                  </Link>
                </div>
              </nav>
            </aside>

            {/* main content goes here  */}
            {/* Main Content Area */}

            <div className="space-y-12 sm:space-y-16 lg:space-y-24 flex-1 min-w-0">
              {/* overview section  */}
              {/* --- Overview Section --- */}
              <OverviewSection
                program={program}
                isInView={isOverviewInView}
                sectionRef={overviewSectionRef}
              />

              {/* fee structure  */}
              <FeeStructure
                program={program}
                isFeeInView={isFeeInView}
                feeSectionRef={feeSectionRef}
              />

              {/* Career Highlights & Opportunities Section  */}
              <HightlightCareer
                program={program}
                degreeSectionRef={degreeSectionRef}
                isDegreeInView={isDegreeInView}
              />

              {/* faculty section  */}
              <Faculty
                program={program}
                facultySectionRef={facultySectionRef}
                isFacultyInView={isFacultyInView}
              />

              {/* lab and resources section  */}
              <LabResources
                program={program}
                labsSectionRef={labsSectionRef}
                isLabsInView={isLabsInView}
              />
              {/* Internships and placements  */}
              <Internship
                program={program}
                internshipsSectionRef={internshipsSectionRef}
                isInternshipsInView={isInternshipsInView}
              />

              {/* Modules section  */}
              <Module
                program={program}
                modulesSectionRef={modulesSectionRef}
                isModulesInView={isModulesInView}
              />
              {/* Why niet  and FAQ */}
              <div className="space-y-6 lg:space-y-8 scroll-t-28" id="why-niet">
                {/* why university   */}
                <Whyniet
                  program={program}
                  whyUniversitySectionRef={whyUniversitySectionRef}
                  isWhyUniversityInView={isWhyUniversityInView}
                />

                {/* FAQ  */}
                <Faq
                  program={program}
                  faqSectionRef={faqSectionRef}
                  isFaqInView={isFaqInView}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Related Courses Section */}
       <RelatedCourse relatedPrograms={relatedPrograms} relatedProgramsRef={relatedProgramsRef}  />
      {/* CTA Section */}
     <CTASectionAcademic ctaSectionRef={ctaSectionRef} />
    </>
  );
};

export default PageClient;

// "use client"
// import { getAllPrograms,getProgramBySlug } from '@/data/programs';
// import { robotoFont } from '@/font';
// import Image from 'next/image'
// import Link from 'next/link';
// import {useNavigate, useLocation } from "react-router-dom";
// import React, { useCallback, useState } from 'react'
// import { Hero } from '@/app/components/AcademicSlug/Hero';



// import { LuBookOpen } from "react-icons/lu";
// import { LuDollarSign } from "react-icons/lu";
// import { LuAward } from "react-icons/lu";
// import { FaRegCircleUser } from "react-icons/fa6";
// import { LuFlaskConical } from "react-icons/lu";
// import { LuBriefcase } from "react-icons/lu";
// import { LuBookMarked } from "react-icons/lu";
// import { LuSparkles } from 'react-icons/lu';
// import { FaRegCircleQuestion } from "react-icons/fa6"
// const Page = async({params}) => {
//   const {slug}= await params;
//   const program=slug?getProgramBySlug(slug):undefined;
//       const navigate = useNavigate();
//     const location = useLocation();
//   const allPrograms=getAllPrograms()
//    const relatedPrograms = allPrograms.filter(p => p.slug !== slug).slice(0, 3);
//   const [activeSection, setActiveSection] = useState("overview");


//      const scrollToSection = useCallback((sectionId) => {
//         const refs = {
//             overview: overviewSectionRef,
//             "fee-structure": feeSectionRef,
//             "degree-highlights": degreeSectionRef,
//             faculty: facultySectionRef,
//             "labs-resources": labsSectionRef,
//             internships: internshipsSectionRef,
//             modules: modulesSectionRef,
//             "why-niet": whyUniversitySectionRef,
//             faq: faqSectionRef,
//         };

//         const ref = refs[sectionId];
//         if (ref?.current) {
//             const offset = 100; // Account for fixed header
//             const elementPosition = ref.current.getBoundingClientRect().top;
//             const offsetPosition = elementPosition + window.pageYOffset - offset;
//             window.scrollTo({
//                 top: offsetPosition,
//                 behavior: "smooth"
//             });
//         }
//     }, []);

//     useEffect(() => {
//         if (!program) {
//             navigate("/academics");
//             return;
//         }

//         // Handle hash-based scrolling on page load
//         const hash = window.location.hash.slice(1);
//         if (hash) {
//             setTimeout(() => {
//                 scrollToSection(hash);
//             }, 100);
//         }
//     }, [program, navigate, scrollToSection]);





//  useEffect(() => {
//         const handleScroll = () => {
//             const sections = [
//                 { id: "overview", ref: overviewSectionRef },
//                 { id: "fee-structure", ref: feeSectionRef },
//                 { id: "degree-highlights", ref: degreeSectionRef },
//                 ...(program && (program.id === "btech-ai" || program.id === "be-bme" || program.id === "be-computer") ? [
//                     { id: "faculty", ref: facultySectionRef },
//                     { id: "labs-resources", ref: labsSectionRef },
//                     { id: "internships", ref: internshipsSectionRef },
//                 ] : []),
//                 { id: "modules", ref: modulesSectionRef },
//                 { id: "why-niet", ref: whyUniversitySectionRef },
//                 { id: "faq", ref: faqSectionRef },
//             ];

//             for (const section of sections) {
//                 if (section.ref.current) {
//                     const rect = section.ref.current.getBoundingClientRect();
//                     if (rect.top <= 100 && rect.bottom >= 100) {
//                         setActiveSection(section.id);
//                         break;
//                     }
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [program]);

//  if (!program) {
//         return null;
//     }



//   return (
//     <>

//       {/* hero section  */}

//       <Hero program={program} />

//     {/* main container  */}
//           <main className='relative bg-gradient-to-r from-white via-gray-50/30 to-white'>
//               {/* Decorative Background Elements */}
//                 <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                     <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
//                     <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
//                 </div>


//                 <div className='relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-24 xl:py-32  '>

//                   {/* mobile sidebar navigation  */}
//                     <div className='lg:hidden overflow-x-auto pb-4 sm:pb-6 mb-6 sm:mb-8  -mx-4 sm:-mx-6  px-4  sm:px-6'>
//                       <nav className='flex gap-2 '> 
//                         {[
//                           {id:"overview",label:"Overview",icon:<LuBookOpen/>},
//                           {id:"fee-structure",label:"Fee",icon:<LuDollarSign /> },
//                           {id:"degree-structure",label:"Highlights",icon:< LuAward/>},
//                            //here there is the use of spread operator as we need this button also.
//                            ...(program && (program.id==="btech-ai" || program.id==="be-bme" || program.id==="be-computer" )?[
//                             {id:"faculty",label:"Faculty",icon:<FaRegCircleUser/>},
//                             {id:"labs-resources",label:"Labs",icon:< LuFlaskConical /> },
//                             {id:"internships",label:"internships",icon:< LuBriefcase/> }
//                            ]:[]),
//                            {id:"modules", label:"Modules", icon:<LuBookMarked/> },
//                            {id:"why-niet",label:"Why us", icon:< LuSparkles/> },
//                            {id:"faq",label:"FAQ",icon:< FaRegCircleQuestion/>}
//                         ].map((item)=>{
//                           return (
//                             <button  key={item.id} className={`flex justify-center items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm whitespace-nowrap transition-all font-medium ${activeSection===item.id?"bg-gradient-to-r from-[#0d4e92] to-cyan-500 text-white shadow-lg scale-105":"bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"}`}>

//                                  <span className={`h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0  `}>
//                                      {item.icon}
//                                  </span>
//                               <span className='text-xs sm:text-sm'>{item.label} </span>


//                             </button>
//                           )
//                         })
//                         }
//                       </nav>

//                     </div>

//                 </div>
//           </main>
//      </>
//   )}
// export default Page


import { getAllPrograms, getProgramBySlug } from '@/data/programs';
import { Hero } from '@/app/components/AcademicSlug/Hero';
import PageClient from '@/app/components/AcademicSlug/PageClient';

// Server Component - Handles async params and data fetching
const Page = async ({ params }) => {
  const { slug } = await params;

  // Fetch program data on the server
  const program = slug ? getProgramBySlug(slug) : undefined;
  const allPrograms = getAllPrograms();
  const relatedPrograms = allPrograms.filter((p) => p.id !== program.id)

  // Handle case where program doesn't exist
  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Program Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The program you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/academics"
            className="inline-block px-8 py-3 bg-gradient-to-r from-[#0d4e92] to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            View All Programs
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Hero program={program} />

      {/* Client Component for Interactive Content */}
      <PageClient program={program} allPrograms={allPrograms} relatedPrograms={relatedPrograms} />


    </>
  );
};

export default Page;
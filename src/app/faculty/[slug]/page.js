// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { useParams, useRouter } from "next/navigation";
// import { facultyData } from "@/data/faculty";
// import Header from "../../components/Header/Header";
// import { PiMedalLight } from "react-icons/pi";
// import Image from "next/image";

// import {
//   FiArrowLeft,
//   FiMail,
//   FiPhone,
//   FiMapPin,
//   FiBookOpen,
//   FiBriefcase,
//   FiAward,
//   FiFileText,
//   FiExternalLink,
//   FiLinkedin,
//   FiGlobe,
//   FiUsers,
//   FiStar,
//   FiHome,
// } from "react-icons/fi";
// import { motion } from "framer-motion";

// import { graduateFont, robotoFont } from "../../../font";
// import Image from "next/image";

// const Badge = ({ children, className = "", isHeader = false }) => {
//   const baseClasses = `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200`;
//   const headerClasses = "bg-blue-800 text-white border border-blue-700 shadow-sm";
//   const bodyClasses = "bg-cyan-50 text-cyan-800 border border-cyan-200";

//   return (
//     <span className={`${baseClasses} ${isHeader ? headerClasses : bodyClasses} ${className}`}>
//       {children}
//     </span>
//   );
// };

// const Tabs = ({ defaultValue, children }) => {
//   const [activeTab, setActiveTab] = useState(defaultValue);
//   return (
//     <div>
//       <div className="flex justify-start sm:justify-center border-b border-gray-200 mb-6 sm:mb-8 max-w-full overflow-x-auto whitespace-nowrap scrollbar-hide max-w-4xl mx-auto">
//         {React.Children.map(children, (child) => {
//           if (child.type === TabsList) {
//             return (
//               <div className="px-4 sm:px-0 flex">
//                 {React.Children.map(child.props.children, (trigger) => {
//                   if (trigger.type === TabsTrigger) {
//                     return React.cloneElement(trigger, {
//                       isActive: activeTab === trigger.props.value,
//                       onClick: () => setActiveTab(trigger.props.value),
//                     });
//                   }
//                   return null;
//                 })}
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       {React.Children.map(children, (child) => {
//         if (child.type === TabsContent && child.props.value === activeTab) {
//           return child;
//         }
//         return null;
//       })}
//     </div>
//   );
// };

// const TabsList = ({ children }) => <>{children}</>;
// const TabsTrigger = ({ value, children, isActive, onClick }) => {
//   const classes = `
//         px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 relative
//         ${isActive
//       ? 'text-cyan-600 font-semibold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-1 after:bg-cyan-600'
//       : 'text-gray-600 hover:text-cyan-500'
//     }
//     `;
//   return (
//     <button onClick={onClick} className={classes}>
//       {children}
//     </button>
//   );
// };
// const TabsContent = ({ children }) => (
//   <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
//     {children}
//   </motion.div>
// );

// export default function FacultyDetailPage() {
//   const { slug } = useParams();
//   const router = useRouter();

//   const faculty = facultyData.find((f) => f.slug === slug);

//   if (!faculty) {
//     return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Faculty not found.</div>;
//   }

//   const fullName = `${faculty.title || ""} ${faculty.firstName} ${faculty.middleName || ""} ${faculty.lastName}`.trim();

//   const relatedFaculty = facultyData.filter((f) => f.slug !== slug && f.department === faculty.department).slice(0, 3);

//   const SectionIcon = {
//     Biography: FiUsers,
//     Experience: FiBriefcase,
//     "Awards & Recognition": FiAward,
//   };

//   const DetailSection = ({ title, children, iconName }) => {
//     const Icon = SectionIcon[iconName] || FiHome;
//     return (
//       <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
//         <h2 className={`${graduateFont.className} text-xl font-bold text-gray-800 mb-4 flex items-center gap-2`}>
//           <Icon className="h-6 w-6 text-cyan-600" />
//           {title}
//         </h2>
//         <div className={`${robotoFont.className}`}>{children}</div>
//       </div>
//     );
//   };

//   const ResearchItemCard = ({ title, description }) => (
//     <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 transition-colors cursor-pointer shadow-sm">
//       <h3 className={`${graduateFont.className} text-base font-semibold text-gray-900`}>{title}</h3>
//       {description && <p className={`${robotoFont.className} text-sm text-gray-600`}>{description}</p>}
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       {/* Profile Header Section */}
//       <section className="relative pt-24 pb-8 sm:pb-12 bg-blue-900 shadow-lg">
//         <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
//           <button
//             onClick={() => router.push("/faculty")}
//             className="mb-6 sm:mb-8 text-white hover:text-cyan-300 hover:bg-white/10 inline-flex items-center px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm"
//           >
//             <FiArrowLeft className="h-4 w-4 mr-2" />
//             Back to Faculty
//           </button>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
//             {/* Cyan border wrapper */}
//                 <div className="relative w-full mx-auto lg:mx-0 flex justify-center">
//                   {/* Square image with cyan border - centered always */}
//                   <div className="relative w-64 h-64 lg:w-96 lg:h-96">
//                     <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
//                       {faculty.image ? (
//                         <Image src={faculty.image} alt={fullName} fill className="border-4 rounded-2xl  border-cyan-500  w-full  h-full object-cover" priority quality={100} />
//                       ) : (
//                         <div className="w-full h-full bg-gray-400 flex items-center justify-center">
//                           <FiUsers className="h-24 w-24 text-white" />
//                         </div>
//                       )}
//                     </div>

//                     {/* Floating Full-Time Badge */}
//                     <div className="absolute top-4 right-2 bg-white text-cyan-600 text-xs font-medium px-2 
//                     pb-1 rounded-sm shadow-lg border-2 border-cyan-500">
//                       Full-Time
//                     </div>
//                   </div>
//                 </div>
//             </div>

//             {/* Details Column */}
//             <div className="lg:col-span-2 text-white pt-4 lg:pt-0 text-center lg:text-left">
//               <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-4">
//                 <Badge isHeader={true}>{faculty.boardPosition || "Board Member"}</Badge>
//                 <Badge isHeader={true}>{faculty.department || "Computer Engineering"}</Badge>
//               </div>

//               <h1 className={`${graduateFont.className} text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight`}>{fullName}</h1>

//               <p className={`${robotoFont.className} text-lg sm:text-xl text-white font-medium mb-4`}>{faculty.designation}</p>
// {/* 
//               <div className="space-y-2 mb-6 text-gray-300">
//                 <p className="flex items-start gap-3 justify-center lg:justify-start">
//                   <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
//                   <span className="font-medium">Head of Department</span> - {faculty.department}
//                 </p>
//                 <p className="flex items-start gap-3 justify-center lg:justify-start">
//                   <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
//                   {faculty.leadershipRole || "Chairman"}
//                 </p>
//                 <p className={`${robotoFont.className} text-sm italic pl-8 pt-1`}>{faculty.specialization || "Artificial Intelligence, Machine Learning, Computer Vision"}</p>
//               </div> */}

//                 <div className="space-y-2 mb-6 text-gray-300">
//                 <p className="flex items-start gap-3 justify-center lg:justify-start text-sm sm:text-base">
//                   <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
//                   <span className="font-medium">Head of Department</span>
//                   <span className="hidden sm:inline"> — {faculty.department}</span>
//                 </p>

//                 <p className="flex items-start gap-3 justify-center lg:justify-start text-sm sm:text-base">
//                   <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
//                   {faculty.leadershipRole || "Chairman"}
//                 </p>
//                 {/* Specialization: smaller text on mobile, left-pad only on sm+ */}
//                 <p className={`${robotoFont.className} text-sm sm:text-sm italic sm:pl-8 pt-1 text-center lg:text-left break-words max-w-[40rem]`}>
//                     {faculty.specialization || "Artificial Intelligence, Machine Learning, Computer Vision"}
//                 </p>
//                 </div>


//               {/* Contact links row */}
//               <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-8">
//                 {faculty.contact?.email && (
//                   <a
//                     href={`mailto:${faculty.contact.email}`}
//                     className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20 max-w-full truncate"
//                   >
//                     <FiMail className="h-4 w-4 flex-shrink-0" />
//                     <span className="truncate">{faculty.contact.email}</span>
//                   </a>
//                 )}
//                 {faculty.contact?.phone && (
//                   <a
//                     href={`tel:${faculty.contact.phone}`}
//                     className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20"
//                   >
//                     <FiPhone className="h-4 w-4 flex-shrink-0" />
//                     {faculty.contact.phone}
//                   </a>
//                 )}
//                 {faculty.contact?.office && (
//                   <div className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full">
//                     <FiMapPin className="h-4 w-4 flex-shrink-0" />
//                     {faculty.contact.office}
//                   </div>
//                 )}
//               </div>

//               {/* Social icons below contact row */}
//               <div className="flex justify-center lg:justify-start items-center gap-3 mt-4">
//                 {faculty.contact?.linkedin && (
//                   <button
//                     onClick={() =>
//                       window.open(
//                         faculty.contact.linkedin.startsWith("http") ? faculty.contact.linkedin : `https://${faculty.contact.linkedin}`,
//                         "_blank"
//                       )
//                     }
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
//                     aria-label="Open LinkedIn"
//                   >
//                     <FiLinkedin className="h-5 w-5 text-white" />
//                   </button>
//                 )}

//                 {faculty.contact?.website && (
//                   <button
//                     onClick={() =>
//                       window.open(faculty.contact.website.startsWith("http") ? faculty.contact.website : `https://${faculty.contact.website}`, "_blank")
//                     }
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
//                     aria-label="Open Website"
//                   >
//                     <FiFileText className="h-5 w-5 text-white" />
//                   </button>
//                 )}

//                 {faculty.contact?.googleScholar && (
//                   <button
//                     onClick={() =>
//                       window.open(
//                         faculty.contact.googleScholar.startsWith("http") ? faculty.contact.googleScholar : `https://${faculty.contact.googleScholar}`,
//                         "_blank"
//                       )
//                     }
//                     className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
//                     aria-label="Open Google Scholar"
//                   >
//                     <FiFileText className="h-5 w-5 text-white" />
//                   </button>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//             {/* Content Tabs Section */}
//             <section className="py-8 sm:py-12 md:py-16">
//                 <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-12"> {/* px-0 here to allow the scrollable tabs to reach the edge */}
//                     <Tabs defaultValue="overview">
//                         <TabsList>
//                             <TabsTrigger value="overview">Overview</TabsTrigger>
//                             <TabsTrigger value="courses">Courses</TabsTrigger>
//                             <TabsTrigger value="education">Education</TabsTrigger>
//                             <TabsTrigger value="research">Research</TabsTrigger>
//                         </TabsList>

//                         <TabsContent value="overview">
//                             {/* Inner section padding applied here for content consistency */}
//                             <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0">
//                                 {faculty.bio && (
//                                     <DetailSection title="BIOGRAPHY" iconName="Biography">
//                                         <p className={`${robotoFont.className} text-gray-700 leading-relaxed whitespace-pre-line`}>{faculty.bio}</p>
//                                     </DetailSection>
//                                 )}

//                                 {faculty.experience && faculty.experience.length > 0 && (
//                                     <DetailSection title="EXPERIENCE" iconName="Experience">
//                                         <div className="space-y-6">
//                                             {faculty.experience.map((exp, idx) => (
//                                                 <div key={idx} className="border-l-2 border-cyan-600 pl-4 relative">
//                                                     <h3 className={`${graduateFont.className} text-lg font-bold text-gray-900`}>{exp.position}</h3>
//                                                     <p className="text-sm text-cyan-600 font-medium">{exp.organization}</p>
//                                                     <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
//                                                     {exp.description && <p className={`${robotoFont.className} text-gray-700 text-sm`}>{exp.description}</p>}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </DetailSection>
//                                 )}
                                
//                                 {faculty.awards && faculty.awards.length > 0 && (
//                                     <DetailSection title="AWARDS & RECOGNITION" iconName="Awards & Recognition">
//                                         <div className="space-y-4">
//                                             {faculty.awards.map((a, i) => (
//                                                 <div key={i} className="flex items-start gap-3">
//                                                     <FiAward className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
//                                                     <div>
//                                                         <h3 className={`${graduateFont.className} font-bold text-gray-900`}>{a.title}</h3>
//                                                         <p className="text-cyan-600 text-sm">{a.organization}</p>
//                                                         {a.year && <p className="text-gray-600 text-xs">{a.year}</p>}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </DetailSection>
//                                 )}
//                             </div>
//                         </TabsContent>

//                         <TabsContent value="courses">
//                             <div className="max-w-5xl mx-auto px-4 sm:px-0">
//                                 {faculty.courses && faculty.courses.length > 0 ? (
//                                     <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
//                                         <h2 className={`${graduateFont.className} text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-3`}>
//                                             <FiBookOpen className="h-6 w-6 text-cyan-600" />
//                                             Courses Taught ({faculty.courses.length})
//                                         </h2>
//                                         {/* Grid: 1 column on mobile, 2 columns on medium screens (md) */}
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//                                             {faculty.courses.map(course => (
//                                                 <div key={course.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-cyan-400 transition-all shadow-sm">
//                                                     <h3 className={`${graduateFont.className} font-semibold text-gray-900 mb-1 flex items-center gap-2`}>
//                                                         <span className="text-cyan-600 font-bold">{course.code || 'N/A'}</span> - {course.name}
//                                                     </h3>
//                                                     {course.program && <p className={`${robotoFont.className} text-sm text-cyan-600 font-medium mb-1`}>Program: {course.program}</p>}
//                                                     {course.semester && <p className={`${robotoFont.className} text-xs text-gray-500`}>Semester: {course.semester}</p>}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-lg">
//                                         <FiBookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//                                         <p className={`${robotoFont.className} text-gray-600 text-lg`}>No courses currently listed for this faculty member.</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </TabsContent>

//                         <TabsContent value="education">
//                             <div className="max-w-5xl mx-auto px-4 sm:px-0">
//                                 {faculty.education && faculty.education.length > 0 ? (
//                                     <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
//                                         <h2 className={`${graduateFont.className} text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-3`}>
//                                             <FiAward className="h-6 w-6 text-cyan-600" />
//                                             Academic History
//                                         </h2>
//                                         <div className="space-y-8">
//                                             {faculty.education.map((edu, i) => (
//                                                 <div key={i} className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-cyan-500/50 before:rounded-full">
//                                                     <div className="absolute top-0 left-[-8px] w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-md"></div>
//                                                     <h3 className={`${graduateFont.className} text-lg font-bold text-gray-900 mb-1`}>{edu.degree} in {edu.field}</h3>
//                                                     <p className="text-cyan-600 font-medium">{edu.institution}</p>
//                                                     <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
//                                                         {edu.year && <span>Graduated: **{edu.year}**</span>}
//                                                         {edu.country && <span>• {edu.country}</span>}
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 ) : (
//                                     <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-lg">
//                                         <FiAward className="h-12 w-12 text-gray-300 mx-auto mb-4" />
//                                         <p className={`${robotoFont.className} text-gray-600 text-lg`}>Education information not available.</p>
//                                     </div>
//                                 )}
//                             </div>
//                         </TabsContent>

//                         <TabsContent value="research">
//                             <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0">
//                                 {faculty.researchInterests && faculty.researchInterests.length > 0 && (
//                                     <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-md">
//                                         <h2 className={`${graduateFont.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
//                                             <FiStar className="h-6 w-6 text-cyan-600" /> 
//                                             RESEARCH INTERESTS
//                                         </h2>
//                                         <div className="space-y-4">
//                                             {faculty.researchInterests.map((interest, i) => (
//                                                 <ResearchItemCard 
//                                                     key={i} 
//                                                     title={interest.area} 
//                                                     description={interest.description} 
//                                                 />
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}

//                                 {faculty.publications && faculty.publications.length > 0 && (
//                                     <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-md">
//                                         <h2 className={`${graduateFont.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
//                                             <FiFileText className="h-6 w-6 text-cyan-600" />
//                                             PUBLICATIONS
//                                         </h2>
//                                         <div className="space-y-4">
//                                             {faculty.publications.map((pub, i) => (
//                                                 <div key={i} className="p-4 rounded-lg border border-gray-200 hover:border-cyan-400 transition-colors bg-white cursor-pointer relative">
//                                                     <h3 className={`${graduateFont.className} font-semibold text-base text-gray-900 mb-1`}>{pub.title}</h3>
//                                                     <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
//                                                         {pub.type && (
//                                                             <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
//                                                                 {pub.type}
//                                                             </span>
//                                                         )}
//                                                         <span>
//                                                             <span className="font-medium text-gray-700">{pub.journal}</span>{pub.year ? ` • ${pub.year}` : ''}
//                                                         </span>
//                                                     </div>
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </TabsContent>
//                     </Tabs>
//                 </div>
//             </section>

//             {/* Related Faculty Section */}
//             {relatedFaculty.length > 0 && (
//                 <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
//                     <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
//                         {/* Adjusted header size for mobile */}
//                         <h2 className={`${graduateFont.className}  text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8`}>Related Faculty Members</h2>
//                         {/* Grid: 1 column on mobile, 2 columns on small screens, 3 columns on medium screens (md) */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                             {relatedFaculty.map((f,i) => (
//                                 <Link 
//                                     key= {`${f.slug}-${i} `} 
//                                     href={`/faculty/${f.slug}`} 
//                                     // Added p-6 for better padding on all screen sizes
//                                     className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center gap-4"
//                                 >
//                                     {/* Adjusted image size to be slightly smaller on mobile */}
//                                   <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0 relative">
//                                     <Image
//                                         src={f.image || '/placeholder.jpg'}
//                                         alt={`${f.firstName} ${f.lastName}`}
//                                         fill
//                                         sizes="(max-width: 640px) 96px, 112px"
//                                         className="object-cover"
//                                         priority={false}
//                                     />
//                                     </div>
//                                     <div className="text-center">
//                                         <h3 className={`${graduateFont.className} font-bold text-gray-900 text-lg`}>{f.firstName} {f.lastName}</h3>
//                                         <p className={`${robotoFont.className} text-sm text-gray-600`}>{f.designation}</p>
//                                     </div>
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </section>
//             )}
//         </div>
//     );
// }


// 

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { facultyData } from "@/data/faculty";
import Header from "../../components/Header/Header";
import { PiMedalLight } from "react-icons/pi";
import Image from "next/image";

import {
  FiArrowLeft, FiMail,FiPhone,FiMapPin,FiBookOpen,FiBriefcase,FiAward,FiFileText,
  FiExternalLink,FiLinkedin,FiGlobe,FiUsers,FiStar,FiHome,} from "react-icons/fi";
import { motion } from "framer-motion";

import { graduateFont, robotoFont } from "../../../font";


const Badge = ({ children, className = "", isHeader = false }) => {
  const baseClasses = `inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide transition-colors duration-200`;
  const headerClasses = "bg-blue-800 text-white border border-blue-700 shadow-sm";
  const bodyClasses = "bg-cyan-50 text-cyan-800 border border-cyan-200";

  return (
    <span className={`${baseClasses} ${isHeader ? headerClasses : bodyClasses} ${className}`}>
      {children}
    </span>
  );
};

const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <div>
      <div className="flex justify-start sm:justify-center border-b border-gray-200 mb-6 sm:mb-8 max-w-full overflow-x-auto whitespace-nowrap scrollbar-hide max-w-4xl mx-auto">
        {React.Children.map(children, (child) => {
          if (child.type === TabsList) {
            return (
              <div className="px-4 sm:px-0 flex">
                {React.Children.map(child.props.children, (trigger) => {
                  if (trigger.type === TabsTrigger) {
                    return React.cloneElement(trigger, {
                      isActive: activeTab === trigger.props.value,
                      onClick: () => setActiveTab(trigger.props.value),
                    });
                  }
                  return null;
                })}
              </div>
            );
          }
          return null;
        })}
      </div>
      {React.Children.map(children, (child) => {
        if (child.type === TabsContent && child.props.value === activeTab) {
          return child;
        }
        return null;
      })}
    </div>
  );
};

const TabsList = ({ children }) => <>{children}</>;
const TabsTrigger = ({ value, children, isActive, onClick }) => {
  const classes = `
        px-4 sm:px-6 py-3 text-sm sm:text-base font-medium transition-colors duration-300 relative
        ${isActive
      ? 'text-cyan-600 font-semibold after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-1 after:bg-cyan-600'
      : 'text-gray-600 hover:text-cyan-500'
    }
    `;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
const TabsContent = ({ children }) => (
  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
    {children}
  </motion.div>
);

export default function FacultyDetailPage() {
  const { slug } = useParams();
  const router = useRouter();

  const faculty = facultyData.find((f) => f.slug === slug);

  if (!faculty) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Faculty not found.</div>;
  }

  const fullName = `${faculty.title || ""} ${faculty.firstName} ${faculty.middleName || ""} ${faculty.lastName}`.trim();

  const relatedFaculty = facultyData.filter((f) => f.slug !== slug && f.department === faculty.department).slice(0, 3);

  const SectionIcon = {
    Biography: FiUsers,
    Experience: FiBriefcase,
    "Awards & Recognition": FiAward,
  };

  const DetailSection = ({ title, children, iconName }) => {
    const Icon = SectionIcon[iconName] || FiHome;
    return (
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-lg">
        <h2 className={`${graduateFont.className} text-xl font-bold text-gray-800 mb-4 flex items-center gap-2`}>
          <Icon className="h-6 w-6 text-cyan-600" />
          {title}
        </h2>
        <div className={`${robotoFont.className}`}>{children}</div>
      </div>
    );
  };

  const ResearchItemCard = ({ title, description }) => (
    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:border-cyan-400 transition-colors cursor-pointer shadow-sm">
      <h3 className={`${graduateFont.className} text-base font-semibold text-gray-900`}>{title}</h3>
      {description && <p className={`${robotoFont.className} text-sm text-gray-600`}>{description}</p>}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Profile Header Section */}
      <section className="relative pt-24 pb-8 sm:pb-12 bg-blue-900 shadow-lg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <button
            onClick={() => router.push("/faculty")}
            className="mb-6 sm:mb-8 text-white hover:text-cyan-300 hover:bg-white/10 inline-flex items-center px-4 py-2 rounded-xl transition-all duration-300 font-medium text-sm"
          >
            <FiArrowLeft className="h-4 w-4 mr-2" />
            Back to Faculty
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12">
            <div className="lg:col-span-1 flex justify-center lg:justify-startlg:pl-20">
              <div className="relative w-full mx-auto lg:mx-0">
                {/* Cyan border wrapper */}
                <div className="relative w-full mx-auto lg:mx-0 flex justify-center">
                  {/* Square image with cyan border - centered always */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative w-64 h-64 lg:w-96 lg:h-96"
                  >
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                      {faculty.image ? (
                        <Image src={faculty.image} alt={fullName} fill className="border-4 rounded-2xl  border-cyan-500  w-full  h-full object-cover" priority quality={100} />
                      ) : (
                        <div className="w-full h-full bg-gray-400 flex items-center justify-center">
                          <FiUsers className="h-24 w-24 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Floating Full-Time Badge */}
                    {faculty.facultyType && (
                      <div className="absolute top-4 right-2 bg-white text-cyan-600 text-xs font-medium px-2 pb-1 rounded-sm shadow-lg border-2 border-cyan-500">
                        {faculty.facultyType === "full-time" ? "Full-Time" : faculty.facultyType === "part-time" ? "Part-Time" : "Visiting"}
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Details Column */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="lg:col-span-2 text-white pt-4 lg:pt-0 text-center lg:text-left"
            >
              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 mb-4">
                <Badge isHeader={true}>{faculty.boardPosition || "Board Member"}</Badge>
                <Badge isHeader={true}>{faculty.department || "Computer Engineering"}</Badge>
              </div>

              <h1 className={`${graduateFont.className} text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 leading-tight`}>{fullName}</h1>

              <p className={`${robotoFont.className} text-lg sm:text-xl text-white font-medium mb-4`}>{faculty.designation}</p>

              <div className="space-y-2 mb-6 text-gray-300">
                <p className="flex items-start gap-3 justify-center lg:justify-start text-sm sm:text-base">
                  <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Head of Department</span>
                  <span className="hidden sm:inline"> — {faculty.department}</span>
                </p>

                <p className="flex items-start gap-3 justify-center lg:justify-start text-sm sm:text-base">
                  <PiMedalLight className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  {faculty.leadershipRole || "Chairman"}
                </p>
                {/* Specialization: smaller text on mobile, left-pad only on sm+ */}
                <p className={`${robotoFont.className} text-sm sm:text-sm italic sm:pl-8 pt-1 text-center lg:text-left break-words max-w-[40rem]`}>
                  {faculty.specialization || "Artificial Intelligence, Machine Learning, Computer Vision"}
                </p>
              </div>

              {/* Contact links row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-8">
                {faculty.contact?.email && (
                  <a
                    href={`mailto:${faculty.contact.email}`}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20 max-w-full truncate"
                  >
                    <FiMail className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{faculty.contact.email}</span>
                  </a>
                )}
                {faculty.contact?.phone && (
                  <a
                    href={`tel:${faculty.contact.phone}`}
                    className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full hover:bg-white/20 transition-colors border border-white/20"
                  >
                    <FiPhone className="h-4 w-4 flex-shrink-0" />
                    {faculty.contact.phone}
                  </a>
                )}
                {faculty.contact?.office && (
                  <div className="flex items-center gap-2 px-3 py-1.5 text-sm bg-white/10 rounded-full">
                    <FiMapPin className="h-4 w-4 flex-shrink-0" />
                    {faculty.contact.office}
                  </div>
                )}
              </div>

              {/* Social icons below contact row */}
              <div className="flex justify-center lg:justify-start items-center gap-3 mt-4">
                {faculty.contact?.linkedin && (
                  <button
                    onClick={() =>
                      window.open(
                        faculty.contact.linkedin.startsWith("http") ? faculty.contact.linkedin : `https://${faculty.contact.linkedin}`,
                        "_blank"
                      )
                    }
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
                    aria-label="Open LinkedIn"
                  >
                    <FiLinkedin className="h-5 w-5 text-white" />
                  </button>
                )}

                {faculty.contact?.website && (
                  <button
                    onClick={() =>
                      window.open(faculty.contact.website.startsWith("http") ? faculty.contact.website : `https://${faculty.contact.website}`, "_blank")
                    }
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
                    aria-label="Open Website"
                  >
                    <FiFileText className="h-5 w-5 text-white" />
                  </button>
                )}

                {faculty.contact?.googleScholar && (
                  <button
                    onClick={() =>
                      window.open(
                        faculty.contact.googleScholar.startsWith("http") ? faculty.contact.googleScholar : `https://${faculty.contact.googleScholar}`,
                        "_blank"
                      )
                    }
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition"
                    aria-label="Open Google Scholar"
                  >
                    <FiFileText className="h-5 w-5 text-white" />
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Tabs Section */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-0 sm:px-6 lg:px-12"> {/* px-0 here to allow the scrollable tabs to reach the edge */}
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="research">Research</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              {/* Inner section padding applied here for content consistency */}
              <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0">
                {faculty.bio && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} >
                    <DetailSection title="BIOGRAPHY" iconName="Biography">
                      <p className={`${robotoFont.className} text-gray-700 leading-relaxed whitespace-pre-line`}>{faculty.bio}</p>
                    </DetailSection>
                  </motion.div>
                )}

                {faculty.experience && faculty.experience.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.06 }}>
                    <DetailSection title="EXPERIENCE" iconName="Experience">
                      <div className="space-y-6">
                        {faculty.experience.map((exp, idx) => (
                          <div key={idx} className="border-l-2 border-cyan-600 pl-4 relative">
                            <h3 className={`${graduateFont.className} text-lg font-bold text-gray-900`}>{exp.position}</h3>
                            <p className="text-sm text-cyan-600 font-medium">{exp.organization}</p>
                            <p className="text-xs text-gray-500 mb-2">{exp.duration}</p>
                            {exp.description && <p className={`${robotoFont.className} text-gray-700 text-sm`}>{exp.description}</p>}
                          </div>
                        ))}
                      </div>
                    </DetailSection>
                  </motion.div>
                )}

                {faculty.awards && faculty.awards.length > 0 && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.12 }}>
                    <DetailSection title="AWARDS & RECOGNITION" iconName="Awards & Recognition">
                      <div className="space-y-4">
                        {faculty.awards.map((a, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <FiAward className="h-5 w-5 text-cyan-600 mt-1 flex-shrink-0" />
                            <div>
                              <h3 className={`${graduateFont.className} font-bold text-gray-900`}>{a.title}</h3>
                              <p className="text-cyan-600 text-sm">{a.organization}</p>
                              {a.year && <p className="text-gray-600 text-xs">{a.year}</p>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </DetailSection>
                  </motion.div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="courses">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-0">
                  {faculty.courses && faculty.courses.length > 0 ? (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                      <h2 className={`${graduateFont.className} text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-3`}>
                        <FiBookOpen className="h-6 w-6 text-cyan-600" />
                        Courses Taught ({faculty.courses.length})
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {faculty.courses.map(course => (
                          <div key={course.id} className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-cyan-400 transition-all shadow-sm">
                            <h3 className={`${graduateFont.className} font-semibold text-gray-900 mb-1 flex items-center gap-2`}>
                              <span className="text-cyan-600 font-bold">{course.code || 'N/A'}</span> - {course.name}
                            </h3>
                            {course.program && <p className={`${robotoFont.className} text-sm text-cyan-600 font-medium mb-1`}>Program: {course.program}</p>}
                            {course.semester && <p className={`${robotoFont.className} text-xs text-gray-500`}>Semester: {course.semester}</p>}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-lg">
                      <FiBookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className={`${robotoFont.className} text-gray-600 text-lg`}>No courses currently listed for this faculty member.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="education">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-0">
                  {faculty.education && faculty.education.length > 0 ? (
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-lg">
                      <h2 className={`${graduateFont.className} text-xl sm:text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 border-b pb-3`}>
                        <FiAward className="h-6 w-6 text-cyan-600" />
                        Academic History
                      </h2>
                      <div className="space-y-8">
                        {faculty.education.map((edu, i) => (
                          <div key={i} className="relative pl-8 before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-full before:bg-cyan-500/50 before:rounded-full">
                            <div className="absolute top-0 left-[-8px] w-4 h-4 bg-cyan-600 rounded-full border-4 border-white shadow-md"></div>
                            <h3 className={`${graduateFont.className} text-lg font-bold text-gray-900 mb-1`}>{edu.degree} in {edu.field}</h3>
                            <p className="text-cyan-600 font-medium">{edu.institution}</p>
                            <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                              {edu.year && <span>Graduated: **{edu.year}**</span>}
                              {edu.country && <span>• {edu.country}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 shadow-lg">
                      <FiAward className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <p className={`${robotoFont.className} text-gray-600 text-lg`}>Education information not available.</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="research">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
                <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0">
                  {faculty.researchInterests && faculty.researchInterests.length > 0 && (
                    <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-md">
                      <h2 className={`${graduateFont.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
                        <FiStar className="h-6 w-6 text-cyan-600" />
                        RESEARCH INTERESTS
                      </h2>
                      <div className="space-y-4">
                        {faculty.researchInterests.map((interest, i) => (
                          <ResearchItemCard
                            key={i}
                            title={interest.area}
                            description={interest.description}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {faculty.publications && faculty.publications.length > 0 && (
                    <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 shadow-md">
                      <h2 className={`${graduateFont.className} text-xl font-bold text-gray-900 mb-6 flex items-center gap-2`}>
                        <FiFileText className="h-6 w-6 text-cyan-600" />
                        PUBLICATIONS
                      </h2>
                      <div className="space-y-4">
                        {faculty.publications.map((pub, i) => (
                          <div key={i} className="p-4 rounded-lg border border-gray-200 hover:border-cyan-400 transition-colors bg-white cursor-pointer relative">
                            <h3 className={`${graduateFont.className} font-semibold text-base text-gray-900 mb-1`}>{pub.title}</h3>
                            <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                              {pub.type && (
                                <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
                                  {pub.type}
                                </span>
                              )}
                              <span>
                                <span className="font-medium text-gray-700">{pub.journal}</span>{pub.year ? ` • ${pub.year}` : ''}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Faculty Section */}
      {relatedFaculty.length > 0 && (
        <section className="py-8 sm:py-12 md:py-16 bg-gray-100">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
            <h2 className={`${graduateFont.className}  text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8`}>Related Faculty Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedFaculty.map((f, i) => (
                <Link
                  key={`${f.slug}-${i} `}
                  href={`/faculty/${f.slug}`}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center gap-4"
                >
                  <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-cyan-500 flex-shrink-0 relative">
                    <Image
                      src={f.image || '/placeholder.jpg'}
                      alt={`${f.firstName} ${f.lastName}`}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover"
                      priority={false}
                    />
                  </motion.div>

                  <div className="text-center">
                    <h3 className={`${graduateFont.className} font-bold text-gray-900 text-lg`}>{f.firstName} {f.lastName}</h3>
                    <p className={`${robotoFont.className} text-sm text-gray-600`}>{f.designation}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

"use client";

import React, { useMemo, useState } from "react";
import Header from "../components/Header/Header";
import Hero from "../components/FacultynStaff/hero";
import FacultySearch from "../components/FacultynStaff/FacultySearch";
import FacultyCard from "../components/FacultynStaff/FacultyCard";
import { Container } from "@mui/material";

const FACULTY = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    title: "Professor",
    dept: "Computer Engineering",
    tags: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    email: "rajesh.sharma@niet.edu.np",
    type: "Full-Time",
    courses: ["Artificial Intelligence", "Deep Learning", "Pattern Recognition"],
    img: "/guy.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Patel",
    title: "Associate Professor",
    dept: "Biomedical Engineering",
    tags: ["Biomedical Instrumentation", "Prosthetics"],
    email: "priya.patel@niet.edu.np",
    type: "Full-Time",
    courses: ["Artificial Intelligence", "Deep Learning", "Pattern Recognition"],
    img: "/girl.jpg",
  },
  {
    id: 3,
    name: "Mr. Amit Kumar",
    title: "Assistant Professor",
    dept: "Computer Engineering",
    tags: ["Embedded Systems", "IoT", "Network Security"],
    email: "amit.kumar@niet.edu.np",
    type: "Full-Time",
    courses: ["AI", "Deep Learning", "Pattern Recognition"],
    img: "/guy.jpg",
  },
  {
    id: 4,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
    courses: ["Biomedical Sensors", "Prosthetic Systems", "Medical Device Design"],
    img: "/girl.jpg",
  },
  {
    id: 5,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
    courses: [
      "Artificial Intelligence",
      "Deep Learning",
      "Pattern Recognition"
    ],
    img: "/girl.jpg",
  },
  {
    id: 6,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
    courses: [
      "Artificial Intelligence",
      "Deep Learning",
      "Pattern Recognition"
    ],
    img: "/guy.jpg",
  },
  {
    id: 7,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
    courses: [
      "Artificial Intelligence",
      "Deep Learning",
      "Pattern Recognition"
    ],
    img: "/girl.jpg",
  },
  {
    id: 8,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
     courses: [
      "Biomedical Sensors",
      "Prosthetic Systems",
      "Medical Device Design"
    ],
    img: "/guy.jpg",
  },
  {
    id: 9,
    name: "Dr. Sanjay Thapa",
    title: "Visiting Professor",
    dept: "Biomedical Engineering",
    tags: ["Clinical Engineering", "Medical Imaging"],
    email: "sanjay.thapa@niet.edu.np",
    type: "Part-Time",
     courses: [
      "Biomedical Sensors",
      "Prosthetic Systems",
      "Medical Device Design"
    ],
    img: "/girl.jpg",
  },
  // more...
];

// --------------------------------------------------

export default function FacultyPage() {
  const [query, setQuery] = useState("");
  const [course, setCourse] = useState("All Courses"); // Initialize to default filter value
  const [type, setType] = useState("All Types");     // Initialize to default filter value
  const [dept, setDept] = useState("All Departments"); // New: State for department filter


  // GET UNIQUE COURSE LIST
  const allCourses = useMemo(() => {
    const unique = new Set();
    FACULTY.forEach(f => f.courses.forEach(c => unique.add(c)));
    return ["All Courses", ...unique];
  }, []);

  // GET UNIQUE DEPARTMENT LIST
  const allDepts = useMemo(() => {
    const unique = new Set();
    FACULTY.forEach((p) => unique.add(p.dept));
    return ["All Departments", ...unique];
  }, []);


  // FILTER LOGIC
  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();

    return FACULTY.filter((f) => {
      // Search Query Filter
      const matchQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.title.toLowerCase().includes(q) ||
        f.dept.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q));

      // Course Filter
      const matchCourse =
        course === "All Courses" || f.courses.includes(course);

      // Type Filter
      const matchType =
        type === "All Types" || f.type === type;
        
      // New: Department Filter
      const matchDept = 
        dept === "All Departments" || f.dept === dept;

      return matchQuery && matchCourse && matchType && matchDept;
    });
  }, [query, course, type, dept]); // Added 'dept' to dependency array

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <section className="py-16 bg-white">
        <Container maxWidth="lg">

          {/* PAGE HEADER */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-gray-900">Our Faculty</h1>
            <p className="text-gray-600">Highly qualified educators and researchers</p>
          </div>

          {/* SEARCH + FILTERS - Props Updated */}
          <FacultySearch
            query={query}
            setQuery={setQuery}
            
            // Renamed prop to 'selectedCourse' to match child component
            selectedCourse={course} 
            setSelectedCourse={setCourse}
            
            // Renamed prop to 'types' to match child component
            types={type} 
            setType={setType}
            
         
            dept={dept}
            setDept={setDept}
            
            allCourses={allCourses}
            allDepts={allDepts}
          />

          {/* STATS */}
          <div className="flex justify-center gap-10 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold">{filtered.length}</div>
              <div className="text-xs text-gray-500">Results</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold">{FACULTY.length}</div>
              <div className="text-xs text-gray-500">Total Faculty</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((person) => (
              <FacultyCard key={person.id} person={person} />
            ))}
          </div>

        </Container>
      </section>
    </main>
  );
}
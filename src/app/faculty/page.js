"use client";
import React, { useState, useMemo } from "react";
import { FiUsers, FiBookOpen, FiBriefcase } from 'react-icons/fi';
import Header from "../components/Header/Header";
import Hero from "../components/FacultynStaff/hero";
import FacultyCard from "../components/FacultynStaff/FacultyCard";
import FacultyFilters from "../components/FacultynStaff/FacultySearch";
import { facultyData } from "../../data/faculty";

export default function FacultyPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleClear = () => {
    setSearchQuery("");
    setSelectedProgram("all");
    setSelectedCourse("all");
    setSelectedType("all");
    setSelectedCategory("all");
  };

  const filteredFaculty = useMemo(() => {
    return facultyData.filter(f => {
      const fullName = `${f.title || ""} ${f.firstName || ""} ${f.middleName || ""} ${f.lastName || ""}`.trim();

      const matchesSearch =
        !searchQuery ||
        `${fullName} ${f.designation || ""} ${f.department || ""} ${f.specialization || ""}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesType = selectedType === "all" || f.facultyType === selectedType;
      const matchesCategory = selectedCategory === "all" || f.category === selectedCategory;
      const matchesProgram = selectedProgram === "all" || (f.courses || []).some(c => c.program === selectedProgram);
      const matchesCourse = selectedCourse === "all" || (f.courses || []).some(c => c.id === selectedCourse);

      return matchesSearch && matchesType && matchesCategory && matchesProgram && matchesCourse;
    }).sort((a, b) => (a.order || 999) - (b.order || 999));
  }, [searchQuery, selectedProgram, selectedCourse, selectedType, selectedCategory]);

  const teachingFaculty = filteredFaculty.filter(f => f.category === 'teaching');
  const boardMembers = filteredFaculty.filter(f => f.category === 'board-member');
  const nonTeachingStaff = filteredFaculty.filter(f => ['administrative', 'support', 'non-teaching'].includes(f.category));

  return (
    <>
      <Header />
      <Hero />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <FacultyFilters
            faculty={facultyData}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedProgram={selectedProgram}
            setSelectedProgram={setSelectedProgram}
            selectedCourse={selectedCourse}
            setSelectedCourse={setSelectedCourse}
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onClear={handleClear}
          />

          {/* Tabs */}
          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
  
  {/* All Filter Tab */}
         <div 
          onClick={() => setSelectedCategory('all')} 
          className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
            selectedCategory === 'all' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-transparent text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FiUsers className="text-xl" />
          <span>All</span>
          <span className="text-sm font-medium text-gray-500">({filteredFaculty.length})</span>
        </div>

        {/* Teaching Filter Tab */}
        <div 
          onClick={() => setSelectedCategory('teaching')} 
          className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
            selectedCategory === 'teaching' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-transparent text-gray-700 hover:bg-gray-100'
          }`}
        >
          <FiBookOpen className="text-xl" />
          <span>Teaching</span>
          <span className="text-sm font-medium text-gray-500">({teachingFaculty.length})</span>
        </div>

        {/* Staff Filter Tab (Grouped Administrative, Support, Board Members) */}
        <div 
          onClick={() => setSelectedCategory('staff')} 
          className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ${
            selectedCategory === 'staff' ? 'bg-blue-50 border-blue-500 text-blue-700 font-semibold' : 'bg-transparent text-gray-700 hover:bg-gray-100'
          }`}
        >
            <FiBriefcase className="text-xl" />
            <span>Staff</span>
            <span className="text-sm font-medium text-gray-500">({nonTeachingStaff.length + boardMembers.length})</span>
            </div>

            </div>
            </div>

            {filteredFaculty.length === 0 ? (
              <div className="text-center py-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">No faculty members found</h3>
                <p className="text-lg text-gray-600 max-w-md mx-auto">Try adjusting your search or filter criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredFaculty.map(f => <FacultyCard key={f.id} faculty={f} />)}
              </div>
            )}
          </div>
        </div>
    </>
  );
}

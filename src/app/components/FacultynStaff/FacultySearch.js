"use client";
import React from "react";
import { TextField, MenuItem, Select, InputLabel, FormControl } from "@mui/material";

export default function FacultySearch({
  query,
  setQuery,
  dept,
  setDept,
  types, 
  setType, 
  allDepts,
  allCourses,
  selectedCourse, 
  setSelectedCourse, 
}) {
  return (
    <div className="w-full flex flex-col lg:flex-row gap-4">

      {/* Search Bar */}
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search faculty..."
        variant="outlined"
        size="small"
        className="flex-1"
      />

      {/* Courses Dropdown */}
      <FormControl size="small" className="min-w-[180px]">
        <InputLabel id="course-select">All Courses</InputLabel>
        <Select
          labelId="course-select"
          
          value={selectedCourse} 
          label="All Courses"
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          
          <MenuItem value="All Courses">All Courses</MenuItem> 
          {allCourses.slice(1).map((c) => ( 
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Types Dropdown */}
      <FormControl size="small" className="min-w-[150px]">
        <InputLabel id="type-select">All Types</InputLabel>
        <Select
          labelId="type-select"
        
          value={types}
          label="All Types"
          onChange={(e) => setType(e.target.value)}
        >
          {/* Menu item value must match the initial state/All value: "All Types" */}
          <MenuItem value="All Types">All Types</MenuItem> 
          <MenuItem value="Full-Time">Full-Time</MenuItem>
          <MenuItem value="Part-Time">Part-Time</MenuItem>
        </Select>
      </FormControl>

      {/* Department Dropdown */}
      <FormControl size="small" className="min-w-[150px]">
        <InputLabel id="dept-select">Departments</InputLabel>
        <Select
          labelId="dept-select"
          value={dept}
          label="Departments"
          onChange={(e) => setDept(e.target.value)}
        >
          <MenuItem value="All Departments">All Departments</MenuItem> 
          {allDepts.slice(1).map((d) => (
            <MenuItem key={d} value={d}>{d}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

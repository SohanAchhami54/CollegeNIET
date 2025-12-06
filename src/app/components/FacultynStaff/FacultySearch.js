// 'use client';
// import React, { useMemo } from 'react';
// import { FiSearch, FiX } from 'react-icons/fi';
// import TextField from '@mui/material/TextField';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import IconButton from '@mui/material/IconButton';
// import { graduateFont, robotoFont } from '@/font';

// export default function FacultySearch({
//   faculty,
//   searchQuery,
//   setSearchQuery,
//   selectedProgram,
//   setSelectedProgram,
//   selectedCourse,
//   setSelectedCourse,
//   selectedType,
//   setSelectedType,
//   selectedCategory,
//   setSelectedCategory,
//   onClear
// }) {
//   // all courses
//   const allCourses = useMemo(() => {
//     const map = new Map();
//     (faculty || []).flatMap(f => f.courses || []).forEach(c => map.set(c.id, c));
//     return Array.from(map.values()).sort((a, b) => (a.name || '').localeCompare(b.name));
//   }, [faculty]);

//   // all programs
//   const allPrograms = useMemo(() => {
//     return Array.from(new Set((faculty || []).flatMap(f => (f.courses || []).map(c => c.program)))).sort();
//   }, [faculty]);

//   return (
//     <div className="space-y-4">
//       <div className="max-w-2xl mx-auto relative">
//         <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         <TextField 
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search faculty..."
//           variant="outlined"
//           size="small"
//           fullWidth
//          InputProps={{
//         style: { 
//             paddingLeft: 40, 
//             height: 48, 
//             borderRadius: 12 
//         },
//         inputProps: {
//         className: `${robotoFont.className}`, 
//     }
//     }}
// />
//         {searchQuery && (
//           <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 p-1.5 rounded-lg hover:bg-gray-100">
//             <FiX />
//           </button>
//         )}
//       </div>

//       <div className="flex flex-wrap items-center justify-center gap-3">
//         {/* Program */}
//         <FormControl size="small" className="min-w-[250px]">
//           <Select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}
//             sx={{
//               minWidth: 250,

//             '& .MuiOutlinedInput-notchedOutline': {
//             borderRadius: '12px',   
//              },
//             '&:hover': {
//             boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
//              }
//             }}
//             >
//             <MenuItem value="all">
//             <span className={`font-semibold ${robotoFont.className} `}>
//             All Programs
//             </span>
//             </MenuItem>
//             {allPrograms.map(p => <MenuItem key={p} value={p}>{p}</MenuItem>)}
//           </Select>
//         </FormControl>

//         {/* Course */}
//    <FormControl size="small" className="min-w-[160px]">
//   <Select
//     value={selectedCourse}
//     onChange={(e) => setSelectedCourse(e.target.value)}
//     sx={{
//       minWidth:350,

//       '& .MuiOutlinedInput-notchedOutline': {
//         borderRadius: '12px',
//       },
      
//     }}
//   >

//     <MenuItem value="all"> 
//     <span className={`font-semibold ${robotoFont.className} `}>
//       All Courses
//     </span>
//     </MenuItem>

//     {allCourses.map(c => (
//       <MenuItem key={c.id} value={c.id}>
//         {c.code ? `${c.code}: ` : ''}
//         {c.name.length > 40 ? `${c.name.substring(0, 40)}...` : c.name}
//       </MenuItem>
//     ))}
//   </Select>
// </FormControl>

//         {/* Type */}
//         <FormControl size="small" className="min-w-[140px]">
//           <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
//                   sx={{
//                     minWidth:160,
//                 '& .MuiOutlinedInput-notchedOutline': {
//                       borderRadius: '12px',  
//                 },
//                   '&:hover': {
//                   boxShadow: '0 0 12px rgba(0, 0, 0, 0.1)',
//                 }
//                   }}
//             >
//             <MenuItem value="all">
//             <span className={`font-semibold ${robotoFont.className} `}>
//             All Types

//             </span>
//             </MenuItem>
//             <MenuItem value="full-time">Full-Time</MenuItem>
//             <MenuItem value="part-time">Part-Time</MenuItem>
//             <MenuItem value="visiting">Visiting</MenuItem>
//           </Select>
//         </FormControl>

//         {/* Category */}
//          <FormControl size="small" className="min-w-[160px]">
//           <Select value={selectedCategory} onChange={(e) =>             setSelectedCategory(e.target.value)}
//                   sx={{
//                   '& .MuiOutlinedInput-notchedOutline': {
//                   borderRadius: '12px',   // change value (8px / 12px / 16px)
//                   },
//                     '&:hover': {
//                     boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08)',
//                   }
//                 }}
            
//             >
//             <MenuItem value="all">
//             <span className={`font-semibold ${robotoFont.className} `}>
//             All Categories
//             </span>
//             </MenuItem>
//             <MenuItem value="teaching">Teaching</MenuItem>
//             <MenuItem value="board-member">Board Members</MenuItem>
//             <MenuItem value="administrative">Administrative</MenuItem>
//             <MenuItem value="support">Support</MenuItem>
//           </Select>
//         </FormControl>

//         {(selectedType !== 'all' || selectedCategory !== 'all' || selectedCourse !== 'all' || selectedProgram !== 'all' || searchQuery) && (
//           <IconButton onClick={onClear} className="border rounded-lg">
//             <FiX />
//           </IconButton>
//         )}

        
//       </div>
//     </div>
//   );
// }

'use client';
import React, { useMemo } from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
import { graduateFont, robotoFont } from '@/font';

// Smooth slow fade like NIET
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FacultySearch({
  faculty,
  searchQuery,
  setSearchQuery,
  selectedProgram,
  setSelectedProgram,
  selectedCourse,
  setSelectedCourse,
  selectedType,
  setSelectedType,
  selectedCategory,
  setSelectedCategory,
  onClear
}) {
  // all courses
  const allCourses = useMemo(() => {
    const map = new Map();
    (faculty || []).flatMap(f => f.courses || []).forEach(c => map.set(c.id, c));
    return Array.from(map.values()).sort((a, b) => (a.name || '').localeCompare(b.name));
  }, [faculty]);

  // all programs
  const allPrograms = useMemo(() => {
    return Array.from(new Set((faculty || []).flatMap(f => (f.courses || []).map(c => c.program)))).sort();
  }, [faculty]);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-4"
    >

      {/* Search bar*/}
      <motion.div variants={fadeUp} className="max-w-2xl mx-auto relative">
        <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <TextField 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search faculty..."
          variant="outlined"
          size="small"
          fullWidth
         InputProps={{
            style: { paddingLeft: 40, height: 48, borderRadius: 12 },
            inputProps: { className: `${robotoFont.className}` }
          }}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} className="absolute right-3 top-2.5 p-1.5 rounded-lg hover:bg-gray-100">
            <FiX />
          </button>
        )}
      </motion.div>

      {/* Filters */}
      <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3">

        {/* Program */}
        <FormControl size="small" className="min-w-[250px]">
          <Select value={selectedProgram} onChange={(e) => setSelectedProgram(e.target.value)}
            sx={{
              minWidth: 250,
              '& .MuiOutlinedInput-notchedOutline': { borderRadius: '12px' },
              '&:hover': { boxShadow: '0 0 12px rgba(0,0,0,0.1)' }
            }}
          >
            <MenuItem value="all">
              <span className={`font-semibold ${robotoFont.className}`}>All Programs</span>
            </MenuItem>
            {allPrograms.map(p => <MenuItem key={p} value={p}>{p}</MenuItem>)}
          </Select>
        </FormControl>

        {/* Course */}
        <FormControl size="small" className="min-w-[160px]">
          <Select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            sx={{
              minWidth: 350,
              '& .MuiOutlinedInput-notchedOutline': { borderRadius: '12px' }
            }}
          >
            <MenuItem value="all">
              <span className={`font-semibold ${robotoFont.className}`}>All Courses</span>
            </MenuItem>

            {allCourses.map(c => (
              <MenuItem key={c.id} value={c.id}>
                {c.code ? `${c.code}: ` : ''}
                {c.name.length > 40 ? `${c.name.substring(0, 40)}...` : c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Type */}
        <FormControl size="small" className="min-w-[140px]">
          <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}
            sx={{
              minWidth: 160,
              '& .MuiOutlinedInput-notchedOutline': { borderRadius: '12px' },
              '&:hover': { boxShadow: '0 0 12px rgba(0,0,0,0.1)' }
            }}
          >
            <MenuItem value="all">
              <span className={`font-semibold ${robotoFont.className}`}>All Types</span>
            </MenuItem>
            <MenuItem value="full-time">Full-Time</MenuItem>
            <MenuItem value="part-time">Part-Time</MenuItem>
            <MenuItem value="visiting">Visiting</MenuItem>
          </Select>
        </FormControl>

        {/* Category */}
        <FormControl size="small" className="min-w-[160px]">
          <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
            sx={{
              '& .MuiOutlinedInput-notchedOutline': { borderRadius: '12px' },
              '&:hover': {
                boxShadow:
                  '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08)'
              }
            }}
          >
            <MenuItem value="all">
              <span className={`font-semibold ${robotoFont.className}`}>All Categories</span>
            </MenuItem>
            <MenuItem value="teaching">Teaching</MenuItem>
            <MenuItem value="board-member">Board Members</MenuItem>
            <MenuItem value="administrative">Administrative</MenuItem>
            <MenuItem value="support">Support</MenuItem>
          </Select>
        </FormControl>

        {(selectedType !== 'all' || selectedCategory !== 'all' || selectedCourse !== 'all' || selectedProgram !== 'all' || searchQuery) && (
          <IconButton onClick={onClear} className="border rounded-lg">
            <FiX />
          </IconButton>
        )}
      </motion.div>
    </motion.div>
  );
}

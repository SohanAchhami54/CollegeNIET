"use client";
import React from 'react';
import Link from 'next/link';
import { FiMail, FiBook, FiUser, FiPhone } from 'react-icons/fi';
import { graduateFont, robotoFont } from '@/font';  

export default function FacultyCard({ faculty }) {
  if (!faculty) {
    console.warn('FacultyCard rendered with undefined faculty prop');
    return null;
  }

  const {
    title = '',
    firstName = '',
    middleName = '',
    lastName = '',
    courses = [],
    facultyType,
    image,
    designation = '',
    department = '',
    specialization = '',
    contact = {},
    slug
  } = faculty;

  const fullName = `${title} ${firstName} ${middleName} ${lastName}`.replace(/\s+/g, ' ').trim();
  const uniquePrograms = Array.from(new Set(courses.map(c => c.program).filter(Boolean)));

  return (
    <Link href={`/faculty-and-staff/${slug || '#'}`} className="block">
      <article className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-cyan-400 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-cyan-100 group-hover:border-cyan-400 transition-all duration-300 shadow-lg">
              {image ? (
                <img
                  src={image}
                  alt={fullName || 'Faculty member'}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                  <FiUser className="text-white w-10 h-10" />
                </div>
              )}
            </div>

            {facultyType && (
              <div className="absolute -bottom-2 right-0 bg-white rounded-full px-3 py-1 text-xs font-bold border-2 border-cyan-400 shadow-md">
                {facultyType === 'full-time' ? 'Full-Time' : facultyType === 'part-time' ? 'Part-Time' : 'Visiting'}
              </div>
            )}
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors duration-300">{fullName}</h3>
          <p className="text-cyan-600 font-medium mb-2 text-sm">{designation}</p>

          {department && (
            <p className="text-sm text-gray-600 mb-2 flex items-center gap-2">
              <span className="text-gray-400">{department}</span>
            </p>
          )}

          {specialization && (
            <p className="text-sm text-gray-500 mb-3 line-clamp-2">{specialization}</p>
          )}

          {uniquePrograms.length > 0 && (
            <div className="mb-3 w-full flex justify-center flex-wrap gap-2">
              {uniquePrograms.map((p, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-50 border border-blue-100">{p}</span>
              ))}
            </div>
          )}

          {courses.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 px-3 py-2 rounded-lg bg-gray-50 w-full justify-center">
              <FiBook className="w-4 h-4 text-cyan-600" />
              <span className="font-medium">{courses.length} {courses.length === 1 ? 'Course' : 'Courses'}</span>
            </div>
          )}

          {(contact?.email || contact?.phone) && (
            <div className="flex flex-col items-center gap-1 text-sm text-gray-500 mt-auto pt-3 border-t border-gray-100 w-full">
              {contact.email && (
                <div className="flex items-center gap-2 truncate w-full justify-center" title={contact.email}>
                  <FiMail className="w-4 h-4" />
                  <span>{contact.email}</span>
                </div>
              )}
              {contact.phone && (
                <div className="flex items-center gap-2 truncate w-full justify-center" title={contact.phone}>
                  <FiPhone className="w-4 h-4" />
                  <span>{contact.phone}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

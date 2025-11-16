"use client"; 

import { useState } from "react";
import {
  Card,
  CardContent,
  Avatar,
  Chip,
  Typography,
  Collapse,
  IconButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FacultyCard({ person }) {
  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 hover:shadow-2xl hover:border-blue-400 transition-all duration-500 cursor-pointer flex flex-col items-center text-center p-6">
      <div className="overflow-hidden rounded-full mb-4">
        <Avatar
          alt={person.name}
          src={person.img}
          sx={{ width: 100, height: 100 }}
          className="ring-2 ring-gray-100 hover:scale-125 transition-transform duration-500"
        />
      </div>
      <Typography variant="h6" className="font-bold text-gray-900 text-sm">
        {person.name}
      </Typography>
      <Typography variant="caption" className="text-blue-600 font-semibold mt-1 text-xs">
        {person.title}
      </Typography>
      <Typography variant="caption" className="text-gray-500 mt-1 text-xs">
        {person.dept}
      </Typography>
      <div className="mt-2 flex flex-wrap gap-1 justify-center">
        {person.tags?.map(tag => (
          <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ height: 20, fontSize: "0.65rem" }} />
        ))}
      </div>
      <div className="mt-3 w-full border-t border-gray-100 pt-3 text-xs text-gray-600">
        <a href={`mailto:${person.email}`} className="text-blue-600 hover:underline truncate text-xs">
          {person.email}
        </a>
      </div>
    </Card>
  );
}

import React from "react";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Button } from "@mui/material";
const AdmissionSection = () => {
  const stat = [
    {
      icon: DescriptionOutlinedIcon,
      topic: "Apply Online",
      description:
        "Submit your application and documents through our streamedlined portal.",
    },
    {
      icon: BorderColorOutlinedIcon,
      topic: "Apply Online",
      description:
        "Submit your application and documents through our streamedlined portal.",
    },
    {
      icon: ChatBubbleOutlineOutlinedIcon,
      topic: "Apply Online",
      description:
        "Submit your application and documents through our streamedlined portal.",
    },
    {
      icon: SchoolOutlinedIcon,
      topic: "Apply Online",
      description:
        "Submit your application and documents through our streamedlined portal.",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-br from-blue-500 to-blue-800 ">
      <div className="p-3 m-3 flex flex-col items-center justify-center">
        <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl text-white mt-15 ">
          Your Journey to NIET
          <br />
          <span className="text-cyan-400 block text-center">Starts Here</span>
        </h1>
        <p className="mt-4 text-sm sm:text-md md:text-lg lg:text-xl text-gray-300">
          Four simple steps to transform into a world-class engineer.
        </p>
      </div>
      <div className="m-2 p-2 sm:p-2 sm:m-2 lg:m-3 lg:3 flex flex-col md:flex-row items-center justify-around gap-1 md:gap-3 lg:gap-4">
        {stat.map((stats, index) => {
          const Icon = stats.icon;
          return (
            <div key={index}
             className="border border-gray-200 flex flex-col border relative rounded-3xl  p-3 m-3 sm:m-2 lg:p-3 lg:m-3 lg:mt-7  overflow-visible">
              <div className="absolute -top-4 -left-4  w-12 h-12 rounded-2xl  backdrop-blur-sm border border-white/20 flex items-center justify-center ">
                <span className="text-2xl text-white/60">0{index + 1}</span>
              </div>

              <div className="h-17  w-17 border-0 rounded-2xl bg-white flex items-center justify-center m-4 p-4 ">
                <Icon color="primary" sx={{ height: 35, width: 35 }} />
              </div>
              <h1 className="text-gray-300 text-md md:text-lg lg:text-xl lg:p-1 lg:m-1">
                {stats.topic}
              </h1>
              <p className="text-gray-300 lg:p-1 lg:m-1">{stats.description}</p>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex flex-col items-center justify-center p-2">
          <Button
            sx={{
              backgroundColor: "white",
              borderRadius: "9999px",
              color: "#0b4c78",
              border: "1px solid #d1d5db",
              px: 2,
              fontWeight: "bold",
              height: 56,
              fontSize: "1.125rem",

              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            Start Your Application
            <ArrowForwardIcon
              sx={{
                ml: 2,
                height: "20px",
                width: "20px",
              }}
            />
          </Button>
          <p className="p-2 text-white text-sm mt-4 mb-8">
            Application for 2026 admission open. Early deadline:March 31,2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdmissionSection;

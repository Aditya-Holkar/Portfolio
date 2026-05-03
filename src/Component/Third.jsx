import React from "react";
import { FaNode } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { FaNpm } from "react-icons/fa";
import { PiFileSql } from "react-icons/pi";
import { FaGit } from "react-icons/fa";
import { SiDaisyui } from "react-icons/si";
import { Button } from "./Button";
import { SiGsap } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { TbPrompt } from "react-icons/tb";

export const Third = () => {
  const techStack = [
    {
      icon: <FaReact size={30} />,
      name: "React",
      description: "A JavaScript library for building user interfaces",
    },
    {
      icon: <RiTailwindCssFill size={30} />,
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development",
    },
    {
      icon: <SiGsap size={30} />,
      name: "GSAP",
      description: "High-performance JavaScript animation library for creating stunning web animations",
    },
    {
      icon: <SiSupabase size={30} />,
      name: "Supabase",
      description: "Open-source Firebase alternative with PostgreSQL database, real-time subscriptions, authentication, and auto-generated APIs",
    },
    {
      icon: <SiFirebase size={30} />,
      name: "Firebase",
      description: "A platform developed by Google for creating mobile and web applications",
    },
    {
      icon: <FaGit size={30} />,
      name: "Git",
      description: "A distributed version control system for tracking changes in source code",
    },
    // {
    //   icon: <TbBrandVite size={30} />,
    //   name: "Vite",
    //   description:
    //     "A build tool that significantly improves the frontend development experience",
    // },
    // {
    //   icon: <FaNpm size={30} />,
    //   name: "NPM",
    //   description: "A package manager for JavaScript programming language",
    // },
    {
      icon: <PiFileSql size={30} />,
      name: "SQL",
      description: "A domain-specific language used to manage and query relational databases",
    },

    {
      icon: <SiDaisyui size={30} />,
      name: "DaisyUI",
      description: "A plugin for Tailwind CSS that adds component classes",
    },
    {
      icon: <TbPrompt size={30} />,
      name: "Prompt Engineering",
      description: "Optimizing AI interactions through carefully crafted prompts for precise and reliable outputs",
    },
  ];

  return (
    <div className="flex flex-row gap-4 max-md:flex-col max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Skills</h1>

      <div className="flex flex-5 flex-col gap-6">
        {techStack.map(function (params, idx) {
          return (
            <div className="flex flex-row gap-4" key={idx}>
              <div className="badge badge-ghost h-15 w-15 border-solid border-[#fcfcfc] bg-[#0d0d0d]">{params.icon}</div>
              <div className="content-center items-center">
                <div className="font-bold">{params.name}</div>
                <div>{params.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

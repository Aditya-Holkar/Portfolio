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
      icon: <SiFirebase size={30} />,
      name: "Firebase",
      description:
        "A platform developed by Google for creating mobile and web applications",
    },
    {
      icon: <TbBrandVite size={30} />,
      name: "Vite",
      description:
        "A build tool that significantly improves the frontend development experience",
    },
    {
      icon: <FaNpm size={30} />,
      name: "NPM",
      description: "A package manager for JavaScript programming language",
    },
    {
      icon: <PiFileSql size={30} />,
      name: "SQL",
      description:
        "A domain-specific language used to manage and query relational databases",
    },
    {
      icon: <FaGit size={30} />,
      name: "Git",
      description:
        "A distributed version control system for tracking changes in source code",
    },
    {
      icon: <SiDaisyui size={30} />,
      name: "DaisyUI",
      description: "A plugin for Tailwind CSS that adds component classes",
    },
  ];

  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Skills</h1>

      <div className="flex flex-col gap-2 flex-5">
        {techStack.map(function (params, idx) {
          return (
            <div className="flex flex-row gap-4" key={idx}>
              <div className="badge badge-neutral badge-ghost h-15 w-15 bg-[#0d0d0d] border-solid border-[#fcfcfc]">
                {params.icon}
              </div>
              <div className=" content-center">
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

import React from "react";
import { FaReact, FaNode, FaJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
export const Skills = () => {
  let lst = [
    {
      icon: <FaReact size={20} />,
      name: "React",
      description: "Frontend library for building user interfaces",
    },
    {
      icon: <RiTailwindCssFill size={20} />,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
    },
    {
      icon: <FaNode size={20} />,
      name: "Node.js",
      description:
        "JavaScript runtime for building scalable backend applications",
    },
    {
      icon: <SiFirebase size={20} />,
      name: "Firebase",
      description: "Backend platform for authentication, database, and hosting",
    },
    {
      icon: <FaJs size={20} />,
      name: "JavaScript",
      description: "Core programming language for web development",
    },
  ];

  return (
    <div className="  text-[#8d8d8d] flex flex-row max-md:flex-col gap-20 max-md:gap-3">
      <div>Skills</div>

      <div className="flex flex-col gap-4">
        {lst.map(function (elem, idx) {
          return (
            <div className="flex gap-4 items-center">
              <div
                key={idx}
                className="p-5 border border-collapse rounded-s text-[#fdfdfd] border-[#8d8d8d] hover:border-[#fdfdfd] transition "
              >
                {elem.icon}
              </div>

              <div className="flex flex-col">
                <h1 className="text-[#fdfdfd]">{elem.name}</h1>
                <div>{elem.description}</div>
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
    </div>
  );
};

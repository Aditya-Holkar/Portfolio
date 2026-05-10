import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const dt = [
  { icon: <FaGithub />, lnk: "https://github.com/Aditya-Holkar" },
  {
    icon: <FaLinkedin />,
    lnk: "https://www.linkedin.com/in/aditya-holkar-life-is--unfair/",
  },
  { icon: <SiLeetcode />, lnk: "https://leetcode.com/u/aditya-holkar/" },
];

export const Second = () => {
  return (
    <div className="flex flex-row gap-4 max-md:flex-col max-md:gap-0">
      <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">Socials</div>
      <div className="flex flex-5 flex-row gap-5">
        {dt.map(function (params, idx) {
          return (
            <a href={params.lnk} target="/" className="" key={idx}>
              <button className="border-collapse cursor-pointer rounded-full border p-4">{params.icon}</button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const dt = [
  { icon: <FaGithub />, lnk: "https://github.com/Aditya-Holkar" },
  {
    icon: <FaLinkedin />,
    lnk: "https://www.linkedin.com/in/aditya-holkar-277425277/",
  },
  { icon: <SiLeetcode />, lnk: "https://leetcode.com/u/aditya-holkar/" },
];

export const Second = () => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <div className="badge badge-neutral badge-outline flex-1">Socials</div>
      <div className="flex flex-row flex-5 gap-5">
        {dt.map(function (params, idx) {
          return (
            <a href={params.lnk} target="/" className="" key={idx}>
              <button className=" p-4 rounded-full border border-collapse cursor-pointer">
                {params.icon}
              </button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

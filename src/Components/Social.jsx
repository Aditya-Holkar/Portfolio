import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Social = () => {
  let lst = [
    <FaGithub size={20} />,
    <FaInstagram size={20} />,
    <FaLinkedin size={20} />,
  ];

  return (
    <div className="  text-[#8d8d8d] flex flex-row max-md:flex-col gap-20 max-md:gap-3">
      <div>Social</div>

      <div className="flex flex-row gap-4">
        {lst.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="p-5 border border-collapse rounded-full text-[#fdfdfd] border-[#8d8d8d] hover:border-[#fdfdfd] transition "
            >
              {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

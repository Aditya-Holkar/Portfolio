import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const Second = () => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <div className="badge badge-neutral badge-outline flex-1">Socials</div>
      <div className="flex flex-row flex-5 gap-5">
        {[<FaGithub />, <FaLinkedin />, <SiLeetcode />].map(
          function (params, idx) {
            return (
              <button
                key={idx}
                className=" p-4 rounded-full border border-collapse"
              >
                {params}
              </button>
            );
          },
        )}
      </div>
    </div>
  );
};

import React from "react";
import { Button } from "./Button";

export const About = () => {
  return (
    <div className="text-[#fdfdfd] flex flex-row justify-start mt-[10%] gap-5 max-md:flex-wrap">
      <div className="max-w-1/7 max-h-1/7">
        <img src="../../public/img1.png" alt="" />
      </div>
      <div className="max-w-full">
        <div className="font-bold text-2xl  mb-4">
          Beginner React Developer | Skilled in React, Tailwind CSS, and
          Firebase. Expert at connecting APIs and building secure user login
          systems. Looking for my first professional role to build the future of
          the web.
        </div>
        <div className="text[#fdfdfd] flex flex-row gap-2 max-md:flex-col max-md:w-full max-md:flex-wrap">
          <Button cls={"text-center bg-[#fdfdfd] text-[#0D0D0D] p-4"}>
            See the Projects
          </Button>
          <Button cls={"text-center p-4 "}>onkardhere92@gmail.com</Button>
        </div>
      </div>
    </div>
  );
};

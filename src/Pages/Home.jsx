import React from "react";
import { About } from "../Components/About";
import { Social } from "../Components/Social";
import { Skills } from "../Components/Skills";
import { Education } from "../Components/Education";

export const Home = () => {
  return (
    <div className="p-4 flex flex-col gap-15 ">
      <About />
      <Social />
      <Skills />
      <Education />
    </div>
  );
};

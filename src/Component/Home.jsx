import React from "react";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";
import { Fifth } from "./Fifth";
import { Sixth } from "./Sixth";

export const Home = () => {
  return (
    <div className="flex flex-col gap-14">
      <First />
      <Second />
      <Sixth />
      <Third />
      <Fourth />
      <Fifth />
    </div>
  );
};

import React from "react";
import { Link } from "react-router";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <div className=" font-bold text-[#8D8D8D] flex flex-col min-w-1/5 max-md:hidden justify-between min-h-screen p-4 ">
      <div className="text-[#fdfdfd] font-bold text-xl text-nowrap">
        Onkar Dhere
      </div>
      <div className="flex flex-col gap-3 ">
        <Link to={"/"}>Home</Link>
        <Link to={"/Projects"}>Projects</Link>
      </div>
      <Button cls={"max-w-fit  text-[#fdfdfd] px-3.5 py-1.5 text-xs "}>
        Pune 10:10 AM{" "}
      </Button>
      {/* <div className="text-[#fdfdfd] text-xs leading-2 font-normal border border-2  max-w-fit px-3.5 py-1.5 rounded-4xl">
        Pune 10:10 AM
      </div> */}
    </div>
  );
};

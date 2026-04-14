import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [but, setBut] = useState(false);

  useEffect(() => {
    if (but) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [but]);

  const menu = (
    <div>
      {but && (
        <div className="h-screen bg-[#0d0d0d] flex flex-col p-4 ">
          <Link
            to={"/"}
            onClick={() => {
              setBut(!but);
            }}
            className="hover:bg-[#fcfcfc] hover:text-[#0d0d0d] transition-all"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed">
      <div className=" min-h-screen flex flex-col justify-between p-4 max-md:hidden">
        <div>
          <h1>Aditya Holkar</h1>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>Pune time</div>
      </div>

      <div className="min-md:hidden flex flex-row justify-between w-screen h-20 items-center px-4 pr-6 bg-[#0d0d0d]">
        <div>Aditya Holkar</div>

        <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            setBut(!but);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-5 w-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div>{menu}</div>
    </div>
  );
};

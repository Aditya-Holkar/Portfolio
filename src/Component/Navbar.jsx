import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export const Navbar = () => {
  const [but, setBut] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (but) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [but]);

  // Real-time clock for Pune
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-IN", options));
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const menu = (
    <div>
      {but && (
        <div className="flex h-screen flex-col bg-[#0d0d0d] p-4 font-bold">
          <Link
            to={"/"}
            onClick={() => {
              setBut(!but);
            }}
            className="transition-all hover:bg-[#fcfcfc] hover:text-[#0d0d0d]"
          >
            Home
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className="fixed font-bold">
      <div className="flex min-h-screen flex-col justify-between p-4 max-md:hidden">
        <div>
          <h1>Aditya Holkar</h1>
        </div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div className="badge badge-outline">Pune: {currentTime}</div>
      </div>

      <div className="flex h-20 w-screen flex-row items-center justify-between bg-[#0d0d0d] px-4 pr-6 min-md:hidden">
        <div>Aditya Holkar</div>
        <div className="badge badge-outline">Pune: {currentTime}</div>
        <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            setBut(!but);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div>{menu}</div>
    </div>
  );
};

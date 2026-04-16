import { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { Navbar } from "./Component/Navbar";
import { Home } from "./Component/Home";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative bg-[#0d0d0d] text-[#fcfcfc]">
      {/* <div className="fixed  w-screen  "> */}
      <Navbar />
      {/* </div> */}

      <div className=" h-fit   p-[128px_20px_20px_240px]  max-md:px-4 max-md:py-20 z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

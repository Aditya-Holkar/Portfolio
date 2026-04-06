import { useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Home } from "./Pages/Home";
import { Projects } from "./Pages/Projects";

function App() {
  return (
    <>
      <div className="flex justify-start min-md:gap-10 bg-[#0D0D0D] font-bold h-[100vh]">
        <div className="top-0 left-0 overflow-x-auto min-md:min-w-1/5">
          <Navbar />
        </div>

        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

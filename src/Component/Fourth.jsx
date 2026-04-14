import React from "react";

export const Fourth = () => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Experience</h1>
      <div className="flex flex-row max-md:flex-col gap-4 justify-start flex-5">
        <div className="text-lg flex-1 ">
          Capslock Studio Private Limited, <i>Pune</i>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <span className="font-bold">Frontend Developer</span>{" "}
            <i>
              Built a smooth, user-friendly UI with React + Tailwind (DaisyUI) —
              fast, clean, and interactive.
            </i>
          </div>
          <div>June 2023 - October 2025</div>
        </div>
      </div>
    </div>
  );
};

import { memo } from "react";

export const Fourth = memo(() => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">Experience</div>
      <div className="flex flex-row max-md:flex-col gap-4 justify-start flex-[5]">
        <div className="text-lg flex-1 ">
          Capslock Studio Private Limited, <i>Pune</i>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <span className="font-bold">Frontend Developer</span>{" "}
            <i>
              Built a smooth, user-friendly UI with React + Tailwind —
              fast, clean, and interactive.
            </i>
          </div>
          <div>June 2023 - October 2025</div>
        </div>
      </div>
    </div>
  );
});

import React from "react";

export const Sixth = () => {
  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Education</h1>
      <div className=" flex-5 flex flex-row max-md:flex-col gap-4 justify-start ">
        <div className="text-lg flex-1 ">
          Annasaheb Magar College - Pune <i>(Pune University)</i>
        </div>
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <span className="font-bold">Bsc.(Comp)</span> <i>CGPA:-7.7</i>
          </div>
          <div>July 2019 - July 2022</div>
        </div>
      </div>
    </div>
  );
};

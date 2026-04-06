import React from "react";
import { Button } from "./Button";

let lst = [
  {
    institution: "Annasaheb Magar College | Pune University",
    qualification: "Graduation",
    percentage_cgpa: "CGPA: 6.8",
    year: 2022,
  },
  {
    institution: "Maharashtra State Board",
    qualification: "HSC",
    percentage_cgpa: "48.31%",
    year: 2019,
  },
  {
    institution: "Maharashtra State Board",
    qualification: "SSC",
    percentage_cgpa: "81.40%",
    year: 2017,
  },
];
export const Education = () => {
  return (
    <div className="text-[#fdfdfd] flex flex-col gap-5">
      <Button cls={"px-2 py-1  max-w-fit text-xs"}>Education</Button>
      {lst.map(function (elem, idx) {
        return (
          <div
            key={idx}
            className="flex flex-row  justify-start gap-5  border-t py-5 max-md:flex-col last-of-type:border-b"
          >
            <div className="min-w-1/2 text-2xl">{elem.qualification}</div>
            <div className="flex-1 flex flex-col gap-5">
              <div>{elem.institution}</div>
              <div className="text-[#8d8d8d]">
                <div>{elem.percentage_cgpa}</div>
                <div>{elem.year}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

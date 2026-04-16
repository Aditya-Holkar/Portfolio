import React from "react";

export const Button = (props) => {
  return (
    <button className="btn rounded-4xl max-md:w-full bg-[#0d0d0d] border-solid border-[#fcfcfc] hover:bg-[#8a8a93]">
      {props.children}
    </button>
  );
};

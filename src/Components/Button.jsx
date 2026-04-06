import React from "react";

export const Button = (props) => {
  return (
    <div>
      <div
        className={` leading-2 font-normal border border-collapse  rounded-4xl text-nowrap ${props.cls}`}
      >
        {props.children}
      </div>
    </div>
  );
};

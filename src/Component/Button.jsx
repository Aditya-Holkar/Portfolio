import React from "react";

export const Button = (props) => {
  return (
    <button className="btn rounded-4xl max-md:w-full ">{props.children}</button>
  );
};

import React from "react";
import { Button } from "./Button";

export const First = () => {
  return (
    <div className="flex flex-row justify-start gap-4 max-md:flex-col max-md:gap-0">
      <div className="h-50 w-50 flex-1 px-2.5">
        <img
          src="https://i.pinimg.com/736x/41/68/60/416860c571f040a91efe5df421cc9cd3.jpg"
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 flex-5">
        <div>
          Frontend Developer experienced in building a 50+ component design
          system from scratch (Carbon-inspired) using React and Tailwind.
          Skilled in maintaining multiple production websites, API integration,
          and component-driven architecture.
        </div>
        <div className="flex flex-row gap-4 flex-wrap">
          {["React Developer", "adiholkar555@gmail.com"].map(
            function (params, idx) {
              return <Button key={idx}>{params}</Button>;
            },
          )}
        </div>
      </div>
    </div>
  );
};

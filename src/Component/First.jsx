import { memo } from "react";
import { Button } from "./Button";
import { SiChessdotcom } from "react-icons/si";

const items = ["React Developer", "adiholkar555@gmail.com"];

export const First = memo(() => {
  return (
    <div className="flex flex-row justify-start gap-4 max-md:flex-col max-md:gap-0">
      <div className="h-50 w-50 flex-1 px-2.5">
        <img src="https://i.pinimg.com/736x/41/68/60/416860c571f040a91efe5df421cc9cd3.jpg" alt="" />
      </div>

      <div className="flex flex-5 flex-col gap-4">
        <div>
          <span className="font-bold">Frontend Developer </span>experienced in building a 50+ component design system from scratch (Carbon-inspired) using React and Tailwind. Skilled in maintaining multiple production websites, API integration, and component-driven architecture.
        </div>
        <div className="flex flex-row flex-wrap gap-4">
          {items.map(function (params, idx) {
            if (params.includes("@")) {
              return (
                <a href={`mailto:${params}`} key={idx} className="max-md:w-full">
                  <Button>{params}</Button>
                </a>
              );
            }
            return <Button key={idx}>{params}</Button>;
          })}
        </div>

        <a href="https://www.chess.com/member/br00cewayne" target="_blank" rel="noopener noreferrer" className="w-fit max-md:w-full">
          <Button>
            <SiChessdotcom className="mr-2 inline" />
            Chess.com
          </Button>
        </a>
      </div>
    </div>
  );
});

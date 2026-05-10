import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";
import { Fifth } from "./Fifth";
import { Sixth } from "./Sixth";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach((section) => {
        if (!section) return;
        gsap.fromTo(
          section,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-10">
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <First />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <Second />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <Sixth />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <Third />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <Fourth />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <Fifth />
      </div>
    </div>
  );
};

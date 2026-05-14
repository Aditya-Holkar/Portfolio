import { memo, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";
import { Fourth } from "./Fourth";
import { Sixth } from "./Sixth";

gsap.registerPlugin(ScrollTrigger);

export const Home = memo(() => {
  const s0 = useRef(null);
  const s1 = useRef(null);
  const s2 = useRef(null);
  const s3 = useRef(null);
  const s4 = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      [s0, s1, s2, s3, s4].forEach((ref) => {
        if (!ref.current) return;
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom",
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
      <div ref={s0}>
        <First />
      </div>
      <div ref={s1}>
        <Second />
      </div>
      <div ref={s2}>
        <Sixth />
      </div>
      <div ref={s3}>
        <Third />
      </div>
      <div ref={s4}>
        <Fourth />
      </div>
    </div>
  );
});

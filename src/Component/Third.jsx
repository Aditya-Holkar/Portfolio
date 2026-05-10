import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { FaGit } from "react-icons/fa";
import { SiGsap } from "react-icons/si";
import { SiSupabase } from "react-icons/si";
import { TbPrompt } from "react-icons/tb";

export const Third = () => {
  const techStack = [
    {
      icon: <FaReact size={30} />,
      name: "React",
      description: "A JavaScript library for building user interfaces",
    },
    {
      icon: <RiTailwindCssFill size={30} />,
      name: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development",
    },
    {
      icon: <SiGsap size={30} />,
      name: "GSAP",
      description: "High-performance JavaScript animation library for creating stunning web animations",
    },
    {
      icon: <SiSupabase size={30} />,
      name: "Supabase",
      description: "Open-source backend with PostgreSQL database, real-time subscriptions, authentication, and auto-generated APIs",
    },
    {
      icon: <FaGit size={30} />,
      name: "Git",
      description: "A distributed version control system for tracking changes in source code",
    },
    {
      icon: <PiFileSql size={30} />,
      name: "SQL",
      description: "A domain-specific language used to manage and query relational databases",
    },
{
      icon: <TbPrompt size={30} />,
      name: "Prompt Engineering",
      description: "Optimizing AI interactions through carefully crafted prompts for precise and reliable outputs",
    },
  ];

  return (
    <div className="flex flex-row gap-4 max-md:flex-col max-md:gap-0">
      <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">Skills</div>

      <div className="flex flex-5 flex-col gap-6">
        {techStack.map(function (params, idx) {
          return (
            <div className="flex flex-row gap-4" key={idx}>
              <div className="flex h-15 w-15 shrink-0 items-center justify-center rounded-xl border" style={{ borderColor: "var(--border-subtle)" }}>
                {params.icon}
              </div>
              <div className="content-center items-center">
                <div className="font-bold">{params.name}</div>
                <div style={{ color: "var(--text-muted)" }}>{params.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

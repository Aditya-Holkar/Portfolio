import { memo } from "react";
import { Link } from "react-router";
import { FaGithub, FaLinkedin, FaReact, FaGit, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import { SiLeetcode, SiTailwindcss, SiSupabase, SiGsap, SiVite } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { TbPrompt } from "react-icons/tb";
import { projectsData } from "../Data/ProjectsData";
import { Button } from "./Button";

const skills = [
  { icon: <FaReact size={20} />, name: "React 18/19" },
  { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS v4" },
  { icon: <SiGsap size={20} />, name: "GSAP" },
  { icon: <SiVite size={20} />, name: "Vite" },
  { icon: <SiSupabase size={20} />, name: "Supabase" },
  { icon: <FaGit size={20} />, name: "Git" },
  { icon: <PiFileSql size={20} />, name: "SQL" },
  { icon: <TbPrompt size={20} />, name: "Prompt Engineering" },
];

const experience = [
  {
    company: "Capslock Studio Private Limited",
    location: "Pune",
    role: "Frontend Developer",
    period: "June 2023 — October 2025",
    highlights: [
      "Architected a 50+ component design system from scratch using React + Tailwind CSS, reducing UI development time by ~40%",
      "Maintained UI and frontend functionality for 5+ production websites end-to-end",
      "Integrated REST APIs, Supabase, and Neon DB for real-time data and serverless PostgreSQL workflows",
      "Refactored legacy codebase into modular, scalable component architecture",
    ],
  },
];

const socials = [
  { icon: <FaGithub size={22} />, label: "GitHub", url: "https://github.com/Aditya-Holkar" },
  { icon: <FaLinkedin size={22} />, label: "LinkedIn", url: "https://www.linkedin.com/in/aditya-holkar-life-is--unfair/" },
  { icon: <SiLeetcode size={22} />, label: "LeetCode", url: "https://leetcode.com/u/aditya-holkar/" },
];

async function downloadPdf() {
  const name = 'Aditya Holkar.pdf'
  try {
    const res = await fetch('/Aditya Holkar Tech Resume.pdf')
    if (!res.ok) throw new Error('not found')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } catch {
    window.open('/Aditya_Holkar_Resume.pdf', '_blank')
  }
}

export const Resume = memo(() => {
  return (
    <div className="flex flex-col gap-14">
      {/* Header */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Resume
        </div>
        <div className="flex flex-[5] flex-col gap-5">
          <div>
            <h1 className="text-5xl font-black tracking-tight max-md:text-3xl">
              Aditya Holkar
            </h1>
            <div className="mt-1 flex flex-row items-baseline gap-2 max-md:flex-col max-md:gap-0">
              <span className="text-xl font-bold" style={{ color: "var(--accent)" }}>
                Frontend Developer
              </span>
              <span className="text-lg font-thin max-md:hidden" style={{ color: "var(--text-muted)" }}>/</span>
              <span className="text-base font-light" style={{ color: "var(--text-muted)" }}>
                React · Design Systems · AI-Augmented Engineering
              </span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>adiholkar555@gmail.com</span>
            <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>Pune, India</span>
            <span className="rounded-full border px-3 py-1 text-xs font-medium" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>Open to Work</span>
          </div>
        </div>
      </div>

      {/* Socials */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Connect
        </div>
        <div className="flex flex-[5] flex-row gap-4">
          {socials.map((s, i) => (
            <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors hover:opacity-70" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)", textDecoration: "none" }}>
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Profile
        </div>
        <div className="flex-[5] text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          Frontend developer specialized in building production-grade React applications and component design systems. Experienced in architecting scalable UI libraries, integrating APIs and databases, and maintaining live production websites. Adept at AI-assisted development workflows — leveraging LLMs for rapid prototyping, code generation, and intelligent debugging without compromising code quality.
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Skills
        </div>
        <div className="flex-[5]">
          <div className="flex flex-wrap gap-2">
            {skills.map((s, i) => (
              <span key={i} className="flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>
                {s.icon}
                {s.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Experience
        </div>
        <div className="flex-[5] flex flex-col gap-8">
          {experience.map((exp, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="flex flex-row items-baseline gap-2 max-md:flex-col max-md:gap-0">
                <span className="text-lg font-bold">{exp.company}</span>
                <span className="text-xs font-thin max-md:hidden" style={{ color: "var(--text-muted)" }}>/</span>
                <span className="text-sm font-light italic" style={{ color: "var(--text-muted)" }}>{exp.location}</span>
              </div>
              <div className="flex flex-row items-baseline gap-2 max-md:flex-col max-md:gap-0">
                <span className="text-sm font-semibold" style={{ color: "var(--accent)" }}>{exp.role}</span>
                <span className="text-xs" style={{ color: "var(--text-muted)" }}>{exp.period}</span>
              </div>
              <ul className="flex flex-col gap-1.5 pl-4">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="list-disc text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Education
        </div>
        <div className="flex-[5] flex flex-row gap-4 max-md:flex-col">
          <div className="text-base font-bold flex-1">
            Annasaheb Magar College, Pune <span className="font-light italic" style={{ color: "var(--text-muted)" }}>(Pune University)</span>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <div>
              <span className="font-semibold">BSc (Computer Science)</span>
              <span className="ml-2 text-sm" style={{ color: "var(--text-muted)" }}>CGPA: 7.7</span>
            </div>
            <div className="text-sm" style={{ color: "var(--text-muted)" }}>July 2019 — July 2022</div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Projects
        </div>
        <div className="flex-[5] flex flex-col gap-6">
          {projectsData.map((p, i) => (
            <div key={i} className="border-t pt-4 max-md:pt-3" style={{ borderColor: "var(--border-subtle)" }}>
              <div className="flex flex-row items-baseline gap-2 max-md:flex-col max-md:gap-0">
                <span className="text-base font-bold">{p.lst[0].value}</span>
                <span className="text-xs font-thin max-md:hidden" style={{ color: "var(--text-muted)" }}>/</span>
                <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>{p.lst[1].value}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                {p.lst[2].value.split(", ").map((tag, j) => (
                  <span key={j} className="rounded-full border px-2 py-0.5 text-[10px]" style={{ borderColor: "var(--border-subtle)", color: "var(--text-muted)" }}>{tag}</span>
                ))}
              </div>
              <div className="mt-1.5 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {p.proj[0].title} — {p.proj[0].description.split(".")[0]}.
              </div>
              {p.proj[0].lnk && (
                <a href={p.proj[0].lnk} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs font-medium underline" style={{ color: "var(--accent)" }}>
                  View Project <FaExternalLinkAlt size={9} />
                </a>
              )}
            </div>
          ))}
          <div className="border-t pt-4" style={{ borderColor: "var(--border-subtle)" }}>
            <Link to="/projects" className="text-sm font-medium underline" style={{ color: "var(--accent)" }}>
              View Full Portfolio →
            </Link>
          </div>
        </div>
      </div>

      {/* Resume Files */}
      <div className="flex flex-row gap-4 max-md:flex-col">
        <div className="section-label flex-1 text-xs font-medium uppercase tracking-widest">
          Resume
        </div>
        <div className="flex-[5]">
          <button onClick={downloadPdf} className="cursor-pointer" style={{ background: 'none', border: 'none', padding: 0 }}>
            <Button>
              <FaDownload className="mr-2 inline" size={12} />
              Download PDF
            </Button>
          </button>
        </div>
      </div>
    </div>
  );
});

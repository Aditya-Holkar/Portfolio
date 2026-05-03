import React from "react";
import { Button } from "./Button";

export const Fifth = () => {
  const dj = [
    {
      lst: [
        { label: "Name", value: "Capslock Design System" },
        { label: "Role", value: "Frontend Design System Engineer" },
        {
          label: "Scope",
          value: "Component Library, Architecture, Scalability",
        },
        { label: "Date", value: "2025" },
      ],
      proj: [
        {
          img: "https://capslock.studio/logo.svg",
          title: "High-Impact Component Architecture",
          description: "Built 50+ reusable React components with Tailwind CSS, refactored legacy code into modular architecture, and ensured full responsiveness.",
          lnk: "",
        },
      ],
    },
    {
      lst: [
        { label: "Name", value: "Capslock Data Studio" },
        { label: "Role", value: "Full Stack Developer" },
        {
          label: "Scope",
          value: "API Integration, Database Management, State Management",
        },
        { label: "Date", value: "2025" },
      ],
      proj: [
        {
          img: "https://capslock.studio/products/data-studio.svg",
          title: "Data Integration & API Architecture",
          description: "Integrated REST APIs and handled data fetching, state management, and error handling across applications. Implemented Supabase and Neon DB integrations for real-time data and serverless PostgreSQL workflows.",
          lnk: "https://email-validation-kappa.vercel.app/",
        },
      ],
    },
    {
      lst: [
        { label: "Name", value: "Capslock Studios" },
        { label: "Role", value: "Product/Website Maintenance" },
        {
          label: "Scope",
          value: "UI Maintenance, Production Support, Frontend Optimization",
        },
        { label: "Date", value: "2025" },
      ],
      proj: [
        {
          img: "https://capslock.studio/logo.svg",
          title: "Production Website Maintenance",
          description: "Maintained UI and frontend functionality for 5+ production websites.",
          lnk: "",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-row gap-4 max-md:flex-col max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Key Project</h1>
      <div className="flex flex-5 flex-col gap-15">
        {dj.map(function (params, idx) {
          return (
            <div key={idx} className="flex flex-row border-t-2 p-[28px_8px_0px_8px] max-md:flex-col">
              <div className="flex w-1/3 flex-col gap-5">
                {params.lst.map(function (item, itemIdx) {
                  return (
                    <div key={itemIdx}>
                      <div className="text-[#8a8a93]">{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex w-full flex-col gap-5">
                {params.proj.map(function (project, projectIdx) {
                  return (
                    <div key={projectIdx} className="flex flex-col gap-4">
                      <img src={project.img} alt="" className="object-fit h-[250px] w-full" />
                      <div className="flex flex-row gap-4 text-2xl max-md:flex-col">
                        <div>{project.title}</div>
                        {/* <Button>
                          <a href={project.lnk || "#"} target={project.lnk ? "_blank" : "_self"} className="font-bold" onClick={(e) => !project.lnk && e.preventDefault()}>
                            View
                          </a>
                        </Button> */}
                        {project.lnk ? (
                          <a href={project.lnk} target="_blank" rel="noopener noreferrer">
                            <Button>
                              <span className="font-bold">View</span>
                            </Button>
                          </a>
                        ) : (
                          <Button>
                            <span className="cursor-not-allowed font-bold opacity-50">View (Unavailable)</span>
                          </Button>
                        )}
                      </div>
                      <div className="text-[#8a8a93]">{project.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

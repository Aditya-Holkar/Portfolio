import React from "react";

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
          description:
            "Built 50+ reusable React components with Tailwind CSS, refactored legacy code into modular architecture, and ensured full responsiveness.",
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
          description:
            "Integrated REST APIs and handled data fetching, state management, and error handling across applications. Implemented Supabase and Neon DB integrations for real-time data and serverless PostgreSQL workflows.",
        },
      ],
    },
    {
      lst: [
        { label: "Name", value: "Capslock Maintenance" },
        { label: "Role", value: "Frontend Maintenance Engineer" },
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
          description:
            "Maintained UI and frontend functionality for 5+ production websites.",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-row max-md:flex-col gap-4 max-md:gap-0">
      <h1 className="badge badge-neutral badge-outline flex-1">Key Project</h1>
      <div className="flex-5 gap-15 flex flex-col ">
        {dj.map(function (params, idx) {
          return (
            <div
              key={idx}
              className="p-[28px_8px_0px_8px] flex flex-row  max-md:flex-col border-t-2  "
            >
              <div className="flex flex-col gap-5 w-1/3">
                {params.lst.map(function (item, itemIdx) {
                  return (
                    <div key={itemIdx}>
                      <div className="text-[#8a8a93]">{item.label}</div>
                      <div>{item.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className="w-full flex flex-col gap-5">
                {params.proj.map(function (project, projectIdx) {
                  return (
                    <div key={projectIdx} className="flex flex-col gap-4">
                      <img
                        src={project.img}
                        alt=""
                        className="w-full h-[250px] object-fit"
                      />
                      <div className="text-2xl">{project.title}</div>
                      <div className="text-[#8a8a93]">
                        {project.description}
                      </div>
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

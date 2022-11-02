import React from "react";
import { projects } from "../../data";
import { ProjectCard } from "../../modules/cards";

const ProjectSection = () => {
  return (
    <section className="animate-fadin">
      <div className="xl:max-w-6xl xl:mx-auto xl:px-0 px-5 py-20 flex flex-col gap-20 lg:px-10">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;

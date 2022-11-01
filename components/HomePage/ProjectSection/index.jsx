import React from "react";
import { projects } from "../../data";
import { ProjectCard } from "../../modules/cards";

const ProjectSection = () => {
  return (
    <section className="px-5 py-20 flex flex-col gap-20">
      {projects.map((project, index) => {
        return <ProjectCard key={index} project={project} />;
      })}
    </section>
  );
};

export default ProjectSection;

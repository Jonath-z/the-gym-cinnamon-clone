import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }) => {
  const { imageUrl, title, description, themes = [], background } = project;
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[169px] py-3" style={{ background }}>
        <Image
          src={imageUrl}
          alt={title}
          fill={true}
          sizes="(min-width: 640px) 366px"
        />
      </div>
      <p className="flex flex-wrap gap-4 text-xsm text-dark-semi-gray font-montHavy">
        {themes?.map((theme, index) => {
          return (
            <span key={index} className="uppercase">
              {theme}
            </span>
          );
        })}
      </p>

      <h1 className="text-3xl font-montBold whitespace-pre-line py-2">
        {title}
      </h1>
      <p className="text-base font-montHavy-extralight font-semibold text-text-primary">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;

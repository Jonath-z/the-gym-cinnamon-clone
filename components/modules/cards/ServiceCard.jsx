import Image from "next/image";
import React from "react";

const ServiceCard = ({ service }) => {
  const { title, imageUrl, description } = service;
  return (
    <div className="flex flex-col gap-4 max-w-[256px]">
      <div>
        <Image src={imageUrl} alt={title} width={48} height={48} />
      </div>

      <h3 className="text-white text-xl font-montBold py-2 leading-large">
        {title}
      </h3>
      <p className="text-base text-semi-gray font-montHavy-extralight font-black">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

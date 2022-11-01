/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LocationIcon } from "../vectors";
import DescriptionCard from "./DescriptionCard";

const LocationCard = ({ location }) => {
  const { imageUrl, address, town } = location;
  return (
    <div className="w-fit flex flex-col gap-5">
      <div className="w-fit">
        <img src={imageUrl} alt={town} className="w-[254px]" />
      </div>

      <div className="w-[254px] flex gap-5 items-start font-extrabold">
        <LocationIcon className="w-8 h-8" />
        <div className="flex flex-col gap-3">
          <p className="font-montBold">{town}</p>
          <DescriptionCard>{address}</DescriptionCard>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;

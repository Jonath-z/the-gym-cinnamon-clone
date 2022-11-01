import React from "react";
import { locations } from "../../data";
import LocationCard from "../../modules/cards/LocationCard";

const Locations = () => {
  return (
    <section className="relative px-5 py-20">
      <h1 className="font-montBold text-4.5xl">Our offices</h1>
      <div className="flex overflow-x-scroll gap-8">
        {locations.map((location, index) => {
          return <LocationCard key={index} location={location} />;
        })}
      </div>
    </section>
  );
};

export default Locations;

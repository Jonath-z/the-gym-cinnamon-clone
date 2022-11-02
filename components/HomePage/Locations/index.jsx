import Image from "next/image";
import React from "react";
import { locations } from "../../data";
import LocationCard from "../../modules/cards/LocationCard";

const Locations = () => {
  return (
    <section className="relative">
      <div className="px-5 py-20 lg:px-10 relative xl:px-0">
        <h1 className="font-montBold text-4.5xl md:pb-12 lg:text-large  xl:max-w-6xl xl:mx-auto">
          Our offices
        </h1>
        <div className="flex overflow-x-scroll gap-8 scrollbar-hide  xl:ml-96">
          {locations.map((location, index) => {
            return <LocationCard key={index} location={location} />;
          })}
        </div>

        <div className="lg:flex justify-start items-center gap-16 hidden py-10 pt-16  xl:max-w-6xl xl:mx-auto">
          <Image
            src="/images/arrow-left.webp"
            alt="CEO profile"
            width={48}
            height={27}
          />
          <Image
            src="/images/arrow-right.webp"
            alt="CEO profile"
            width={48}
            height={27}
          />
        </div>
      </div>
    </section>
  );
};

export default Locations;

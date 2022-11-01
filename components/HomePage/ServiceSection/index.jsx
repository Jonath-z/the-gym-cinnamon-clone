import React from "react";
import { services } from "../../data";
import Button from "../../modules/Button";
import { ServiceCard } from "../../modules/cards";

const ServiceSection = () => {
  return (
    <section className="bg-hero bg-black/90 px-5 py-20">
      <h2 className="text-4.5xl font-montBold text-white font-extrabold">
        Our services
      </h2>
      <div className="py-10 flex flex-col gap-10">
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </div>

      <Button title="See Our Services" />
    </section>
  );
};

export default ServiceSection;

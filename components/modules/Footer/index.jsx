import Image from "next/image";
import React from "react";
import { locations } from "../../data";

const Footer = () => {
  return (
    <section className="bg-hero bg-black/90 px-5 py-20">
      <div className="flex flex-col gap-8">
        <Image
          src="/svgs/logo-white.97f0c2c8.svg"
          alt="company logo"
          width={160}
          height={20}
        />

        <h4 className="text-white text-2xl font-montBold">
          All software,
          <br /> zero bullshit.
        </h4>
      </div>

      <ul className="text-semi-gray font-montHavy-extralight text-base font-semibold grid grid-cols-2 justify-between items-center py-10">
        <ul className="space-y-5">
          <li>Home</li>
          <li>Projects</li>
          <li>Services</li>
        </ul>
        <ul className="space-y-5">
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
        </ul>
      </ul>

      <div className="grid grid-cols-2 gap-6 text-semi-gray">
        {locations.map((location, index) => {
          return (
            <div key={index}>
              <p className="font-montBold py-1">{location.town}</p>
              <p className="font-montHavy-extralight font-semibold text-sm">
                {location.address}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Footer;

import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { DescriptionCard } from "../../modules/cards";

const AboutUs = () => {
  return (
    <div className="px-5 flex flex-col gap-5 py-20 bg-light-gray">
      <h2 className="font-montBold text-4.5xl">Who we are</h2>
      <DescriptionCard>
        Meet our international teams made up of 86 innovators, branched into 8
        departments, that influence the market throughout 20 different
        countries.
      </DescriptionCard>

      <div>
        <Image
          src="/images/who-we-are.webp"
          alt="who we are"
          width={280}
          height={444}
        />
      </div>

      <Button title="Read About Us" />
    </div>
  );
};

export default AboutUs;

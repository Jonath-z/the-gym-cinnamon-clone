import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { DescriptionCard } from "../../modules/cards";

const AgileTeam = () => {
  return (
    <section className="px-5 bg-light-gray py-20 flex flex-col gap-9">
      <h2 className="font-montBold text-4.5xl">
        Agile team <br /> on demand
      </h2>
      <div className="relative w-[266px] h-[173px]">
        <Image src="/images/agile-team-.webp" alt="agile team" fill={true} />
      </div>

      <DescriptionCard>
        By hiring and managing talented people with skills specific to your
        project, we build you a team that’s accomplished, agile and scalable in
        both directions.
      </DescriptionCard>

      <Button title="See How It Works" />
    </section>
  );
};

export default AgileTeam;

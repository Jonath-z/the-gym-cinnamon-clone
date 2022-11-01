import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";
import { DescriptionCard } from "../../modules/cards";

const Collegues = () => {
  return (
    <section className="flex flex-col px-5 py-20">
      <div>
        <Image
          src="/images/college.webp"
          alt="collegues image"
          width={300}
          height={197}
        />
      </div>

      <div className="py-10">
        <DescriptionCard>
          Seize the unique opportunity to participate in a wide range of courses
          conducted by professionals with an impeccable reputation in the
          digital industry.
        </DescriptionCard>
      </div>
      <Button title="See How It Works" />
    </section>
  );
};

export default Collegues;

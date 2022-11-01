/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../../modules/Button";

const Prefooter = () => {
  return (
    <section className="bg-light-gray relative">
      <div className="flex flex-col justify-center items-center gap-5 py-24">
        <h1 className="font-montBold text-4.5xl">
          Let&apos;s work <br /> together.
        </h1>

        <Button title="Contact us" />
      </div>
      <img
        src="/images/work-together.webp"
        alt="work together"
        className="absolute bottom-0 left-0 w-32"
      />
    </section>
  );
};
export default Prefooter;

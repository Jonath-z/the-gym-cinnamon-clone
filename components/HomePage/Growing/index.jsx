import Image from "next/image";
import React from "react";
import Button from "../../modules/Button";

const Growing = () => {
  return (
    <section className="bg-hero bg-black/90 px-5 py-20">
      <div>
        <h2 className="font-montBold text-4.5xl text-white">We’re growing</h2>
        <p className="text-semi-gray font-montHavy-extralight font-semibold text-base leading-8 py-5">
          Jump on board with Cinnamon and get the privilege of working on
          challenging projects for leading global companies! Make the world a
          better, more connected place.
        </p>

        <Button title="See All Positions" />
      </div>

      <div className="flex flex-col gap-5 pt-10 mt-10">
        <p className="flex justify-between items-center border-b border-white/20 py-5">
          <span className="text-white font-montBold text-2xl">
            Android Developer
          </span>
          <span>
            <Image
              src="/images/arrowRightWhite.png"
              alt="arrow right white"
              width={48}
              height={27}
            />
          </span>
        </p>
        <p className="flex justify-between items-center border-b border-white/20 py-5">
          <span className="text-white font-montBold text-2xl">
            Android Developer
          </span>
          <span>
            <Image
              src="/images/arrowRightWhite.png"
              alt="arrow right white"
              width={48}
              height={27}
            />
          </span>
        </p>
        <p className="flex justify-between items-center py-5 border-b border-white/20">
          <span className="text-white font-montBold text-2xl">
            Backend Development Team Lead
          </span>
          <span>
            <Image
              src="/images/arrowRightWhite.png"
              alt="arrow right white"
              width={48}
              height={27}
            />
          </span>
        </p>
      </div>
    </section>
  );
};

export default Growing;
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { DescriptionCard, ViewMoreCard } from "../../modules/cards";

const Communication = () => {
  return (
    <section className="px-5 py-20">
      <div className="relative">
        <div className="absolute -top-20 -left-7 text-[175px] font-montBold text-double-quote rotate-180">
          ,,
        </div>
        <h1 className="font-montBold text-[32px] leading-[44px]">
          They’re consistent,
          <br /> and the
          <br /> communication is
          <br /> good.
        </h1>
      </div>

      <div className="py-10">
        <DescriptionCard>
          When I have a deadline, they would work extra hours on the weekend and
          after hours. Cinnamon gives the impression of being a smaller team
          that’s focused on customers.
        </DescriptionCard>
      </div>

      <div>
        <Image
          src="/images/ceoProfile.webp"
          alt="CEO profile"
          width={68}
          height={68}
        />
        <p className="font-montBold text-slg">Garin Toren</p>
        <p className="text-base font-montHavy-extralight font-extrabold">
          CEO, ping
        </p>
      </div>

      <div className="flex justify-start items-center gap-16 py-10">
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

      <ViewMoreCard title=" View case study" />
    </section>
  );
};

export default Communication;

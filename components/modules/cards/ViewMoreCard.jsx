import Image from "next/image";
import React from "react";

const ViewMoreCard = ({ title }) => {
  return (
    <div className="flex gap-3 items-center">
      <Image
        src="/svgs/chevronRight.svg"
        alt="chevron right"
        width={7.5}
        height={11.3}
      />

      <p className="uppercase text-blue-primary font-montBold underline underline-offset-8">
        {title}
      </p>
    </div>
  );
};

export default ViewMoreCard;

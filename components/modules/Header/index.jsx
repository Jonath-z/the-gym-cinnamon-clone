import Image from "next/image";
import React from "react";
import { MenuIcon } from "../vectors";

const Header = () => {
  return (
    <section className="bg-hero bg-black/90 flex justify-between p-5">
      <Image
        src="/svgs/logo-white.97f0c2c8.svg"
        alt="company logo"
        width={160}
        height={20}
      />

      <MenuIcon className="text-white h-6 w-6" />
    </section>
  );
};

export default Header;

import clsx from "clsx";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Logo2 from "@components/Logo2.png"

const Logo = ({
  textClassName,
  logoClassName,
}: {
  textClassName?: string;
  logoClassName?: string;
}) => {
  return (
    <Link
      href="/"
      className={clsx(
        "font-bold text-sm flex items-center justify-center text-white space-x-2",
        textClassName
      )}
    >
      {/* <span className=" bg-primary w-6 h-6 flex items-center justify-center   rounded-[6px] font-mono relative overflow-hidden">
        <span className="absolute w-full h-full transform translate-x-3 bg-white/[0.2] rotate-45" />
      </span> */}
      <Image src={Logo2} alt="mindful solutions logo" className="w-24 h-20 rounded-lg flex justify-center" />
        <span className="font-mono flex-none justify-center">
          {/* <h1>Mindful Solutions NY</h1>   */}
        </span>
    </Link>
  );
};

export default Logo;

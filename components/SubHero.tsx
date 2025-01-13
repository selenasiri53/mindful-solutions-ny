import { services } from "constants/services";
import { useMotionValue } from "framer-motion";
import React from "react";
import Worker from "@components/Worker.jpg"
import Image from "next/image";

import { AiFillPieChart } from "react-icons/ai";
import { CardPattern } from "./CardPattern";

type FeatureType = {
  heading: string;
  description: string | any;
  icon: any;
};

export const SubHero = () => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  const pattern = {
    y: -6,
    squares: [
      [-1, 2],
      [1, 3],
      // Random values between -10 and 10
      ...Array.from({ length: 10 }, () => [
        Math.floor(Math.random() * 20) - 10,
        Math.floor(Math.random() * 20) - 10,
      ]),
    ],
  };
  return (
    <div
      id="about-us"
      className="px-4 bg-zinc-900 pt-16 sm:pt-20 pb-10 md:pt-56 md:pb-6 relative group"
      onMouseMove={onMouseMove}
    >
      <div className="absolute w-96 h-96 -left-20 -top-20 bg-gradient-to-t from-[#9890e3] to-[#b1f4cf] blur-3xl rounded-full opacity-20" />
      <div id="about-us" className="pb-40 max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
        About Us
        </h2>
        <p className="pb-16 sm:pb-20 mt-6 text-lg tracking-tight text-blue-100">
        At Mindful Solutions, we pride ourselves on being a trusted partner for residential building services in New York City. With over 10 years of experience, we understand how important it is to feel confident in the safety and condition of your buildings. Our goal is to give you peace of mind, knowing that your property is in the best hands.
        We specialize in providing comprehensive services that help protect your home and improve the quality of life for you and your family.
        </p>
        <div className="flex justify-center pt-8">
          <Image src={Worker} alt="worker" className="flex justify-center w-full h-full lg:w-1/3 lg:h-1/3 border-[1.5px] border-white rounded-3xl" />
        </div>
      </div>
      <div id="services" className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
        <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
        Why Choose Mindful Solutions NY?
        </h2>
        <p className="mt-6 text-lg tracking-tight text-blue-100">
        Whether you're a landlord, property manager, or homeowner, our experts provide actionable solutions to keep your building safe and lead-free.
        </p>
      </div>

      <CardPattern {...pattern} mouseX={mouseX} mouseY={mouseY} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto gap-20 my-20 md:my-40 px-4">
        {services.map((feature: FeatureType, idx: number) => (
          <Card
            key={`feature-${idx}`}
            heading={feature.heading}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

const Card = ({ heading, description, icon }: FeatureType) => {
  return (
    <div className="flex flex-col items-start">
      <IconContainer icon={icon} />
      <div className="mt-8">
        <h2 className="text-white text-2xl">{heading}</h2>
        <p className="text-sm text-zinc-100 mt-8 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const IconContainer = ({ icon }: any) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/50 transform  rounded-md blur-lg" />

      <div className="h-10 w-10 rounded-2xl  backdrop-blur-sm flex items-center justify-center  bg-white bg-grid-extrasmall-zinc-200  overflow-hidden">
        {/* <AiFillPieChart className="text-primary h-4 w-4 relative z-50" /> */}
        {icon}
        <div className="absolute inset-0 bg-white [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] z-40" />
      </div>
    </div>
  );
};

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BlurImage } from "./BlurImage";
import Button from "./Button";
import { GridPattern } from "./GridPattern";
import { motion, useScroll } from "framer-motion";
import Logo2 from "@components/Logo";
import Inspection from "@components/Inspection.jpg"
// import ManInspecting from "@components/ManInspecting.jpg"
// import Brick from "@components/brick.jpeg"

export const Hero = () => {
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

  const [isHalf, setIsHalf] = useState(false);
  const { scrollY } = useScroll();
  useEffect(() => {
    const handleScroll = () => {
      if (scrollY.get() > (window.innerHeight * 2) / 10) {
        setIsHalf(true);
      } else {
        setIsHalf(false);
      }
    };
    scrollY.onChange(handleScroll);
    return () => {
      scrollY.clearListeners();
    };
  }, []);

  return (
    <div className=" px-4">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
      <div className="flex justify-center sm:justify-start sm:pl-8 sm:pt-7 md:pl-24">
        <Logo2 />
      </div>

        <GridPattern
          width={120}
          height={120}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%]  w-full skew-y-[-5deg] fill-tertiary/[0.05] stroke-gray-100  dark:fill-primary dark:stroke-gray-100"
          {...pattern}
        />
        
      </div>
      <div className="relative z-10 max-w-7xl mx-auto mt-32">
        <h1 className="font-semibold text-4xl sm:text-7xl text-center max-w-5xl mx-auto text-zinc-800 leading-tight tracking-tight">
        NYC’s Trusted Partner for <span className="text-primary">Safer, Healthier</span> Buildings{" "}
           
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl tracking-tight text-zinc-600 text-center leading-normal">
        Mindful Solutions NY specializes in residential building maintenance, indoor air quality testing, and expert lead-based paint inspections. Serving NYC with a commitment to safety and well-being, we ensure buildings are safe for everyone.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center mt-12">
          <Button
            as="button"
            variant="outline"
            className="rounded-2xl py-2 border border-zinc-200"
          >
            <Link href="/#features">Our services</Link>
          </Button>
          <Button as="button" variant="large" className="rounded-2xl py-2">
            <Link href="/signup">Book a free call!</Link>
          </Button>
        </div>

        <div
          style={{ perspective: "1000px" }}
          className="pt-20 px-4 w-full relative"
        >
          <motion.div
            animate={{
              rotateX: isHalf ? 0 : 45,
              scale: isHalf ? [0.8, 1.05, 1] : 0.8,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.5,
              },
            }}
            className="relative w-[100%] overflow-x-hidden md:w-3/4 mx-auto h-[12rem] sm:h-[24rem] lg:h-[32rem] -mb-12 md:-mb-32 max-w-8xl"
          >
            <BlurImage
              src={Inspection}
              layout="fill"
              className="rounded-xl md:rounded-3xl border mx-auto object-cover shadow-sm object-right-top"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

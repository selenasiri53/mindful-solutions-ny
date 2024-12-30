import Link from "next/link";
import React from "react";
import Button from "./Button";

export const CTA = ({ headerText, bodyText }: any) => {
  return (
    <div className="relative rounded-2xl bg-vulcan-700 mx-4  mb-20 mt-20 text-gray-100 max-w-6xl lg:mx-auto  min-h-96 h-full  overflow-hidden pb-4">
      <div
        className="absolute inset-0 top-0  bg-grid-vulcan-500"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, white, transparent)",
        }}
      ></div>

      <div className=" lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
        <div className="text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-bold my-4  text-center">
            {headerText || `Let's lay the foundation together`}
          </h2>
          <p className="my-4 text-base text-gray-300 md:text-lg tracking-wide font-light  text-center max-w-lg mx-auto">
            {bodyText ||
              `At Mindful Solutions NY, we’re here to help. Reach out to us, and we’ll get back to you as soon as we can!`}
          </p>

          <div className="flex justify-center">
            <Button as="button" variant="large" className="rounded-2xl py-2">
              <Link href="/signup">Book a free call</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

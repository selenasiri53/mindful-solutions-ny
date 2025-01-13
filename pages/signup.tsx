import Button from "@components/Button";
import { Container } from "@components/Container";
import { GridPattern } from "@components/GridPattern";
import Logo from "@components/Logo";

import { Phone } from 'lucide-react';
import { Send } from 'lucide-react';
import { MapPin } from 'lucide-react';

import type { NextPage } from "next";
import Link from "next/link";

const SignUp: NextPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

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
    <Container title={`Signup for Mindful Solutions NY`}>
      <div className="min-h-[60rem] flex justify-center items-start">
        <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
          <GridPattern
            width={120}
            height={120}
            x="50%"
            className="absolute inset-x-0 inset-y-[-30%] h-[160%]  w-full skew-y-[-5deg] fill-tertiary/[0.05] stroke-gray-100  dark:fill-primary dark:stroke-gray-100"
            {...pattern}
          />
        </div>
        <div className="px-10 py-20 rounded-xl bg-white shadow-lg w-[30rem] mt-10 md:mt-14 mx-4 relative z-10">
          <Logo textClassName="text-zinc-700" />
          <div className="my-4 text-md text-zinc-700 text-center">
            <h1 className="text-2xl">Have questions? Schedule a free consultation!</h1>
            <p className="py-8">Our team is here to help! Get in touch with us today for expert advice, reliable service, and thorough inspections.</p>
            <a href="tel:6464967039" className="flex space-x-1 items-center justify-center">
              <Phone className="text-primary w-4 h-4" />
              <h3>646-496-7039</h3>
            </a>
            <Link href="mailto:info@mindfulsolutionsny.com" className="flex space-x-1 items-center justify-center">
              <Send  className="text-primary w-4 h-4"/>
              <h3>info@mindfulsolutionsny.com</h3>
            </Link>
            <Link href="https://www.google.com/maps/place/208+Meserole+St+%232,+Brooklyn,+NY+11206/@40.7080914,-73.943239,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25bfe6bbff421:0x4232c957d1a85c9b!8m2!3d40.7080914!4d-73.9406641?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" className="flex space-x-1 items-center justify-center">
              <MapPin  className="text-primary w-4 h-4"/>
              <h3 className="text-primary underline">208 Meserole Street, #2, Brooklyn, NY 11206</h3>
            </Link>
          </div>
          {/* <div className="px-8">
            <h3 className="py-2">Tel. 646-496-7039</h3>
            <h3></h3>
          </div> */}
          
          {/* <form onSubmit={handleSubmit}>
            <input
              type="text"
              className=" w-full rounded-xl shadow-sm border border-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent mb-6"
              placeholder="Full name"
              name="full-name"
            />
            <input
              type="email"
              className=" w-full rounded-xl shadow-sm border border-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent mb-6"
              placeholder="Email Address"
              name="email"
            />
            <textarea
              className=" w-full rounded-xl shadow-sm border border-gray-100 placeholder:text-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent mb-6"
              placeholder="Message"
              name="message"
            />
            <Button
              type="submit"
              as="button"
              variant="large"
              className="rounded-2xl py-2 w-full"
              onClick={handleSubmit}
            >
              Message
            </Button>
          </form> */}
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
``
import React from "react";
import Logo from "./Logo";
import LeadSafeLogo from "./LeadSafeLogo.jpg";
import { navItems } from "constants/navItems";
import { CustomLink } from "./CustomLink";
import Image from "next/image";
// import {
//   AiOutlineGithub,
//   AiOutlineLinkedin,
//   AiOutlineTwitter,
// } from "react-icons/ai";

export const Footer = () => {
  // const socials = [
  //   {
  //     name: "twitter",
  //     icon: (
  //       <AiOutlineTwitter className="h-5 w-5 hover:text-primary transition duration-150" />
  //     ),
  //     link: "https://twitter.com/aceternitylabs",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: (
  //       <AiOutlineLinkedin className="h-5 w-5 hover:text-primary transition duration-150" />
  //     ),
  //     link: "https://linkedin.com/in/manuarora28",
  //   },
  //   {
  //     name: "GitHub",
  //     icon: (
  //       <AiOutlineGithub className="h-5 w-5 hover:text-primary transition duration-150" />
  //     ),
  //     link: "https://github.com/aceternity",
  //   },
  // ];
  return (
    <div className="border-t border-slate-900/5 py-10 max-w-6xl mx-auto px-8">
      <div className="flex flex-col justify-center items-center py-10 ">
        <div className="sm:pl-20 flex-none sm:flex sm:justify-center sm:space-x-20 sm:items-center">
          <Logo />
          <Image src={LeadSafeLogo} width="170" alt="lead-safe logo" className="pb-16 px-6" />
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
          {navItems.map((navItem: any, idx: number) => (
            <CustomLink
              key={`footer-link-${idx}`}
              href={navItem.link}
              className="text-zinc-500 text-sm relative"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {navItem.name}
              </span>
            </CustomLink>
          ))}
        </div>
        <p className="text-slate-500 text-sm font-light text-center mt-8 border-t border-zinc-100 pt-4">
          © {new Date().getFullYear()} Mindful Solutions, NY. All rights
          reserved.
        </p>
        {/* <div className="flex flex-row justify-center space-x-2 mt-2">
          {socials.map((socialLink: any, idx: number) => (
            <a
              key={`footer-link-${idx}`}
              href={socialLink.link}
              className="text-zinc-500 text-sm relative"
              target="__blank"
            >
              <span className="relative z-10 px-2 py-2 inline-block">
                {socialLink.icon}
              </span>
            </a>
          ))}
        </div> */}
      </div>
    </div>
  );
};

import clsx from "clsx";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import Navbar from "./Navbar/Navbar";

export const Container = (props: any) => {
  const { children, className, ...customMeta } = props;
  const router = useRouter();

  const title = "Mindful Solutions NY | High Quality Building Services";
  const meta = {
    title,
    description: `Mindful Solutions NY is a High Quality Building Services with Lead-based paint inspections, indoor air quality testing, residential building maintenance, and post construction cleaning for easy move-in / move-out experiences`,
    type: "building services",
    image: "https://foxtrot.aceternity.com/banner.png",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://foxtrot.aceternity.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://foxtrot.aceternity.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="foxtrotaceternity" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@foxtrotaceternity" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      <Navbar />
      <main className={clsx("antialiased ", className)}>{children}</main>
      <Footer />
    </>
  );
};

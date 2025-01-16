import React from "react";
import Head from "next/head";
import Header from "@/components/layout/Header";
import AboutMe from "@/components/layout/AboutMe";
import MyWork from "@/components/layout/MyWork";
import Contact from "@/components/layout/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alvaro Porfolio</title>
      </Head>
      <Header />
      <AboutMe />
      <MyWork />
      <Contact />
    </>
  );
}

import React, { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import AboutMe from "@/components/layout/AboutMe";
import MyWork from "@/components/layout/MyWork";
import Contact from "@/components/layout/Contact";
import { FocusProvider } from "@/contexts/FocusContext";

const Home: NextPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>): void => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>ÁLVARO ABBÁ</title>
      </Head>
      <Header
        onAboutClick={() => scrollTo(aboutRef)}
        onWorkClick={() => scrollTo(workRef)}
        onContactClick={() => scrollTo(contactRef)}
      />
      <div ref={aboutRef} className="scroll-mt-24">
        <AboutMe />
      </div>
      <div ref={workRef} className="scroll-mt-24">
        <FocusProvider>
          <MyWork onWorkClick={() => scrollTo(workRef)} />
        </FocusProvider>
      </div>
      <div ref={contactRef} className="scroll-mt-24">
        <Contact />
      </div>
    </>
  );
};

export default Home;

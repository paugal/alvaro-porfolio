import React, { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/layout/Header";
import AboutMe from "@/components/layout/AboutMe";
import MyWork from "@/components/layout/MyWork";
import Footer from "@/components/layout/Footer";

import { GetStaticProps } from "next";
import { getImagesFromProjectFolder } from "../utils/getProjectImages";
import projectsData from "../assets/data/projects.json";

export const getStaticProps: GetStaticProps = async () => {
  const enrichedProjects = projectsData.projects.map((project) => ({
    ...project,
    images: getImagesFromProjectFolder(project.folder),
  }));

  return {
    props: {
      projects: enrichedProjects,
    },
  };
};

type Project = {
  name: string;
  folder: string;
  url: string;
  description: string;
  images: string[];
};

interface HomeProps {
  projects: Project[];
}

const Home: NextPage<HomeProps> = ({ projects }) => {
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
        <MyWork projects={projects} onWorkClick={() => scrollTo(workRef)} />
      </div>
      <div ref={contactRef} className="scroll-mt-24">
        <Footer />
      </div>
    </>
  );
};

export default Home;

import { getImagesFromProjectFolder } from "./getProjectImages";
import projectsData from "../assets/data/projects.json";

export async function getStaticProps() {
  const enrichedProjects = projectsData.projects.map((project) => ({
    ...project,
    images: getImagesFromProjectFolder(project.folder),
  }));

  return {
    props: {
      projects: enrichedProjects,
    },
  };
}

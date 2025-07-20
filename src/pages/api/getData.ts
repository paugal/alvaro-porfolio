import { NextApiRequest, NextApiResponse } from "next";
import { ProjectsData } from "@/types/projects";
import rawProjects from "@/assets/data/projects.json";
import { getImagesFromProjectFolder } from "@/utils/getProjectImages";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  const enrichedProjects = rawProjects.projects.map((project) => ({
    ...project,
    images: getImagesFromProjectFolder(project.folder),
  }));

  res.status(200).json({ projects: enrichedProjects });
}

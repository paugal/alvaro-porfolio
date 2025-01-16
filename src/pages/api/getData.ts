import { NextApiRequest, NextApiResponse } from "next";
import { ProjectsData } from "@/types/projects";
import projectsData from "@/assets/data/projects.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectsData>
) {
  res.status(200).json(projectsData);
}

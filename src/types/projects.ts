export interface Project {
  name: string;
  url: string;
  description: string;
  folder: string;
  images: string[];
}

export interface ProjectsData {
  projects: Project[];
}

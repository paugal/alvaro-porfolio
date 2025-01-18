export interface Project {
  name: string;
  url: string;
  description: string;
  images: Array<string>;
}

export interface ProjectsData {
  projects: Project[];
}

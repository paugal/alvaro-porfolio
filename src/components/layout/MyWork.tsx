import { HTMLAttributes } from "react";
import Project from "@/components/ui/Project";
import Button from "@/components/ui/Button";
import { Project as ProjectType, ProjectsData } from "@/types/projects";
import projectsData from "@/assets/data/projects.json";

interface MyWorkProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "mobile";
}

const MyWork = ({ variant = "primary", ...props }: MyWorkProps) => {
  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  return (
    <div
      className={`${styles[variant]} flex justify-center mt-10 shadow-default mb-5`}
      {...props}
    >
      <div className={`flex flex-col p-2 max-w-4xl w-full`}>
        <h1 className="font-bold text-2xl mb-4 mt-5">PROYECTOS</h1>
        <div className="flex flex-wrap flex-row gap-5 justify-between">
          {projectsData.projects.map((project: ProjectType) => (
            <Project
              key={project.name}
              name={project.name}
              imgSrc={project.url}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4 mb-5 ">
          <Button>
            LISTA COMPLETA{" "}
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyWork;

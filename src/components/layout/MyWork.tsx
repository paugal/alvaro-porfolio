import { HTMLAttributes, useState } from "react";
import Button from "@/components/ui/Button";
import { Project as ProjectType } from "@/types/projects";
import FocusProject from "../ui/FocusProject";
import projectsData from "@/assets/data/projects.json";
import WrapperProject from "../ui/WrapperProject";

interface MyWorkProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "mobile";
  onWorkClick?: () => void;
}

interface handlerProps {
  project: ProjectType;
  index: number;
  showAll: boolean;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
  focus: number;
}

const handlerShowWork = ({
  project,
  index,
  showAll,
  setFocus,
  focus,
}: handlerProps) => {
  if (!showAll && index >= 3) return null;

  return (
    <WrapperProject
      key={`${project.name}`}
      name={project.name}
      imgSrc={project.url}
      description={project.description}
      images={project.images}
      focus={focus == index ? true : false}
      onClick={() => setFocus(index)}
    />
  );
};

const MyWork = ({
  variant = "primary",
  onWorkClick,
  ...props
}: MyWorkProps) => {
  const [showAll, setShowAll] = useState(false);
  const [focus, setFocus] = useState(100);

  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  const handleClick = () => {
    if (onWorkClick) {
      onWorkClick();
    }
    setShowAll(!showAll);
  };

  const handleFocus = () => {};

  return (
    <div
      className={`${styles[variant]} flex justify-center mt-10 shadow-default mb-5`}
      {...props}
    >
      <div className={`flex flex-col p-2 max-w-4xl w-full`}>
        <h1 className="font-bold text-xl mb-4 mt-5">PROYECTOS</h1>
        <div className="flex flex-wrap flex-row gap-5 justify-between">
          {projectsData.projects.map((project: ProjectType, index: number) =>
            handlerShowWork({ project, index, showAll, setFocus, focus })
          )}
        </div>
        <div className="flex justify-end mt-4 mb-5 ">
          <Button onClick={handleClick}>
            {!showAll ? (
              <>
                <span>LISTA COMPLETA</span>
                <span className="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </>
            ) : (
              <>
                <span>COMPRIMIR LISTA</span>
                <span className="material-symbols-outlined">
                  keyboard_arrow_up
                </span>
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyWork;

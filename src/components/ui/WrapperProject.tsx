import { HTMLAttributes } from "react";
import Project from "./Project";
import FocusProject from "./FocusProject";

interface WrapperProjectProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  images: Array<string>;
  imgSrc: string;
  focus: boolean;
}

const WrapperProject = ({
  name,
  description,
  images,
  imgSrc,
  focus,
  ...props
}: WrapperProjectProps) => {
  return (
    <div {...props}>
      {focus ? (
        <FocusProject name={name} description={description} images={images} />
      ) : (
        <Project name={name} imgSrc={imgSrc} />
      )}
    </div>
  );
};

export default WrapperProject;

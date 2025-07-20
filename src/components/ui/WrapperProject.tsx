import { HTMLAttributes } from "react";
import Project from "./Project";
import FocusProject from "./FocusProject";

interface WrapperProjectProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  images: Array<string>;
  mainPhoto: string;
  focus: boolean;
}

const WrapperProject = ({
  name,
  description,
  images,
  mainPhoto,
  focus,
  ...props
}: WrapperProjectProps) => {
  return (
    <div {...props}>
      {focus ? (
        <FocusProject name={name} description={description} images={images} />
      ) : (
        <Project name={name} mainPhoto={mainPhoto} />
      )}
    </div>
  );
};

export default WrapperProject;

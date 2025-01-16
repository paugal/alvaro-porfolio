import { HTMLAttributes } from "react";
import { prefix } from "@/utils/prefix";
import Image from "next/image";

const VARIANT_STYLES = {
  primary: "bg-bg-web text-text",
  mobile: "bg-gray-500 hover:bg-gray-600 text-white",
} as const;

interface ProjectProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANT_STYLES;
  imgSrc: string;
  name: string;
}

const Project = ({
  variant = "primary",
  imgSrc,
  name,
  ...props
}: ProjectProps) => {
  return (
    <div className="flex justify-center">
      <div className={`${VARIANT_STYLES[variant]} w-64`} {...props}>
        <Image
          src={`${prefix}${imgSrc}`}
          width={350}
          height={350}
          className="rounded-md object-cover w-full h-auto"
          alt={name}
        />
        <div className="flex flex-col mt-2 ml-1 justify-start">
          <span className="uppercase">{name}</span>
          <span className="underline">mostrar mas</span>
        </div>
      </div>
    </div>
  );
};

export default Project;

import { HTMLAttributes } from "react";
import Image from "next/image";

const VARIANT_STYLES = {
  primary: "bg-bg text-text",
  mobile: "bg-gray-500 hover:bg-gray-600 text-white",
} as const;

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANT_STYLES;
  imgSrc: string;
  name: string;
}

const AboutMe = ({ variant = "primary", ...props }: AboutMeProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={`
        ${VARIANT_STYLES[variant]}
        w-64
      `}
        {...props}
      >
        <Image
          src={props.imgSrc}
          width={350}
          height={350}
          className="rounded-md object-cover"
          alt={props.name}
        />
        <div className="flex flex-col mt-2 ml-1 justify-start">
          <span className="uppercase">{props.name}</span>
          <span className="underline">mostrar mas</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

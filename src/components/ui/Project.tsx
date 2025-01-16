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
      `}
        {...props}
      >
        <Image
          src={props.imgSrc}
          width={250}
          height={250}
          className="rounded-md object-cover"
          alt={props.name}
        />
        <div>
          <span></span>
          <span className="underline">mostrar mas</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

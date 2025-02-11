import { HTMLAttributes } from "react";
import { prefix } from "@/utils/prefix";
import Image from "next/image";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div className={`${VARIANT_STYLES[variant]}  flex justify-center  `}>
      <div
        className="w-[250px] cursor-pointer hover:shadow-light rounded-md"
        {...props}
      >
        <div className="overflow-hidden rounded-md w-[250px] h-[250px]">
          <Image
            src={`${prefix}${imgSrc}`}
            width={350}
            height={350}
            className="rounded-md object-cover w-[250px] h-[250px] hover:scale-105"
            alt={name}
          />
        </div>

        <div className="flex flex-col mt-2 ml-5 mb-3 justify-start">
          <span className="uppercase">{name}</span>
          <span className="underline">{t("projects.showMore")}</span>
        </div>
      </div>
    </div>
  );
};

export default Project;

import { HTMLAttributes } from "react";
import Image from "next/image";
import { prefix } from "@/utils/prefix";
import { useTranslation } from "react-i18next";

const VARIANT_STYLES = {
  primary: "bg-bg-web text-text",
  mobile: "bg-gray-500 hover:bg-gray-600 text-white",
} as const;

interface AboutMeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANT_STYLES;
  imgSrc?: string;
  description?: {
    title: string;
    paragraphs: string[];
  };
}

const AboutMe = ({
  variant = "primary",
  imgSrc = "/alvaro-perfil.webp",
  ...props
}: AboutMeProps) => {
  const { t } = useTranslation();
  const description = {
    title: t("aboutMe.title"),
    paragraphs: [t("aboutMe.p1"), t("aboutMe.p2")],
  };
  return (
    <div className="flex justify-center">
      <div
        className={`${VARIANT_STYLES[variant]} flex flex-col md:flex-row shadow-light p-5 m-2 gap-8 md:gap-16 rounded-md max-w-4xl`}
        {...props}
      >
        <div className="flex flex-col flex-1">
          <h1 className="font-bold text-xl mb-4">{description.title}</h1>
          {description.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-left mb-4 last:mb-0 w-full">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex justify-center w-64">
          <Image
            src={`${prefix}${imgSrc}`}
            width={250}
            height={250}
            priority={true}
            className="rounded-md object-cover w-full h-full"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import { HTMLAttributes } from "react";
import Image from "next/image";

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
  description = {
    title: "SOBRE MI",
    paragraphs: [
      "¡Hola! Soy Alvaro Abba, estudiante de último año de Arquitectura. A lolargo de mi formación, he desarrollado un profundo interés por eldiseño sostenible, la integración de la arquitectura en el entorno y la creación de espacios que conecten con las personas.",
      "Mi experiencia incluye proyectos académicos y colaboraciones que abarcan desde la conceptualización hasta el desarrollo técnico, siempre con un enfoque en el detalle y la funcionalidad. Me apasiona la idea de que la arquitectura puede transformar vidas y contribuir a un futuro más equilibrado y armonioso.",
    ],
  },
  ...props
}: AboutMeProps) => {
  return (
    <div className="flex justify-center">
      <div
        className={`${VARIANT_STYLES[variant]} flex flex-col md:flex-row shadow-light p-5 m-2 gap-8 md:gap-16 rounded-md max-w-4xl`}
        {...props}
      >
        <div className="flex flex-col flex-1">
          <h1 className="font-bold text-2xl mb-4">{description.title}</h1>
          {description.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-justify mb-4 last:mb-0 w-full">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex justify-center md:justify-start w-64">
          <Image
            src={imgSrc}
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

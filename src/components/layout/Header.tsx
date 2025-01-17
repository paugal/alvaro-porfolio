import { ReactNode, HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "primary" | "mobile";
  onAboutClick?: () => void;
  onWorkClick?: () => void;
  onContactClick?: () => void;
}

const Header = ({
  variant = "primary",
  onAboutClick,
  onWorkClick,
  onContactClick,
  ...props
}: HeaderProps) => {
  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  } as const;

  return (
    <div
      className={`${styles[variant]} flex justify-center shadow-default mb-5 sticky top-0 z-50`}
      {...props}
    >
      <div className="flex justify-between items-center p-2 max-w-4xl w-full">
        <h1 className="text-2xl">ÁLVARO ABBÁ</h1>
        <div className="flex justify-end items-center gap-8">
          <button
            onClick={onAboutClick}
            className="cursor-pointer hover:scale-105 "
          >
            SOBRE MI
          </button>
          <button
            onClick={onWorkClick}
            className="cursor-pointer  hover:scale-110"
          >
            PROYECTOS
          </button>
          <button
            onClick={onContactClick}
            className="cursor-pointer hover:scale-110"
          >
            CONTACTO
          </button>
          <button
            onClick={onContactClick}
            className="cursor-pointer bg-bg-ui text-text-inv p-1 pl-2 pr-2 rounded-lg hover:scale-110"
          >
            DESCARGAR CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

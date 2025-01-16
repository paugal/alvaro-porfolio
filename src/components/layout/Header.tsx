// src/components/ui/Button.tsx
import { ReactNode, HTMLAttributes } from "react";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "primary" | "mobile";
}

const Header = ({ variant = "primary", ...props }: HeaderProps) => {
  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  return (
    <div
      className={`${styles[variant]} flex justify-center shadow-default mb-5`}
      {...props}
    >
      <div
        className={`flex justify-between items-center  p-2 max-w-4xl w-full`}
      >
        <h1 className="text-2xl">ÁLVARO ALBÁ</h1>
        <div className="flex justify-end items-center gap-5">
          <button className="cursor-pointer"> SOBRE MI </button>
          <button className="cursor-pointer"> PROYECTOS </button>
          <button className="cursor-pointer"> CONTACTO </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

// src/components/ui/Contact.tsx
import { ReactNode, HTMLAttributes } from "react";

interface ContactProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  variant?: "primary" | "mobile";
}

const Contact = ({ variant = "primary", ...props }: ContactProps) => {
  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  };

  return (
    <div className="flex justify-center pb-96">
      <div
        className={`${styles[variant]} flex flex-col p-5 m-2 justify-center rounded-md`}
        {...props}
      >
        <h1 className="font-bold text-xl mb-4">CONTACTO</h1>
        <div className="flex flex-row gap-20 ml-5">
          <div className="flex flex-col gap-3">
            <h3>EMAIL:</h3>
            <h3>LINKEDLN:</h3>
            <h3>CV:</h3>
          </div>
          <div className="flex flex-col gap-3">
            <span>alvaro.abba@gmail.com</span>
            <span>www.linkedln.com/alvaroabba</span>
            <a className="text-link underline cursor-pointer" href="">
              link de descarga
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

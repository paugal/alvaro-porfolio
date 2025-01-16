// src/components/ui/Button.tsx
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({ children, variant = "primary", ...props }: ButtonProps) => {
  const styles = {
    primary: "bg-bg-ui text-text-inv",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    outline: "border-2 border-blue-500 hover:bg-blue-50 text-blue-500",
  };

  return (
    <button
      className={`flex justify-center items-center font-sans px-4 py-2 rounded-lg transition-colors shadow-default ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

import { ReactNode, HTMLAttributes } from "react";
import { useFocus } from "@/contexts/FocusContext";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const styles = {
    primary: "bg-bg-web text-text",
    mobile: "bg-gray-500 hover:bg-gray-600 text-white",
  } as const;

  const { setFocusIndex } = useFocus();

  const handleClick = (onclick: (() => void) | undefined) => {
    if (onclick) onclick();
    setFocusIndex(-1);
  };

  const onButtonClick = () => {
    const pdfUrl = new URL(
      "../../assets/porfolio/PORTFOLIO.pdf",
      import.meta.url
    ).href;
    const downloadFile = async () => {
      try {
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Portfolio_ALVARO_ABBA.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    downloadFile();
  };

  return (
    <div
      className={`${styles[variant]} flex justify-center shadow-default mb-5 sticky top-0 z-50`}
      {...props}
    >
      <div className="flex justify-between items-center p-2 max-w-4xl w-full">
        <h1 className="text-3xl">ÁLVARO ABBÁ</h1>
        <div className="flex justify-end items-center gap-8 text-base">
          <button
            onClick={() => handleClick(onAboutClick)}
            className="cursor-pointer hover:scale-105"
          >
            {t("header.aboutMe")}
          </button>
          <button
            onClick={() => handleClick(onWorkClick)}
            className="cursor-pointer hover:scale-110"
          >
            {t("header.projects")}
          </button>
          <button
            onClick={() => handleClick(onContactClick)}
            className="cursor-pointer hover:scale-110"
          >
            {t("header.contact")}
          </button>
          <LanguageSwitcher />
          <button
            className="cursor-pointer flex flex-row gap-1 bg-bg-ui text-text-inv p-1 pl-2 pr-2 rounded-lg hover:scale-110"
            onClick={onButtonClick}
          >
            <span className="material-symbols-outlined">download</span>
            {t("header.porfolio")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

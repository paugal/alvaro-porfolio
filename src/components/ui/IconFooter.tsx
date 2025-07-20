import { HTMLAttributes } from "react";
import Image from "next/image";
import { downloadFileFromPublic } from "@/utils/downloadFile";

interface IconFooterProps extends HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  typeInfo: string;
  data: string;
  fileName?: string;
  fileUrl?: string;
}

const IconFooter = ({
  imageUrl,
  typeInfo,
  data,
  fileName,
  fileUrl,
}: IconFooterProps) => {
  const onButtonClick = () => {
    downloadFileFromPublic(fileUrl, fileName);
  };
  return (
    <div className="flex flex-col items-left text-left gap-2 p-2">
      <Image
        src={imageUrl}
        width={25}
        height={25}
        priority={true}
        className=""
        alt="icon"
      />
      <span className="font-light opacity-50 mt-2">{typeInfo}</span>
      {typeInfo === "CV -" || typeInfo === "PORFOLIO -" ? (
        <span
          className="font-bold cursor-pointer underline text-bg-ui"
          onClick={onButtonClick}
        >
          {data}
        </span>
      ) : (
        <span className="font-bold ">{data}</span>
      )}
    </div>
  );
};

export default IconFooter;

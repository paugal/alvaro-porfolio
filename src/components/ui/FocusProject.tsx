import { HTMLAttributes, useState, useEffect, useRef } from "react";
//import { prefix } from "@/utils/prefix";
import Image from "next/image";
import { useFocus } from "@/contexts/FocusContext";
import OpenImageControls from "./OpenImageControls";

const VARIANT_STYLES = {
  primary: "bg-bg-web text-text",
  mobile: "bg-gray-500 hover:bg-gray-600 text-white",
} as const;

interface FocusProjectProps extends HTMLAttributes<HTMLDivElement> {
  variant?: keyof typeof VARIANT_STYLES;
  name: string;
  description: string;
  images: Array<string>;
}

const FocusProject = ({
  variant = "primary",
  name,
  description,
  images,
  ...props
}: FocusProjectProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const { focusIndex, setFocusIndex } = useFocus();
  const FocusElementRef = useRef<HTMLDivElement>(null);
  const [openImage, setOpenImage] = useState(false);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>): void => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (focusIndex != -1) {
      document.body.style.overflow = "hidden";
      scrollTo(FocusElementRef);
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [focusIndex]);

  const handlerChangeImage = (change: number) => {
    const lenght = images.length;
    console.log("lenght" + lenght);
    if (currentImage == 0 && change == -1) {
      setCurrentImage(lenght - 1);
    } else if (currentImage == lenght - 1 && change == 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + change);
    }
    console.log("After change currentimage" + currentImage);
  };

  return (
    <div
      ref={FocusElementRef}
      className={`${VARIANT_STYLES[variant]} fixed inset-0 z-50 flex justify-center items-center`}
    >
      <div
        className="w-full max-w-5xl h-full bg-bg-web rounded-md p-5 overflow-y-auto m-5 flex flex-col gap-10"
        {...props}
      >
        <div className="flex flex-row m-5 justify-between">
          <span className="uppercase text-3xl mb-2">{name}</span>
          <span
            onClick={(e) => {
              e.stopPropagation(); // Prevent event bubbling
              console.log("Close clicked"); // Debug log
              setFocusIndex(-1);
            }}
            className="material-symbols-outlined cursor-pointer text-bg-ui scale-[2] hover:scale-[3] w-fit h-fit"
          >
            close
          </span>
        </div>
        <div className="flex flec-row justify-center items-center gap-10 ">
          <span
            onClick={() => handlerChangeImage(-1)}
            className="material-symbols-outlined text-bg-ui cursor-pointer scale-[3] hover:scale-[4] w-fit h-fit"
          >
            keyboard_arrow_left
          </span>
          <div className="w-[650px] flex justify-center ">
            {openImage ? (
              <>
                <OpenImageControls
                  handlerChangeImage={handlerChangeImage}
                  setOpenImage={setOpenImage}
                />
                <Image
                  //src={`${prefix}${images[currentImage]}`}
                  src={`${images[currentImage]}`}
                  width={600}
                  height={600}
                  className="fixed top-0 w-full h-full rounded-md object-contain cursor-pointer z-40 bg-bg-web"
                  alt={name}
                  onClick={() => setOpenImage(false)}
                />
              </>
            ) : (
              <>
                <Image
                  //src={`${prefix}${images[currentImage]}`}
                  src={`${images[currentImage]}`}
                  width={600}
                  height={600}
                  className="w-auto h-auto rounded-md object-contain max-h-[450px] max-w-[650px] cursor-pointer hover:scale-105"
                  alt={name}
                  onClick={() => setOpenImage(true)}
                />
              </>
            )}
          </div>

          <span
            onClick={() => handlerChangeImage(1)}
            className="material-symbols-outlined text-bg-ui cursor-pointer  scale-[3] hover:scale-[4] w-fit h-fit"
          >
            keyboard_arrow_right
          </span>
        </div>

        <div className="flex flex-col m-5 justify-start">
          <span className="text-left leading-7 tracking-wide">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FocusProject;

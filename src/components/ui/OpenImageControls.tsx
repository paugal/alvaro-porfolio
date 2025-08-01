import React from "react";

interface OpenImageControlsProps {
  handlerChangeImage: (change: number) => void;
  setOpenImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const OpenImageControls: React.FC<OpenImageControlsProps> = (props) => {
  return (
    <div className="flex justify-center items-start w-full h-fit z-50 fixed inset-0  p-4 ">
      <div className="bg-bg-web rounded-md p-5 flex flex-row justify-between items-center gap-20">
        <span
          onClick={() => props.handlerChangeImage(-1)}
          className="material-symbols-outlined text-bg-ui cursor-pointer scale-[3] hover:scale-[4] w-fit h-fit"
        >
          keyboard_arrow_left
        </span>
        <span
          onClick={() => props.setOpenImage(false)}
          className="material-symbols-outlined cursor-pointer text-bg-ui scale-[2] hover:scale-[3] w-fit h-fit"
        >
          close
        </span>
        <span
          onClick={() => props.handlerChangeImage(1)}
          className="material-symbols-outlined text-bg-ui cursor-pointer  scale-[3] hover:scale-[4] w-fit h-fit"
        >
          keyboard_arrow_right
        </span>
      </div>
    </div>
  );
};

export default OpenImageControls;

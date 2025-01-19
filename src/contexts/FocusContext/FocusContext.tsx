import { createContext, useContext, useState } from "react";
import { FocusContextType } from "./types";

const FocusContext = createContext<FocusContextType | undefined>(undefined);

export const FocusProvider = ({ children }: { children: React.ReactNode }) => {
  const [focusIndex, setFocusIndex] =
    useState<FocusContextType["focusIndex"]>(-1);
  return (
    <FocusContext.Provider value={{ focusIndex, setFocusIndex }}>
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error("useFocus must be used within FocusProvider");
  }
  return context;
};

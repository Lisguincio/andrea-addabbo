 'use client'
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { createContext, useCallback, useContext, useState } from "react";

const PersonalContext = createContext<{
  currentPersonal: boolean;
  setCurrentPersonal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleMode: () => void;
}>({
  currentPersonal: false,
  setCurrentPersonal: () => {},
  toggleMode: () => {},
});

export const usePersonalContext = () => useContext(PersonalContext);

const PersonalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentPersonal, setCurrentPersonal] = useState<boolean>(false);
  const {setTheme, theme} = useTheme()
    const toggleMode = useCallback(
      () => {setCurrentPersonal((prev) => !prev), setTheme(!currentPersonal? 'light' : 'dark')},
      []
    );

  return (
    <PersonalContext.Provider
      value={{ currentPersonal, setCurrentPersonal, toggleMode }}
    >
      <div className={cn(currentPersonal && "dark")}>
      {children}
      </div>
    </PersonalContext.Provider>
  );
};

export default PersonalContextProvider;

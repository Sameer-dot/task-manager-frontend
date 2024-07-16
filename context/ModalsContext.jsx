"use client";
import { createContext, useContext, useState } from "react";

export const ModalsContext = createContext();

export const ModalsProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    open: false,
    view: "",
  });

  return (
    <ModalsContext.Provider
      value={{
        modalState,
        setModalState,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};

export function useModalsContext() {
  return useContext(ModalsContext);
}

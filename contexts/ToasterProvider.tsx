"use client";

import { ReactElement, createContext, useState } from "react";

interface ToastType {
  show: boolean;
  type: boolean;
  text: string;
}

export type UniToastType = ToastType | any;

export const InitialToastValue = {
  show: false,
  type: false,
  text: "Something went wrong!",
};

export const ToasterContext = createContext<UniToastType>(InitialToastValue);

const ToasterProvider = ({ children }: { children: ReactElement }) => {
  const [toast, setToast] = useState<ToastType>(InitialToastValue);

  return (
    <ToasterContext.Provider value={{ toast, setToast }}>
      {children}
    </ToasterContext.Provider>
  );
};

export default ToasterProvider;

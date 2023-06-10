"use client";

import { ReactElement } from "react";
import ToasterProvider from "./ToasterProvider";
import LoaderProvider from "./LoaderProvider";
import UserProvider from "./UserProvider";

const ContextWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <LoaderProvider>
      <ToasterProvider>
        <UserProvider>
          <>{children}</>
        </UserProvider>
      </ToasterProvider>
    </LoaderProvider>
  );
};

export default ContextWrapper;

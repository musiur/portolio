"use client";

import { ReactElement } from "react";
import Navigation from "./Navigation";
import ConstructionMessage from "./ConstructionMessage";
import { usePathname } from "next/navigation";

const CoreCompWrapper = ({ children }: { children: ReactElement }) => {
  const pathname = usePathname();
  return (
    <>
      <ConstructionMessage />
      {!pathname.includes("/dashboard") ? <Navigation /> : null}

      {children}
    </>
  );
};

export default CoreCompWrapper;

import { ReactElement } from "react";
import Navigation from "./Navigation";
import ConstructionMessage from "./ConstructionMessage";

const CoreCompWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ConstructionMessage />
      <Navigation />
      {children}
    </>
  );
};

export default CoreCompWrapper;

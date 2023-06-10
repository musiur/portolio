import { ReactElement } from "react";
import Navigation from "./Navigation";

const CoreCompWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default CoreCompWrapper;

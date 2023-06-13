import { ReactElement } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ConstructionMessage from "./ConstructionMessage";

const CoreCompWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <ConstructionMessage />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default CoreCompWrapper;

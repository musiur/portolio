import { ReactElement } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const CoreCompWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default CoreCompWrapper;

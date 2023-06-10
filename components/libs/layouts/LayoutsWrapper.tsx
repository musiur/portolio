import { ReactElement } from "react";
import Toaster from "./Toaster";
import Loader from "./Loader";

const LayoutsWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <Loader>
      <Toaster>
        <>{children}</>
      </Toaster>
    </Loader>
  );
};

export default LayoutsWrapper;

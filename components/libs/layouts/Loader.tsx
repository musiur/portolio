"use client";

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { faFan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useContext, useEffect, useState } from "react";

// styles
enum STYLES {
  CONTAINER = "fixed top-0 left-0 w-screen h-screen backdrop-blur-sm flex items-center justify-center transition ease-in-out duration-500 bg-[#fff50] z-[300]",
  MOUNTED = "opacity-[100%]",
  UNMOUNTED = "opacity-0",
  ICON = "animate-reverse-spin text-3xl lg:text-6xl p-3 bg-white rounded-full",
}

// main component function
const Loader = ({ children }: { children: ReactElement }) => {
  const { loader, setLoader } = useContext<UniLoaderType>(LoaderContext);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // animate on component mounting
  useEffect(() => {
    if (loader) {
      loader && setIsMounted(true);
    }
  }, [loader]);

  return (
    <div>
      {loader ? (
        <div
          className={`${STYLES.CONTAINER} ${
            isMounted ? STYLES.MOUNTED : STYLES.UNMOUNTED
          }`}
          onAnimationEnd={() => !isMounted && setLoader(false)}
        >
          <FontAwesomeIcon icon={faFan} className={STYLES.ICON} />
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default Loader;

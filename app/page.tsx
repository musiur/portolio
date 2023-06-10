"use client";

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";

const Home = () => {
  const { toast, setToast } = useContext<UniToastType>(ToasterContext);
  const { loader, setLoader } = useContext<UniLoaderType>(LoaderContext);
  console.log(toast, loader);

  useEffect(() => {
    if (loader) {
      setTimeout(() => {
        setLoader(false);
      }, 3000);
    }
  }, [loader, setLoader]);
  return (
    <>
      <section className="container mx-auto">
        <h1>Home Page</h1>
      </section>
      {/* components  */}
      <section className="container mx-auto">
        <h3>Components</h3>
        <p className="text-gray-400">Test the components</p>
        <div className="flex items-center gap-5 flex-wrap my-5">
          <button
            onClick={() => {
              setToast({
                show: true,
                type: true,
                text: "Successfully toast appeared!",
              });
            }}
            className="btn-primary"
          >
            Set Success Toast
          </button>
          <button
            onClick={() => {
              setToast({
                show: true,
                type: false,
                text: "Something broken in toast!",
              });
            }}
            className="btn-primary"
          >
            Set Error Toast
          </button>
          <button
            onClick={() => {
              setLoader(true);
            }}
            className="btn-secondary"
          >
            Set Loader
          </button>
        </div>
      </section>
      {/* buttons  */}
      <section className="container mx-auto">
        <h3>Buttons</h3>
        <div className="text-gray-400">Four variants are available</div>
        <div className="flex items-center justify-start flex-wrap gap-5 my-5">
          <button className="btn-primary">Primary</button>
          <button className="btn-secondary">Secondary</button>
          <button className="btn-outline">Outline</button>
          <button className="btn-error">Error</button>
        </div>
      </section>
      {/* typography */}
      <section className="container mx-auto">
        <h3 className="mb-10">Typography</h3>
        <h5 className="mb-5">Headings</h5>
        <div className="p-5 rounded-xl bg-gray-100 grid grid-cols-1 gap-3">
          <h1>Heading</h1>
          <h2>Heading</h2>
          <h3>Heading</h3>
          <h4>Heading</h4>
          <h5>Heading</h5>
          <h6>Heading</h6>
        </div>
      </section>

      <section className="container mx-auto">
        <h3>Icons</h3>
        <div className="my-5 flex items-center justify-start gap-3">
          <FontAwesomeIcon icon={faCartShopping} className="icon-sm" />
          <FontAwesomeIcon icon={faCartShopping} className="icon-base" />
          <FontAwesomeIcon icon={faCartShopping} className="icon-lg" />
        </div>
      </section>
    </>
  );
};

export default Home;

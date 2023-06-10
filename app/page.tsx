"use client";

import { LoaderContext, UniLoaderType } from "@/contexts/LoaderProvider";
import { ToasterContext, UniToastType } from "@/contexts/ToasterProvider";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
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
        <div className="my-20 grid grid-cols-1 gap-5">
          <h1 className="text-center hd-animate">Musiur.Alam.Opu</h1>
          <p className="text-base lg:text-xl text-center w-full md:w-2/3 lg:w-2/5 mx-auto text-gray-600">
            As a Software Engineer with an eye for design and user experience, I
            craft quality software from front to back - every aspect considered.
            You can call me your Swiss Army Knife in terms of Software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/works">
              <button className="btn-secondary">Explore projects</button>
            </Link>
            <Link
              href="https://github.com/musiur"
              passHref={true}
              target="_blank"
            >
              <button className="btn-primary">Code lab...</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

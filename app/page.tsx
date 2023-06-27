// "use client";

import Footer from "@/components/libs/core/Footer";
import {
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const imageID = useId();
  const workID = useId();
  const articleID = useId();
  const techs = [
    "javascript",
    "react",
    "redux",
    "nextjs",
    "nodejs",
    "sass",
    "mongodb",
    "tailwindcss",
    "svelte",
    "gatsby",
    "html",
    "css3",
    "git",
    "github",
  ];
  return (
    <>
      <section className="container mx-auto">
        <div className="py-20 flex items-center justify-center bg-[url('/images/ractangles_home_header.svg')] dark:bg-none bg-no-repeat bg-center bg-contain">
          <div className="grid grid-cols-1 gap-5 lg:gap-10 text-center">
            <h1 className="hd-animate">Musiur.Alam.Opu</h1>
            <p className="text-base lg:text-xl w-full md:w-2/3 lg:w-2/5 mx-auto text-gray-600 dark:text-gray-300">
              As a Software Engineer with an eye for design and user experience,
              efficiency, I craft quality software from frontend to backend - every aspect
              considered as much as possible. In order to be irreplaceable, I
              must always want to be different
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5">
              <Link href="/works">
                <button className="btn-secondary">
                  Explore projects
                  <FontAwesomeIcon
                    icon={faLongArrowRight}
                    className="text-sm ml-1"
                  />
                </button>
              </Link>
              <Link
                href="https://github.com/musiur"
                passHref={true}
                target="_blank"
              >
                <button className="btn-primary">
                  Code lab{" "}
                  <FontAwesomeIcon
                    icon={faLongArrowRight}
                    className="text-sm ml-1"
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100">
        <div className="section">
          <h3 className="text-center dark:text-black">Tech.Stack</h3>
          <Marquee className="pt-10">
            {techs.map((image) => {
              return (
                <Image
                  key={imageID}
                  src={`/images/tech_logos/${image}.svg`}
                  alt=""
                  height={100}
                  width={100}
                  className="mx-5 lg:mx-10 grayscale hover:grayscale-0 transition ease-in-out duration-150 my-auto  h-[60px] w-[60px] lg:h-[100px] lg:w-[100px]"
                />
              );
            })}
          </Marquee>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto text-center">
          <h3>Recent.Works</h3>
          <p className="w-full md:w-4/5 lg:w-2/3 mx-auto my-5 text-gray-600 text-normal lg:text-lg dark:text-gray-300">
            Veniam cillum minim elit veniam do quis ex veniam. Deserunt Lorem eu
            adipisicing cillum incididunt proident tempor eiusmod labore
            deserunt reprehenderit cupidatat veniam. Ex quis pariatur sit
            laboris elit in anim labore. Magna nostrud reprehenderit ipsum velit
            pariatur officia et ullamco. Enim velit esse minim sint in commodo
            minim.
          </p>
        </div>
        <Marquee className="py-10" direction="right" pauseOnHover={true}>
          {techs.map((image) => {
            return (
              <div
                key={workID}
                className="h-[300px] w-[250px] bg-gray-300 rounded-lg p-5 m-5 border border-white hover:border-black transition ease-in-out duration-150"
              >
                {image}
              </div>
            );
          })}
        </Marquee>
        <Link href="/works">
          <button className="btn-secondary flex items-center justify-center gap-1 mx-auto">
            All works
            <FontAwesomeIcon icon={faLongArrowRight} className="text-sm" />
          </button>
        </Link>
      </section>

      <section className="section">
        <div className="container mx-auto text-center">
          <h3>Articless.To.Read</h3>
          <p className="w-full md:w-4/5 lg:w-2/3 mx-auto my-5 text-gray-600 text-normal lg:text-lg dark:text-gray-300">
            Veniam cillum minim elit veniam do quis ex veniam. Deserunt Lorem eu
            adipisicing cillum incididunt proident tempor eiusmod labore
            deserunt reprehenderit cupidatat veniam. Ex quis pariatur sit
            laboris elit in anim labore. Magna nostrud reprehenderit ipsum velit
            pariatur officia et ullamco. Enim velit esse minim sint in commodo
            minim.
          </p>
        </div>
        <Marquee className="py-10" pauseOnHover={true}>
          {techs.map((image) => {
            return (
              <div
                key={articleID}
                className="h-[300px] w-[250px] bg-gray-300 rounded-lg p-5 m-5 border border-white hover:border-black transition ease-in-out duration-150"
              >
                {image}
              </div>
            );
          })}
        </Marquee>
        <Link href="/articles">
          <button className="btn-secondary flex items-center justify-center gap-1 mx-auto">
            All Articles
            <FontAwesomeIcon icon={faLongArrowRight} className="text-sm" />
          </button>
        </Link>
      </section>
      <Footer />
    </>
  );
};

export default Home;

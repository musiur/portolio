// "use client";

import {
  faArrowRightFromFile,
  faLongArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import Marquee from "react-fast-marquee";

const Home = () => {
  const imageID = useId();
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
        <div className="min-h-[60vh] flex items-center justify-center bg-[url('/images/ractangles_home_header.svg')] bg-no-repeat bg-right bg-contain">
          <div className="grid grid-cols-1 gap-5 lg:gap-10 text-center">
            <h1 className="hd-animate">Musiur.Alam.Opu</h1>
            <p className="text-base lg:text-xl w-full md:w-2/3 lg:w-2/5 mx-auto text-gray-600">
              As a Software Engineer with an eye for design and user experience,
              efficiency, I craft quality software from frontend- every aspect
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
          <h3 className="text-center">Tech.Stack</h3>
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
          <p className="w-full md:w-4/5 lg:w-2/3 mx-auto my-5 text-gray-600 text-normal lg:text-lg">
            Veniam cillum minim elit veniam do quis ex veniam. Deserunt Lorem eu
            adipisicing cillum incididunt proident tempor eiusmod labore
            deserunt reprehenderit cupidatat veniam. Ex quis pariatur sit
            laboris elit in anim labore. Magna nostrud reprehenderit ipsum velit
            pariatur officia et ullamco. Enim velit esse minim sint in commodo
            minim.
          </p>
        </div>
        <Marquee className="py-10" direction="right">
          {techs.map((image) => {
            return (
              <div
                key={imageID}
                className="h-[300px] w-[250px] bg-gray-300 rounded-lg p-5 m-5 border border-white hover:border-black transition ease-in-out duration-150"
              >
                {image}
              </div>
            );
          })}
        </Marquee>
        <button className="btn-secondary flex items-center justify-center gap-1 mx-auto">
          All projects
          <FontAwesomeIcon icon={faLongArrowRight} className="text-sm" />
        </button>
      </section>

      <section className="section">
        <div className="container mx-auto text-center">
          <h3>Blogs.To.Read</h3>
          <p className="w-full md:w-4/5 lg:w-2/3 mx-auto my-5 text-gray-600 text-normal lg:text-lg">
            Veniam cillum minim elit veniam do quis ex veniam. Deserunt Lorem eu
            adipisicing cillum incididunt proident tempor eiusmod labore
            deserunt reprehenderit cupidatat veniam. Ex quis pariatur sit
            laboris elit in anim labore. Magna nostrud reprehenderit ipsum velit
            pariatur officia et ullamco. Enim velit esse minim sint in commodo
            minim.
          </p>
        </div>
        <Marquee className="py-10">
          {techs.map((image) => {
            return (
              <div
                key={imageID}
                className="h-[300px] w-[250px] bg-gray-300 rounded-lg p-5 m-5 border border-white hover:border-black transition ease-in-out duration-150"
              >
                {image}
              </div>
            );
          })}
        </Marquee>
        <button className="btn-secondary flex items-center justify-center gap-1 mx-auto">
          All projects
          <FontAwesomeIcon icon={faLongArrowRight} className="text-sm" />
        </button>
      </section>
    </>
  );
};

export default Home;

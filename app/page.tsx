// "use client";

import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="min-h-[90vh] flex items-center justify-center">
          <div className="grid grid-cols-1 gap-5 lg:gap-10">
            <h1 className="text-center hd-animate">Musiur.Alam.Opu</h1>
            <p className="text-base lg:text-xl text-center w-full md:w-2/3 lg:w-2/5 mx-auto text-gray-600">
              As a Software Engineer with an eye for design and user experience,
              I craft quality software from front to back - every aspect
              considered. You can call me your Swiss Army Knife in terms of
              Software.
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
        </div>
      </div>
    </>
  );
};

export default Home;

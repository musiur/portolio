import Link from "next/link";
import { useId } from "react";
const worksCards = [
  {
    title: "Dolore ipsum quis tempor sunt eu reprehenderit esse non eu ea.",
    description:
      "Excepteur ea commodo id aliquip laborum culpa est nulla. Laboris proident voluptate non elit ullamco anim nulla. Ullamco anim ex cupidatat magna anim do ullamco mollit proident occaecat in consequat. Et sint cupidatat cillum sit exercitation aliquip aliquip excepteur.",
    link: "/works/asdfasdfasdfadfadsf",
    image: "",
  },
  {
    title: "Dolore ipsum quis tempor sunt eu reprehenderit esse non eu ea.",
    description:
      "Excepteur ea commodo id aliquip laborum culpa est nulla. Laboris proident voluptate non elit ullamco anim nulla. Ullamco anim ex cupidatat magna anim do ullamco mollit proident occaecat in consequat. Et sint cupidatat cillum sit exercitation aliquip aliquip excepteur.",
    link: "/works/asdfasdfasdfadfadsf",
    image: "",
  },
  {
    title: "Dolore ipsum quis tempor sunt eu reprehenderit esse non eu ea.",
    description:
      "Excepteur ea commodo id aliquip laborum culpa est nulla. Laboris proident voluptate non elit ullamco anim nulla. Ullamco anim ex cupidatat magna anim do ullamco mollit proident occaecat in consequat. Et sint cupidatat cillum sit exercitation aliquip aliquip excepteur.",
    link: "/works/asdfasdfasdfadfadsf",
    image: "",
  },
  {
    title: "Dolore ipsum quis tempor sunt eu reprehenderit esse non eu ea.",
    description:
      "Excepteur ea commodo id aliquip laborum culpa est nulla. Laboris proident voluptate non elit ullamco anim nulla. Ullamco anim ex cupidatat magna anim do ullamco mollit proident occaecat in consequat. Et sint cupidatat cillum sit exercitation aliquip aliquip excepteur.",
    link: "/works/asdfasdfasdfadfadsf",
    image: "",
  },
  {
    title: "Dolore ipsum quis tempor sunt eu reprehenderit esse non eu ea.",
    description:
      "Excepteur ea commodo id aliquip laborum culpa est nulla. Laboris proident voluptate non elit ullamco anim nulla. Ullamco anim ex cupidatat magna anim do ullamco mollit proident occaecat in consequat. Et sint cupidatat cillum sit exercitation aliquip aliquip excepteur.",
    link: "/works/asdfasdfasdfadfadsf",
    image: "",
  },
];
const Works = () => {
  const worksID = useId();

  return (
    <div>
      <div className="bg-gray-100">
        <div className="section max-w-[600px] mx-auto text-center grid grid-cols-1 gap-5">
          <h3>Works so far</h3>
          <p>
            Aute id officia culpa aute nisi mollit proident irure labore
            pariatur consequat. Minim irure anim Lorem dolor elit amet veniam
            dolore Lorem in dolor. Exercitation eu consectetur do tempor. Magna
            ex fugiat id cillum ea ullamco reprehenderit. Proident dolor sit
            irure aliquip velit veniam eiusmod qui proident. Occaecat id
            consequat eu laboris et elit. Do ipsum ea duis id.
          </p>
        </div>
      </div>
      <section className="container mx-auto grid grid-cols-1 gap-10 section">
        {worksCards.map((item) => {
          return (
            <div
              key={worksID}
              className="border rounded-lg hover:shadow-xl grid grid-cols-3 gap-10"
            >
              <div className="col-span-1 h-full w-full bg-gray-100 rounded-md"></div>
              <div className="col-span-2 grid grid-cols-1 gap-5 p-5">
                <h6>{item.title}</h6>
                <p>{item.description}</p>
                <Link href={item.link}>
                  <button className="btn-secondary">See details</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};
export default Works;

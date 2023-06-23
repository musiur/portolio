import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import ConstructionMessage from "./ConstructionMessage";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const date = new Date();
  const Links = [
    {
      id: 0,
      icon: faGithub,
      link: "https://github.com/musiur",
    },
    {
      id: 1,
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/musiuropu/",
    },
    {
      id: 2,
      icon: faStackOverflow,
      link: "https://stackoverflow.com/users/18190002/musiur-alam-opu",
    },
  ];
  return (
    <footer className="bg-gray-100">
      <ConstructionMessage />
      <div className="container mx-auto text-center py-10 grid grid-cols-1 gap-5">
        <div className="flex items-center justify-center gap-3">
          {/* {Links.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.link}
                passHref={true}
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-4xl text-black hover:text-gray-600 transition duration-150 ease-in-out"
                />
              </Link>
            );
          })} */}
        </div>
        <p>All rights reserved @{date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

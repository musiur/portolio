"use client";
import {
  faArrowLeftLong,
  faBook,
  faHome,
  faProjectDiagram,
  faToolbox,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Tooltip from "../libs/core/tooltip/Tooltip";
import { usePathname, useRouter } from "next/navigation";

const DashboardNav = () => {
  const Links = [
    {
      id: 1,
      text: "Works",
      link: "/dashboard/works",
      icon: faProjectDiagram,
    },
    {
      id: 2,
      text: "Articles",
      link: "/dashboard/articles",
      icon: faBook,
    },
    {
      id: 3,
      text: "Users",
      link: "/dashboard/users",
      icon: faUserGroup,
    },
  ];
  const pathname = usePathname();
  return (
    <div className="sticky top-0 backdrop-blur shadow">
      <div className="px-5 md:px-10 flex items-center justify-start gap-5 lg:gap-10">
        <Tooltip
          props={{
            text: "Home",
            type: "primary",
          }}
        >
          <Link
            href="/"
            className={`flex items-center justify-center gap-2 text-gray-400 hover:text-gray-600`}
          >
            <FontAwesomeIcon icon={faArrowLeftLong} className="icon-base " />
            <span className="hidden md:flex">Back</span>
          </Link>
        </Tooltip>
        <Link
          href="/dashboard"
          className={`flex items-center justify-center gap-2 ${
            pathname === "/dashboard"
              ? "text-black hover:text-gray-600"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          <FontAwesomeIcon icon={faUser} className="icon-base " />
          <span className="hidden md:flex">Home</span>
        </Link>
        {Links.map((link) => {
          return (
            <Link
              href={link.link}
              key={link.id}
              className={`${
                pathname.includes(link.link)
                  ? "text-gray-600 hover:text-gray-800"
                  : "text-gray-400 hover:text-gray-600"
              } py-4 flex items-center justify-center gap-2`}
            >
              <FontAwesomeIcon icon={link.icon} className="icon-base" />
              <span className="hidden md:flex">{link.text}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardNav;

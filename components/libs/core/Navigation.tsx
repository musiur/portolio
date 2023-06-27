"use client";

import {
  faFile,
  faHamburger,
  faSignOut,
  faTimes,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { InitialUserValue, UserContext } from "@/contexts/UserProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";

interface NavigationItemType {
  id: number;
  text: string;
  link: string;
}

interface LinksType {
  id: number;
  text: string;
  link: string;
  icon: any;
}

const NavigationItems: NavigationItemType[] = [
  {
    id: 0,
    text: "About",
    link: "/about",
  },
  {
    id: 1,
    text: "Works",
    link: "/works",
  },
  {
    id: 2,
    text: "Articles",
    link: "/articles",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
];

const Links: LinksType[] = [
  {
    id: 0,
    icon: faGithub,
    link: "https://github.com/musiur",
    text: "GitHub",
  },
  {
    id: 1,
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/musiuropu/",
    text: "LinkedIn",
  },
  {
    id: 2,
    icon: faStackOverflow,
    link: "https://stackoverflow.com/users/18190002/musiur-alam-opu",
    text: "StackOverflow",
  },
  {
    id: 3,
    icon: faFile,
    link: "https://docs.google.com/document/d/11nSchtgCVFXV3gGwbB0n_URbf1jrJ_dS/edit?usp=sharing&ouid=114032079575241305407&rtpof=true&sd=true",
    text: "Resume",
  },
];

// styles
enum STYLES {
  NAV = "sticky top-0 backdrop-blur-2xl dark:bg-[#00000090] py-2 z-50",
  CONTAINER = "container flex items-center justify-between gap-5 mx-auto",
  BRAND = "text-xl lg:text-2xl font-bold flex items-center justify-start gap-1",
  ITEMS = "hidden md:flex items-center justify-center",
  ITEM = "py-2 px-4 text-sm rounded-lg cursor-pointer transition ease-in-out duration-300 font-semibold",
  ACTIONS = "flex items-center justify-end gap-3 md:gap-5",
  CART = "relative h-full mr-3 md:mr-5 flex items-center justify-center",
  CART_ICON = "icon-base cursor-pointer",
  DRAWER = "fixed top-0 left-0 w-screen h-screen backdrop-blur-2xl transition ease-in-out duration-300 flex md:hidden z-[100]",
  MOUNTED = "translate-y-0",
  UNMOUNTED = "-translate-y-[100%]",
  DRAWER_CONTAINER = "container mx-auto py-5",
  CLOSE_ICON = "icon-lg absolute top-0 right-0 mt-[10px]",
  DRAWER_ITEMS = "my-5 px-2",
  DRAWER_ITEM = "my-3",
}

const Navigation = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const { setToast } = useContext(ToasterContext);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // animating on mounting drawer component
  useEffect(() => {
    openDrawer && setIsMounted(true);
  }, [openDrawer]);

  // animating on unmounting drawer component
  const CloseDrawer = () => {
    setTimeout(() => {
      setOpenDrawer(false);
    }, 300);
  };
  useEffect(() => {
    !isMounted && CloseDrawer();
  }, [isMounted]);

  return (
    <>
      <nav className={STYLES.NAV}>
        <div className={STYLES.CONTAINER}>
          <div className={STYLES.BRAND}>
            <Image src="/images/crescents.png" alt="" width={55} height={55} />
            <Link href="/" className="hidden md:flex">
              musiur
            </Link>
          </div>
          <ul className={STYLES.ITEMS}>
            {NavigationItems.map((item: NavigationItemType) => {
              const { id, text, link } = item;
              return (
                <li key={id} className={STYLES.ITEM}>
                  <Link href={link}>{text}</Link>
                </li>
              );
            })}
          </ul>
          <div className={STYLES.ACTIONS}>
            {Links.map((item) => {
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  passHref={true}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={item.icon} className="icon-lg" />
                </Link>
              );
            })}

            {user.token ? (
              <div className="flex items-center justify-center gap-5">
                <Link href="/dashboard">
                  <FontAwesomeIcon icon={faUserCircle} className="icon-lg" />
                </Link>
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="text-lg text-error md:cursor-pointer"
                  onClick={() => {
                    localStorage.clear();
                    setUser(InitialUserValue);
                    setToast({
                      show: true,
                      type: false,
                      text: "Logout successful!",
                    });
                  }}
                />
              </div>
            ) : (
              <Link href="/auth/login">
                <button className="btn-primary">Login</button>
              </Link>
            )}

            <ModeToggle />

            <div className="md:hidden">
              <FontAwesomeIcon
                icon={faHamburger}
                className={STYLES.CART_ICON}
                onClick={() => setOpenDrawer(true)}
              />
            </div>
          </div>
        </div>
      </nav>
      {openDrawer ? (
        <div
          className={`${STYLES.DRAWER} ${
            isMounted ? STYLES.MOUNTED : STYLES.UNMOUNTED
          }`}
        >
          <div className={STYLES.DRAWER_CONTAINER}>
            <div className={STYLES.BRAND}>
              <div className="relative w-full">
                <div className={STYLES.BRAND}>
                  <Image
                    src="/images/crescents.png"
                    alt=""
                    width={45}
                    height={45}
                  />
                  <Link href="/" onClick={CloseDrawer}>
                    musiur
                  </Link>
                </div>
                <FontAwesomeIcon
                  icon={faTimes}
                  className={STYLES.CLOSE_ICON}
                  onClick={() => {
                    openDrawer && setIsMounted(false);
                  }}
                />
              </div>
            </div>
            <ul className={STYLES.DRAWER_ITEMS}>
              {NavigationItems.map((item: NavigationItemType) => {
                const { id, text, link } = item;
                return (
                  <li
                    key={id}
                    className={STYLES.DRAWER_ITEM}
                    onClick={CloseDrawer}
                  >
                    <Link href={link}>{text}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navigation;

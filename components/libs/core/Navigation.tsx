"use client";

import {
  faHamburger,
  faSignOut,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { InitialUserValue, UserContext } from "@/contexts/UserProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";
import Image from "next/image";

interface NavigationItemType {
  id: number;
  text: string;
  link: string;
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
    text: "Contact",
    link: "/contact",
  },
];

// styles
enum STYLES {
  NAV = "sticky top-0 backdrop-blur-2xl py-2 z-50",
  CONTAINER = "container flex items-center justify-between gap-5 mx-auto",
  BRAND = "text-xl lg:text-2xl font-bold flex items-center justify-start gap-1",
  ITEMS = "hidden md:flex items-center justify-center",
  ITEM = "py-2 px-4 text-sm text-gray-600 hover:text-black rounded-lg cursor-pointer transition ease-in-out duration-300 font-semibold",
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
            <Link href="/">musiur</Link>
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
            <Link
              href="https://docs.google.com/document/d/11nSchtgCVFXV3gGwbB0n_URbf1jrJ_dS/edit?usp=sharing&ouid=114032079575241305407&rtpof=true&sd=true"
              passHref={true}
              target="_blank"
            >
              <button className="btn-secondary">Resume</button>
            </Link>

            {user.token ? (
              <button className="btn-error flex items-center justify-center gap-2">
                Logout
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="text-sm text-gray-100"
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
              </button>
            ) : (
              <Link href="/auth/login">
                <button className="btn-primary">Login</button>
              </Link>
            )}

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

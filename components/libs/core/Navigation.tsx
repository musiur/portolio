"use client";

import {
  faCartShopping,
  faHamburger,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Badge from "./Badge";
import { useContext, useEffect, useState } from "react";
import { InitialUserValue, UserContext } from "@/contexts/UserProvider";
import { ToasterContext } from "@/contexts/ToasterProvider";

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
    text: "Contact",
    link: "/contact",
  },
  {
    id: 2,
    text: "Item",
    link: "/item",
  },
  {
    id: 3,
    text: "Dashboard",
    link: "/dashboard",
  },
];

// styles
enum STYLES {
  NAV = "sticky top-0 backdrop-blur-2xl py-4",
  CONTAINER = "container flex items-center justify-between gap-5 mx-auto",
  BRAND = "text-xl lg:text-2xl font-bold",
  ITEMS = "hidden md:flex items-center justify-center",
  ITEM = "py-2 px-4 hover:bg-gray-100 rounded-lg cursor-pointer transition ease-in-out duration-500",
  ACTIONS = "flex items-center justify-end gap-3 md:gap-5",
  CART = "relative h-full mr-3 md:mr-5 flex items-center justify-center",
  CART_ICON = "icon-base cursor-pointer",
  DRAWER = "fixed top-0 left-0 w-screen h-screen backdrop-blur-2xl transition ease-in-out duration-300 flex md:hidden z-10",
  MOUNTED = "translate-y-0",
  UNMOUNTED = "-translate-y-[100%]",
  DRAWER_CONTAINER = "container mx-auto py-5",
  CLOSE_ICON = "icon-lg absolute top-0 right-0",
  DRAWER_ITEMS = "my-5",
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
            <Link href="/">BrandName</Link>
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
            <Link href="/" className={STYLES.CART}>
              <Badge count={999} />
              <FontAwesomeIcon
                icon={faCartShopping}
                className={STYLES.CART_ICON}
              />
            </Link>
            {user.token ? (
              <button
                className="btn-error"
                onClick={() => {
                  localStorage.clear();
                  setUser(InitialUserValue);
                  setToast({
                    show: true,
                    type: false,
                    text: "Logout successful!",
                  });
                }}
              >
                Logout
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
              <div className="relative">
                <Link href="/" onClick={CloseDrawer}>
                  BrandName
                </Link>
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

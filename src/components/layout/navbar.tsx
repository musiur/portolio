import Link from "next/link";
import { ModeToggle } from "../toggle-mode";
import Image from "next/image";
import NavLink from "./navlink";

const Navbar = () => {
  const links = [
    {
      id: 1,
      name: "About",
      href: "/about",
    },
    {
      id: 2,
      name: "Works",
      href: "/works",
    },
    {
      id: 3,
      name: "Photos",
      href: "/photos",
    },
  ];

  return (
    <header className="container sticky top-4 z-50">
      <nav className="flex justify-between items-center p-4 max-w-xl mx-auto mt-4 backdrop-blur-md bg-background/50 border border-border/50 rounded-full">
        <Link href="/">
          <Image
            src="https://utfs.io/f/09e17d0b-fdf7-4c9b-90d2-6b61c80c0297-1e7cb.png"
            alt="brand-logo"
            width={40}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-4">
          {links.map((data) => {
            return <NavLink key={data.id} data={data} />;
          })}
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;

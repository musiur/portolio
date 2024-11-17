import Link from "next/link";
import { ModeToggle } from "../toggle-mode";

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
    <header className="container sticky top-4">
      <nav className="flex justify-between items-center p-4 max-w-xl mx-auto mt-4 backdrop-blur-md bg-background/50 border border-border/50 rounded-full">
        <Link href="/">
          <div className="text-2xl font-bold">musiur</div>
        </Link>
        <div className="flex items-center gap-4">
          {links.map((link) => {
            const { id, name, href } = link;
            return (
              <Link
                key={id}
                href={href}
                className="[&>svg]:stroke-[1.5px] [&>svg]:hover:stroke-blue-600"
              >
                {name}
              </Link>
            );
          })}
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

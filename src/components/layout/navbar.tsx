import Link from "next/link";
import { ModeToggle } from "../toggle-mode";
import { Github, Linkedin, Twitter } from "lucide-react";

const Navbar = () => {
  //   const links = [
  //     {
  //       id: 1,
  //       name: "About",
  //       href: "/about",
  //     },
  //     {
  //       id: 2,
  //       name: "Projects",
  //       href: "/projects",
  //     },
  //     {
  //       id: 3,
  //       name: "Contact",
  //       href: "/contact",
  //     },
  //   ];
  const socialLinks = [
    {
      id: 1,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/musiuropu/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      id: 2,
      name: "Twitter",
      href: "https://x.com/MusiurAlam",
      icon: <Twitter className="w-6 h-6" />,
    },
    {
      id: 3,
      name: "Github",
      href: "https://github.com/musiur",
      icon: <Github className="w-6 h-6" />,
    },
  ];
  return (
    <header className="container sticky top-4">
      <nav className="flex justify-between items-center p-4 max-w-xl mx-auto mt-4 backdrop-blur-md bg-background/50 border border-border/50 rounded-full">
        <div className="text-2xl font-bold">musiur</div>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const { id, name, href, icon } = link;
            return (
              <Link
                key={id + name}
                href={href}
                passHref={true}
                target="_blank"
                className="[&>svg]:stroke-[1.5px] [&>svg]:hover:stroke-blue-600"
              >
                {icon}
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

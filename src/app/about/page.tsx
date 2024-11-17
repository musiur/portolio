import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Page = () => {
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
    <div className="[&>*]:text-center [&>*]:text-gray-400 dark:[&>*]:text-gray-600">
      <section className="container section">
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold">
          hi! i&apos;m <span className="text-blue-600">musiur</span> alam opu
        </h1>
        <p className="text-lg">
          a software engineer with a passion for building products that are both
          functional and aesthetically pleasing.
        </p>
      </section>
      <div className="flex items-center justify-center gap-4 container section">
        {socialLinks.map((link) => {
          const { id, name, href, icon } = link;
          return (
            <Link
              key={id + name}
              href={href}
              passHref={true}
              target="_blank"
              className="[&>svg]:stroke-[1.5px] [&>svg]:hover:stroke-blue-600 transition ease-in-out duration-500"
            >
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Page;

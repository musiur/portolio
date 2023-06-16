import Link from "next/link";

const About = () => {
  return (
    <section className="container mx-auto">
      <div className="text-center grid grid-cols-1 gap-10">
        <div className="h-[300px] w-[300px] mx-auto bg-[url('/images/opu.png')] bg-cover bg-top rounded-lg bg-no-repeat"></div>
        <div>
          <h3>Musiur Alam Opu</h3>
          <p className="mt-2">
            Software Enigneer -{" "}
            <Link
              passHref={true}
              target="_blank"
              className="hover:text-gray-600 underline"
              href="https://github.com/musiur"
            >
              Github
            </Link>{" "}
            -{" "}
            <Link
              passHref={true}
              target="_blank"
              className="hover:text-gray-600 underline"
              href="https://www.linkedin.com/in/musiuropu/"
            >
              Linkedin
            </Link>
            -{" "}
            <Link
              passHref={true}
              target="_blank"
              className="hover:text-gray-600 underline"
              href="https://docs.google.com/document/d/1VWf3dVCusgv8jqR6w53p5Ic7W81O7zexJvvZw64zS3I/edit?usp=sharing"
            >
              CV
            </Link>
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 max-w-[500px] mx-auto">
          <h6>Technical Proficiencies with</h6>
          <p>
            2+ years of experience as a software engineer having
            responsibilities from frontend and backend.
          </p>
          <p>
            Technologies I use JS (ES6), React, Next JS, Gatsby, Svelte,
            Tailwind CSS, SASS/SCSS, Restful APIs and Integration, Redux, Git &
            Github, Yarn, Npm, pnpm, Figma, HTML5, Node JS, Express JS, MongoDB,
            Jira etc.
          </p>
          <p>
            Understanding of design fundamentals, project management and problem
            solving.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 max-w-[500px] mx-auto">
          <h6>Experiences and responsibilities</h6>
          <div>
            <p className="font-bold">
              Avalon Hosting Services Ltd. (24 July 2021 - 1 July 2022)
            </p>
            <p>Junior Software Engineer</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 max-w-[500px] mx-auto">
          <h6>Educational qualification</h6>
          <div>
            <p className="font-bold">BSc in Computer Science and Engineer</p>
            <p>North South University, Dhaka, Bangladesh</p>
            <p>{"1 Jan, '20 - 1 Jan, '24 (Expected)"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

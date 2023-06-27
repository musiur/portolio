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
  return (
    <footer className="bg-secondary text-primary">
      <ConstructionMessage />
      <div className="container mx-auto text-center py-10 grid grid-cols-1 gap-5">
        <p>All rights reserved @{date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

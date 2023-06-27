
import ConstructionMessage from "./ConstructionMessage";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-secondary text-primary dark:bg-[#020817] dark:text-gray-100">
      <ConstructionMessage />
      <div className="container mx-auto text-center py-10 grid grid-cols-1 gap-5">
        <p>All rights reserved @{date.getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;

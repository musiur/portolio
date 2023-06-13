import ConstructionMessage from "./ConstructionMessage";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="bg-gray-100">
      <ConstructionMessage />
      <div className="container mx-auto text-center py-10">
        All rights reserved @{date.getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;

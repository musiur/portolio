const Footer = () => {
  const date = new Date();
  return (
    <footer>
      <section className="container text-center bg-gray-100 py-10">
        All rights reserved @{date.getFullYear()}
      </section>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="bg-dark-100 text-white text-center py-4 mt-2">
      <p className="text-sm">
        © {new Date().getFullYear()} Money Manager. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

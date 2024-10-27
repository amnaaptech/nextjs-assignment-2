const Footer = () => {
  return (
      <footer className="bg-gray-800 p-4 mt-10">
          <div className="container mx-auto text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Delicious Desserts. All rights reserved.</p>
          </div>
      </footer>
  );
};

export default Footer;

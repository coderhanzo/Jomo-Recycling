import { useState } from "react";
import { Link } from "react-router-dom";
import menu_icon from "../../assets/menu.svg";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className="w-full py-2 flex justify-between items-center bg-gray-100 fixed top-0 left-0 z-10">
      <Link to="/">
        <img src={logo} alt="Logo" className="w-24 md:w-20" />
      </Link>
      <ul
        className={`${
          mobileMenu
            ? "fixed top-0 right-0 bottom-0 bg-black bg-opacity-75 text-white w-40 pt-8 transition-transform transform translate-x-0"
            : "fixed top-0 right-0 bottom-0 bg-black bg-opacity-75 text-white w-40 pt-8 transition-transform transform translate-x-full md:static md:flex md:bg-transparent md:w-auto md:p-0 md:translate-x-0"
        }`}
      >
        <li className="block mt-6 md:mt-0 md:inline-block md:ml-4">
          <Link to="/hero" className="text-lg md:text-base hover:text-gray-400">
            Home
          </Link>
        </li>
        <li className="block mt-6 md:mt-0 md:inline-block md:ml-4">
          <Link
            to="/services"
            className="text-lg md:text-base hover:text-gray-400"
          >
            Services
          </Link>
        </li>
        <li className="block mt-6 md:mt-0 md:inline-block md:ml-4">
          <Link
            to="/about"
            className="text-lg md:text-base hover:text-gray-400"
          >
            About Us
          </Link>
        </li>
        <li className="block mt-6 md:mt-0 md:inline-block md:ml-4">
          <Link
            to="/contact"
            className="text-lg md:text-base hover:text-gray-400 bg-blue-500 text-white px-4 py-2 rounded md:bg-transparent md:text-blue-500 md:border md:border-blue-500 md:hover:bg-blue-500 md:hover:text-white transition"
          >
            Contact
          </Link>
        </li>
      </ul>
      <img
        src={menu_icon}
        alt="Menu"
        className="block w-8 cursor-pointer md:hidden"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;

import { useEffect, useState } from "react";
// add useEffect for sticky
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  /**
   * uncommit this to make the navbar sticky
   * (this is the logic to make the navbar sticky)
   */
  // const [sticky, setSticky] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     window.scrollY > 50 ? setSticky(true) : setSticky(false);
  //   });
  // }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  // add unscroll event listener: disables menu bar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setMobileMenu(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    // <nav className={`container ${sticky ? "dark-nav" : ""}`}>
    <nav className={``}>
      {/* add this line to the className if you want the navbar to stick whiles scrolling  */}
      {/* container ${sticky ? "dark-nav" : ""} */}
      <Link to="/">
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
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
            className="text-lg md:text-base hover:text-gray-400 bg-newblue text-white px-4 py-2 rounded-[30px] md:bg-transparent md:text-newblue md:border md:border-newblue md:hover:bg-newblue md:hover:text-white transition"
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

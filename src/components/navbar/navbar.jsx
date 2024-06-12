import { useEffect, useState } from "react";
// add useEffect for sticky
// import { useEffect, useState } from "react";
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
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
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
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link className="btn" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

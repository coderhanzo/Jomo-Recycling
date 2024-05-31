import { useState } from "react";
// add useEffect for sticky
// import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu.svg";
import { Link } from "react-scroll";

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

  return (
    <nav className={`container`}>
      {/* add this line to the className if you want the navbar to stick whiles scrolling  */}
      {/* container ${sticky ? "dark-nav" : ""} */}

      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link smooth={true} to="home" offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" smooth={true} offset={-240} duration={500}>
            Service
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-165} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="btn"
            to="contact"
            smooth={true}
            offset={-160}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;

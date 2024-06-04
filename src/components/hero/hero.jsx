import "./hero.css";
import arrow from "../../assets/arrow-right-solid.svg";
import { Link } from "react-router-dom";
import About from "../about/about";
import Contact from "../contact/contact";

import Mission from "../Mission";

const hero = () => {

  return (
    <>
      <div className="hero container" id="home">
        <div className="hero-text ">
          <h1>Transforming Waste Into Resources</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            praesentium recusandae deserunt unde illo? Esse, pariatur assumenda
            at consectetur velit amet, fuga ipsum eaque blanditiis labore ad
            tenetur porro minima?
          </p>
          <Link to="/about">
            <button className="btn">
              Learn More <img src={arrow} alt="" />
            </button>
          </Link>
        </div>
        
      </div>
      <Mission />
      <Contact />
    </>
  );
};

export default hero;

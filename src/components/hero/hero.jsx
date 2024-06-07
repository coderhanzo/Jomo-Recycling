import "./hero.css";
import arrow from "../../assets/arrow-right-solid.svg";
import { Link } from "react-router-dom";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

import Mission from "../Mission";

const hero = () => {
  return (
    <>
      <div className="hero container" id="home">
        <div className="hero-text ">
          <h1>Transforming Waste Into Resources</h1>
          <p>
            At JOMO RECYCLE, we turn used PET plastic bottles into valuable
            resources, driving sustainability and innovation. Join us in
            promoting a circular economy for a greener, more sustainable future.
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
      <Footer />
    </>
  );
};

export default hero;

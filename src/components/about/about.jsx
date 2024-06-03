import "./about.css";
// import { useRef } from "react";
// import right_icon from "../../assets/arrow-right-bold.svg";
// import left_icon from "../../assets/arrow-left-bold.svg";
// import plastic_6 from "../../assets/plasticfilings2.png";
// import plastic from "../../assets/plasticfilings.jpg";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

const About = () => {
  // const slider = useRef(null);
  // let tx = 0;

  // const slideForward = () => {
  //   if (tx > -50) {
  //     tx -= 25;
  //   }
  //   slider.current.style.transform = `translateX(${tx}%)`;
  // };
  // const slideBackward = () => {
  //   if (tx < 0) {
  //     tx += 25;
  //   }
  //   slider.current.style.transform = `translateX(${tx}%)`;
  // };
  return (
    <>
      {/* Commented your About US */}{" "}
      <div>
        <div className="about-us-container">
          <div className="overlay"></div>
          {/* <img src={plastic} alt="" className="about-us-pic" /> */}

          <div className="about-us-p">
            <p>About Us!</p>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
      {/* <div className="about">
        <img
          src={right_icon}
          alt=""
          className="next-btn"
          onClick={slideForward}
        />
        <img
          src={left_icon}
          alt=""
          className="back-btn"
          onClick={slideBackward}
        />
        <div className="about-slider">
          <ul ref={slider}>
            <li>
              <div className="about-slide">
                <div className="mission-jomo">
                  <img src={plastic_6} alt="" />
                  <div className="center">
                    <h2>Our Mission</h2>
                  </div>
                </div>
                <p>
                  Our mission is to lead the way in PET recycling, promoting a
                  circular economy where every PET bottle has the opportunity
                  for a new life. We are committed to reducing plastic waste,
                  conserving natural resources, and minimising environmental
                  impact through innovative recycling solutions. By partnering
                  with communities, businesses, and stakeholders, we aim to
                  create a sustainable future for generations to come, while
                  fostering economic growth and social well-being
                </p>
              </div>
            </li>
            <li>
              <div className="about-slide">
                <div className="mission-jomo">
                  <img src={plastic_6} alt="" />
                  <div className="center">
                    <h2>Our Services</h2>
                  </div>
                </div>
                <p>
                  JOMO RECYCLE provides comprehensive PET plastic bottle
                  cleaning and preparation services for recycling. Our offerings
                  include collection, sorting, cold washing, drying, quality
                  control, baling, and logistics. We ensure that washed PET
                  meets recycling standards and is free from impurities. By
                  facilitating the PET recycling process, we contribute to
                  environmental sustainability and resource conservation,
                  supporting a circular economy for a greener future.
                </p>
              </div>
            </li>
            <li>
              <div className="about-slide">
                <div className="mission-jomo">
                  <img src={plastic_6} alt="" />
                  <div className="center">
                    <h2>Our Mission</h2>
                  </div>
                </div>
                <p>
                  Our mission is to lead the way in PET recycling, promoting a
                  circular economy where every PET bottle has the opportunity
                  for a new life. We are committed to reducing plastic waste,
                  conserving natural resources, and minimising environmental
                  impact through innovative recycling solutions. By partnering
                  with communities, businesses, and stakeholders, we aim to
                  create a sustainable future for generations to come, while
                  fostering economic growth and social well-being
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default About;

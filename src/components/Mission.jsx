import React from 'react';
// import plastic_6 from "../../assets/plasticfilings2.png";
import plastic_6 from "../../../Desktop/FOREX/plasticfilings2.png";
import Lottie from "react-lottie";
import Recycle from "../../src/assets/json/Animation - 1717415786014.json";
const Mission = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Recycle,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
    return (
        <div>
             <div>
        <h2 className="about-h2">Our Mission</h2>
      </div>
      <div className="about-container">
        <div className="about-div">
          <div className="img-holder">
            <img src={plastic_6} alt="" className="about-img" />
          </div>
          <div className="about-text">
            <p>
              Our mission is to lead the way in PET recycling, promoting a
              circular economy where every PET bottle has the opportunity for a
              new life. We are committed to reducing plastic waste, conserving
              natural resources, and minimising environmental impact through
              innovative recycling solutions. By partnering with communities,
              businesses, and stakeholders, we aim to create a sustainable
              future for generations to come, while fostering economic growth
              and social well-being
            </p>
          </div>
        </div>
        <Lottie options={defaultOptions} height={450} width={450} />
      </div>
        </div>
    );
};

export default Mission;
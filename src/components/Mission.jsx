import React from "react";
import plastic from "../../../Desktop/FOREX/plastic-no-background.png";

// import React from 'react';
// import plastic_6 from "../../assets/plasticfilings2.png";
import plastic_6 from "../components/plasticfilings2.png";
import Lottie from "react-lottie";
import Recycle from "../../src/assets/json/Animation - 1717415786014.json";
import { Link } from "react-router-dom";
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
    <>
      <div className="p-4 grid grid-cols-3 max-sm:grid-cols-1 ">
        <div className=" text-black h-[36rem] w-[29rem] shadow-xl rounded-lg max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[18rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-4">
            <h2 className="font-bold text-[23px] text-center">Our Mission</h2>
            <p className="text-center">
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
        <div className=" text-black h-[36rem] w-[29rem] shadow-xl rounded-lg hover:scale-105 hover:duration-150  max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[18rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-4">
            <h2 className="font-bold text-[23px] text-center">Our Services</h2>
            <p className="text-center">
              JOMO RECYCLE provides comprehensive PET plastic bottle cleaning
              and preparation services for recycling. Our offerings include
              collection, sorting, cold washing, drying, quality control,
              baling, and logistics. We ensure that washed PET meets recycling
              standards and is free from impurities. By facilitating the PET
              recycling process, we contribute to environmental sustainability
              and resource conservation, supporting a circular economy for a
              greener future.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Link to="/services">
              <button className="btn font-semibold ">Learn More</button>
            </Link>
          </div>
        </div>
        <div className=" text-black h-[36rem] w-[29rem] shadow-xl rounded-lg  max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[18rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-4">
            <h2 className="font-bold text-[23px] text-center">Team</h2>
            <p className="text-center">
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
      </div>
    </>
  );
};

export default Mission;

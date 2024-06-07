// import React from "react";
import plastic from "../assets/plastic-no-background.png";

// import React from 'react';
// import plastic_6 from "../../assets/plasticfilings2.png";
// import plastic_6 from "../components/plasticfilings2.png";
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
      <div className="p-5 grid grid-cols-3 max-sm:grid-cols-1 ">
        <div className=" text-black h-[37rem] w-[20rem] shadow-xl rounded-lg max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[15rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-2">
            <h2 className="font-bold text-[23px] text-center">Our Mission</h2>
            <p className="text-center">
              Our mission is to lead in PET recycling, promoting a circular
              economy where every PET bottle gets a new life. We aim to reduce
              plastic waste, conserve resources, and minimize environmental
              impact through innovative recycling solutions. Partnering with
              communities and businesses, we strive for a sustainable future,
              fostering economic growth and social well-being.
            </p>
          </div>
        </div>
        <div className=" text-black h-[37rem] w-[20rem] shadow-xl rounded-lg hover:scale-105 hover:duration-150  max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[15rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-2">
            <h2 className="font-bold text-[23px] text-center">Our Services</h2>
            <p className="text-center">
              JOMO RECYCLE offers complete PET plastic bottle recycling
              services, including collection, sorting, cold washing, drying,
              quality control, baling, and logistics. We ensure our PET products
              meet recycling standards and are impurity-free. By streamlining
              the PET recycling process, we promote environmental sustainability
              and resource conservation, contributing to a circular economy for
              a greener future.
            </p>
          </div>
          <div className="flex justify-center items-center pt-3">
            <Link to="/services">
              <button className="btn font-semibold ">Learn More</button>
            </Link>
          </div>
        </div>
        <div className=" text-black h-[37rem] w-[20rem] shadow-xl rounded-lg  max-sm:w-[23rem]  ">
          <div className="flex justify-center">
            <img src={plastic} alt="" className="w-[15rem] max-sm:w-[15rem]" />
          </div>
          <div className=" px-2">
            <h2 className="font-bold text-[23px] text-center">Jomo Team</h2>
            <p className="text-center">
              Our team comprises of experienced professionals dedicated to
              sustainability and excellence in PET plastic bottle recycling.
              From leadership and operations to quality control and logistics,
              each member plays a vital role in ensuring the highest standards.
              Together, we drive our mission of environmental stewardship,
              resource conservation, and supporting a circular economy for a
              greener future.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;

import "./about.css";
// import { useRef } from "react";
// import right_icon from "../../assets/arrow-right-bold.svg";
// import left_icon from "../../assets/arrow-left-bold.svg";
// import plastic_6 from "../../assets/plasticfilings2.png";
// import plastic from "../../assets/plasticfilings.jpg";
import Contact from "../contact/contact";
import { useEffect } from "react";
import Footer from "../footer/footer";
import community from "../../assets/community-picking.jpeg";

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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* About Us Section */}
        <section className="container mx-auto p-5">
          <div
            className="relative bg-cover bg-center h-[10rem] rounded-lg"
            style={{
              backgroundImage: "url('https://via.placeholder.com/1200x400')",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <div className="relative flex justify-center items-center h-full">
              <h2 className="text-3xl font-bold text-white">About Us</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <p className="mt-4 text-lg text-gray-700">
                At JOMO RECYCLE, our mission is to lead in PET recycling,
                promoting a circular economy where every PET bottle gets a new
                life. We aim to reduce plastic waste, conserve resources, and
                minimize environmental impact through innovative recycling
                solutions.
              </p>
              <p className="mt-4 text-lg text-gray-700">
                Partnering with communities and businesses, we strive for a
                sustainable future, fostering economic growth and social
                well-being.
              </p>
              {/* <button className="mt-6 bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Get Started
              </button> */}
            </div>
            {/* Right Column */}
            <div className="flex justify-center">
              <img
                src={community}
                alt="About Us"
                className="rounded-lg shadow-lg pt-5"
              />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-white py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-blue-800 text-center">
              Our Story
            </h2>
            <div className="grid lg:grid-cols-2 gap-10 mt-10">
              {/* Left Column */}
              <div className="text-center lg:text-left">
                <p className="mt-4 text-lg text-gray-700">
                  <span className="text-blue-800">JOMO RECYCLE</span> was
                  founded with a vision to revolutionize PET plastic recycling.
                  Although we are new in the industry, our commitment to
                  sustainability and innovative recycling methods sets us apart.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  We are dedicated to transforming plastic waste into valuable
                  resources and fostering a circular economy. As we embark on
                  this journey, we look forward to making a significant impact
                  on the environment and contributing to a greener future.
                </p>
                <p className="mt-4 text-lg text-gray-700">
                  This concise write-up emphasizes the company's new status and
                  its dedication to making a positive environmental impact,
                  aligning well with the rest of the content.
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://via.placeholder.com/200x150"
                  alt="Our Story"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default About;

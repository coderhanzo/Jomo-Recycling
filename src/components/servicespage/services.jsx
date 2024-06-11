import "./services.css";
import Contact from "../contact/contact";
import Footer from "../footer/footer";
import { useEffect } from "react";

const Services = () => {
  // Scrolls to the top of the page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-gray-900 text-white">
        {/* Services Header */}
        <div
          className="relative bg-cover bg-center h-64"
          style={{
            backgroundImage: "url('https://via.placeholder.com/1200x400')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative flex justify-center items-center h-full">
            <h2 className="text-3xl font-bold text-white">Our Services</h2>
          </div>
        </div>

        {/* Services Content */}
        <section className="container mx-auto p-5">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white">What We Offer</h2>
            <p className="mt-4 text-lg text-gray-300">
              Explore the range of services we provide to help you achieve your
              sustainability goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Collection & Sorting</h3>
              <p className="text-gray-300">
                Efficient collection and sorting of PET plastic bottles to
                ensure a smooth recycling process.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Cold Washing & Drying</h3>
              <p className="text-gray-300">
                Advanced cold washing and drying techniques to prepare PET
                bottles for recycling.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Quality Control</h3>
              <p className="text-gray-300">
                Stringent quality control measures to ensure the highest
                standards of recycled PET products.
              </p>
            </div>
            {/* Service 4 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Baling & Logistics</h3>
              <p className="text-gray-300">
                Efficient baling and logistics solutions for easy transportation
                and storage of PET materials.
              </p>
            </div>
            {/* Service 5 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">
                Sustainability Consulting
              </h3>
              <p className="text-gray-300">
                Expert consulting services to help your business implement
                sustainable practices.
              </p>
            </div>
            {/* Service 6 */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-gray-700 transition duration-300">
              <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
              <p className="text-gray-300">
                Engaging with communities to promote recycling and environmental
                awareness.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Services;

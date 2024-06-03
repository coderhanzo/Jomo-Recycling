import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Services from "./components/Services.jsx";
// import Service from "./components/servicespage/services.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>

    //Commented on your file structures for the pages.
    // <>
    //   <Navbar />
    //   <Hero />
    //   {/* <Service /> */}
    //   <div className="container">
    //     <Title title="Who We Are" subTitle="About JOMO" />
    //     <About />
    //     <Title title="Get in Touch" subTitle="Contact Us" />
    //     <Contact />
    //     <Footer />
    //   </div>
    // </>
  );
};

export default App;

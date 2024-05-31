// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Title from "./components/title/title.jsx";
import Contact from "./components/contact/contact.jsx";
import Footer from "./components/footer/footer.jsx";
// import Service from "./components/servicespage/services.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Service /> */}
      <div className="container">
        <Title title="Who We Are" subTitle="About JOMO" />
        <About />
        <Title title="Get in Touch" subTitle="Contact Us" />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

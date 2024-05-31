import "./hero.css";
import arrow from "../../assets/arrow-right-solid.svg";

const hero = () => {
  return (
    <div className="hero container" id="home">
      <div className="hero-text">
        <h1>Transforming Waste Into Resources</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
          praesentium recusandae deserunt unde illo? Esse, pariatur assumenda at
          consectetur velit amet, fuga ipsum eaque blanditiis labore ad tenetur
          porro minima?
        </p>
        <button className="btn">
          Learn More <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default hero;

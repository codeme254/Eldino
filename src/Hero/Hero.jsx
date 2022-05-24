import React from "react";

const Hero = ({handleClick}) => {
  return (
    <section className="hero" id="home">
      <div className="hero__textbox">
        <h1 className="hero__heading">
          expert care for the elderly
        </h1>
        <p className="hero__description">
          We make the world a better place to be by providing the best care to
          the elderly.
        </p>
        <button className="hero__button" onClick={handleClick}>Learn More</button>
      </div>
    </section>
  );
};
export default Hero;

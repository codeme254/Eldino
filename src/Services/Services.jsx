import React from "react";
import image1 from "../Assets/Images/elder-sports.jpg";

const Services = () => {
  return (
    <section className="services__section" id="services">
      <div className="services__left">
        <h4 className="services__title">
          we provide the best care to the elders
        </h4>
        <p className="services__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab optio eum
          sequi natus! Reiciendis vitae omnis mollitia aut illo quae.
        </p>
        <div className="services__left--layout">
          <div className="services__left--image">
            <img
              src={image1}
              alt="elders doing sports activities"
              className="services__left--img--main"
            />
          </div>
          <ul className="services__list">
            <li className="services__list--item">
              amet consectetur adipisicing
            </li>
            <li className="services__list--item">amet adipisicing</li>
            <li className="services__list--item">consectetur adipisicing</li>
            <li className="services__list--item">consectetur adipisicing</li>
            <li className="services__list--item">Lorem, ipsum dolor.</li>
            <li className="services__list--item">ipsum dolor sit amet.</li>
          </ul>
        </div>
      </div>
      <div className="services__right">
        <div className="services__box-right">
          <p className="services__box-right--text">
            They age gracefully here with peace.
          </p>
          <div className="services__box-right__image">
            <img
              src={image1}
              alt="elders doing sporting activities"
              className="services__box-right__image--img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;

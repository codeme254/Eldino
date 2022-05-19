import React from "react";

const Testimony = ({ image, testimony, name }) => {
  return (
    <div className="testimony">
      <div className="testimony__image">
        <img src={image} alt={name} className="testimony__image--img" />
      </div>
      <p className="testimony__text">{testimony}</p>
      <p className="testimony__giver">{name}</p>
    </div>
  );
};

export default Testimony;

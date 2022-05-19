import React from "react";

const Opportunity = ({ image, title, text, linkRoute }) => {
  return (
    <div className="opportunity">
      <div className="oppotunity__image">
        <img
          src={image}
          alt="opportunity _image"
          className="opportunity__image--img"
        />
      </div>
      <div className="opportunity__textbox">
        <h4 className="opportunity__textbox--title">{title}</h4>
        <p className="opportunity__textbox--text">{text}</p>
        <a href='/' className="opportunity__textbox--link">
          learn more
        </a>
      </div>
    </div>
  );
};
export default Opportunity;

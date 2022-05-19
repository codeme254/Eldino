import React from "react";

const Title = ({ mainTitle, descriptionText }) => {
  return (
    <div className="title">
      <h2 className="title__main">{mainTitle}</h2>
      <p className="title__description">{descriptionText}</p>
    </div>
  );
};
export default Title;

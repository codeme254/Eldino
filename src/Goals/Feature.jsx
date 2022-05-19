import React from "react";

const Feature = ({ icon, title }) => {
  return (
    <div className="goal__feature">
      <div className="goal__feature--icon">{icon}</div>
      <p className="goal__feature--title">{title}</p>
    </div>
  );
};
export default Feature;

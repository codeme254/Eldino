import React from "react";

const Explanation = ({ icon, subtitle, heading }) => {
  return (
    <div className="miniexplanation">
      <div className="miniexplanation__svg">{icon}</div>
      <p className="miniexplanation__subtitle">{subtitle}</p>
      <h5 className="miniexplanation__heading">{heading}</h5>
      <a href="/" className="miniexplanation__link">
        learn more
      </a>
    </div>
  );
};

export default Explanation;

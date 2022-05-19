import React from "react";

const SuccessBox = ({ count, title }) => {
  return (
    <div className="success__box">
      <h5 className="success__box--count">{count.toLocaleString()}</h5>
      <p className="success__box--title">{title}</p>
    </div>
  );
};
export default SuccessBox;

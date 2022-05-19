import React from "react";
import SuccessBox from "./SuccessBox";

const SuccessSection = () => {
  return (
    <section className="success-section">
      <SuccessBox count={3000} title="rooms available" />
      <SuccessBox count={600} title="nurses at work" />
      <SuccessBox count={17000} title="elders attended to" />
      <SuccessBox count={9000} title="happy customers" />
    </section>
  );
};

export default SuccessSection;

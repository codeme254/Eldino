import React from "react";
import SuccessBox from "./SuccessBox";

const SuccessSection = () => {
  return (
    <section className="success-section" id="success">
      <SuccessBox target={3000} count={3000} title="rooms available" />
      <SuccessBox target={600} count={600} title="nurses at work" />
      <SuccessBox target={17000} count={17000} title="elders attended to" />
      <SuccessBox target={9000}count={9000} title="happy customers" />
    </section>
  );
};

export default SuccessSection;

import React from "react";
import Feature from "./Feature";

import { Nurse } from "../Assets/Icons/Icons";

const Goals = () => {
  return (
    <section className="goals-section" id="goals">
      <h2 className="goals-setion__title">
        our goal is to make the lives of the old people better.
      </h2>

      <div className="goals__features__container">
        <Feature icon={<Nurse />} title="expert nursing staff" />
        <Feature icon={<Nurse />} title="expert nursing staff" />
        <Feature icon={<Nurse />} title="expert nursing staff" />
      </div>
    </section>
  );
};

export default Goals;

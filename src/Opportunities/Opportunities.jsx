import React from "react";
import Title from "../Title/Title";

import Opportunity from "./Opprtunity";
import img1 from "./../Assets/Images/two-old.jpg";

const Opportunities = () => {
  return (
    <section className="opportunities__section">
      <Title
        mainTitle="other opportunities"
        descriptionText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi?"
      />
      <div className="opportunities__container">
        <Opportunity
          image={img1}
          title="you can live here with love"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi? Lorem ipsum dolor sit amet "
        />
        <Opportunity
          image={img1}
          title="you can live here with love"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi? Lorem ipsum dolor sit amet "
        />
      </div>
    </section>
  );
};
export default Opportunities;

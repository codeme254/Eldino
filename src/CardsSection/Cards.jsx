import React from "react";
import Card from "./Card";
import img1 from './../Assets/Images/two-old.jpg';
import img2 from './../Assets/Images/elders-relaxing.jpg';
import img3 from './../Assets/Images/greeting.jpg';
import img4 from './../Assets/Images/holding-hands.jpg';

const Cards = () => {
  return (
    <section className="cards-section" id="about">
      <Card image={img1} title="special care" subtitle="sea shells on the sea shore." />
      <Card image={img2} title="special relaxation" subtitle="sea shells on the sea shore." />
      <Card image={img3} title="special respect" subtitle="sea shells on the sea shore." />
      <Card image={img4} title="special counselling" subtitle="sea shells on the sea shore." />
    </section>
  );
};
export default Cards;
import React from "react";

import Testimony from "./Testimony";
import user1 from "./../Assets/Images/user-1.jpg";
import user2 from "./../Assets/Images/user-2.jpg";
import user3 from "./../Assets/Images/user-3.jpg";

const Testimonies = () => {
  return (
    <section className="testimonies__section" id="testimonies">
      <div className="testimonies__container">
        <Testimony
          image={user1}
          testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus culpa at neque molestiae ad earum dolores tempora consectetur ex quibusdam suscipit recusandae, temporibus porro eveniet laboriosam, velit, obcaecati et doloribus? Veritatis, optio nulla saepe ducimus placeat ea repudiandae totam!"
          name="john kim"
        />
        <Testimony
          image={user2}
          testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus culpa at neque molestiae ad earum dolores tempora consectetur ex quibusdam suscipit recusandae, temporibus porro eveniet laboriosam, velit, obcaecati et doloribus? Veritatis, optio nulla saepe ducimus placeat ea repudiandae totam!"
          name="maria anna"
        />
        <Testimony
          image={user3}
          testimony="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minus culpa at neque molestiae ad earum dolores tempora consectetur ex quibusdam suscipit recusandae, temporibus porro eveniet laboriosam, velit, obcaecati et doloribus? Veritatis, optio nulla saepe ducimus placeat ea repudiandae totam!"
          name="jack kip"
        />
      </div>
    </section>
  );
};
export default Testimonies;

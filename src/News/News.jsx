import React from "react";
import Title from "./../Title/Title";
import NewsCard from "./NewsCard";

import img1 from "./../Assets/Images/two-old.jpg";

const NewsAndUpdates = () => {
  return (
    <section className="news_section">
      <Title
        mainTitle="news & updates"
        descriptionText="Lorem ipsum dolor sit, amet consectetur adipisicing elit."
      />
      <div className="newscards__container">
        <NewsCard
          image={img1}
          date={new Date().toLocaleDateString()}
          blogger="admin"
          numberOfComments={18}
          title="children care coming soon"
          previewText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto at enim voluptatum sequi ad recusandae atque porro deserunt consectetur ut."
        />
        <NewsCard
          image={img1}
          date={new Date().toLocaleDateString()}
          blogger="admin"
          numberOfComments={18}
          title="children care coming soon"
          previewText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto at enim voluptatum sequi ad recusandae atque porro deserunt consectetur ut."
        />
        <NewsCard
          image={img1}
          date={new Date().toLocaleDateString()}
          blogger="admin"
          numberOfComments={18}
          title="children care coming soon"
          previewText="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto at enim voluptatum sequi ad recusandae atque porro deserunt consectetur ut."
        />
      </div>
    </section>
  );
};

export default NewsAndUpdates;

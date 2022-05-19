import React from "react";
import { Calendar, User, Comment } from "../Assets/Icons/Icons";

const NewsCard = ({
  image,
  date,
  blogger,
  numberOfComments,
  title,
  previewText,
}) => {
  return (
    <a href="/" className="newscard__link">
      <div className="newsCard">
        <div className="newscard__header">
          <div className="newscard__image">
            <img
              src={image}
              alt="news _image preview"
              className="newscard__image--img"
            />
          </div>
          <div className="newscard__details">
            <span className="newscard__details--box">
              <Calendar /> <p className="newscard__details--text">{date}</p>
            </span>
            <span className="newscard__details--box">
              <User /> <p className="newscard__details--text">{blogger}</p>
            </span>
            <span className="newscard__details--box">
              <Comment />
              <p className="newscard__details--text">
                {numberOfComments} comments
              </p>
            </span>
          </div>
        </div>
        <div className="newscard__body">
          <h4 className="newscard__body--title">{title}</h4>
          <p className="newscard__body--preview-text">{previewText}</p>
        </div>
      </div>
    </a>
  );
};
export default NewsCard;

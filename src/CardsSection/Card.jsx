import React from "react";

const Card = ({image, title, subtitle}) => {
    return(
        <div className="card">
            <div className="card__image">
                <img src={image} alt="title" className="card__image--img" />
            </div>
            <div className="card__body">
                <h3 className="card__body--title">{title}</h3>
                <p className="card__body--subtitle">{subtitle}</p>
            </div>
        </div>
    )
}

export default Card;

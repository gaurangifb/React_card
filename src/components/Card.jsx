import React from "react";
import "./Card.css";

const Card = ({ imgSrc, imgAlt, title, description, buttonText, link }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a className="card-btn" href={link}>
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default Card;

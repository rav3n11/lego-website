//a material themed card for displaying an item
//with a top colored section an image and description

import React from "react";

export default function MoreCard({title, description, image, img_size, color, small_card, hover, hoverEnd}) {
  return (
    <div className={`material-card-hor ${!small_card && "small-card"}`}
      onMouseEnter={hover}
      onMouseLeave={hoverEnd}
    >
      <div className={`left-section-colored ${color}`}>
        <div className={`left-card-image ${img_size && img_size}`}>
          <img src={image} alt="item" />
        </div>
      </div>
      <div className="card-content-right">
        <p className="card-title"> {title}</p>
        <p className="card-description">
          {description}
        </p>
        <button className="see-more-button"> See More </button>
      </div>
    </div>
  );
}

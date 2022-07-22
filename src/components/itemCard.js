//a material themed card for displaying an item
//with a top colored section an image and description

import React from "react";

export default function ItemCard({title, description, image, img_size, color}) {
  return (
    <div className="material-card-ver">
      <div className={`top-section-colored ${color}`}>
        <div className={`top-card-image ${img_size && img_size}`}>
          <img src={image} alt="item" />
        </div>
      </div>
      <div className="card-content">
        <p className="card-title"> {title}</p>
        <p className="card-description">
          {description}
        </p>
        <button className="check-out-button"> Check out </button>
      </div>
    </div>
  );
}

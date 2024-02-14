import React from 'react';
import "../../styles/slider.css"

const Card = ({ img, title, content }) => {
  return (
    <div className="card">
      <div className='card-image'></div>
      <div className="card-body">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;

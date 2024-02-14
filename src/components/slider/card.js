import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import "../../styles/Slider.css"

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

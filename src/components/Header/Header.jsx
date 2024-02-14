
import React from 'react';
import Navbar from './Navbar';
import "../../styles/navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const handleClick = () => {
    console.log('Go There');
  };

  return (
    <div className='header'>
       <div className='title'>
          <Navbar />
          <div className='title-container'>
            <h1>Lorem ipsum</h1>
            <h2>Neque porro quisquam</h2>
            <p>
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
              "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
            </p>
            <button className='go-there' onClick={handleClick}>Go there... 
              <FontAwesomeIcon icon={faCirclePlay} size="lg"/>
            </button>
          </div>
       </div>
       <div className='animation'></div>
    </div>
  );
};

export default Header;



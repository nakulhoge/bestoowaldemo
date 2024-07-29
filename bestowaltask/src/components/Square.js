import React from 'react';
import './Square.css'; // Import the CSS file for styling

const Square = ({ imageSrc, text,para }) => {
  return (
    <div className="square">
      <img src={imageSrc} alt="images" />
      <div className="overlay">
        <span className="text1">{text}</span>
        <div >
        <span className='para1'>{para}</span>
        </div>
      </div>
    </div>
  );
}

export default Square;

import React from 'react';
import "./Bsteps.css";
function BstepCard({ iconSrc, backgroundIconSrc, heading, description }) {
  return (
    <>
      <div className="bstep-card">
        <div className="bs-card-image-display">
          <img className='icon-image' src={iconSrc} alt="icon" />
          <img className='icon-background' src={backgroundIconSrc} alt="background-icon" />
        </div>
        <div className="bs-card-data">
          <h3>{heading}</h3>
          <h4>{description}</h4>
        </div>
      </div>
    </>
  );
}
export default BstepCard;


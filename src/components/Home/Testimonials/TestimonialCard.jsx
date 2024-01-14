import React from "react";
import "./Testimonials.css";
import star from "../../../assets/images/star-white.png"
import dot from "../../../assets/images/dot.png"
function TestimonialCard({ name, reviews,description }) {
  return (
    <>
      <div className="testimonial-card">
        <div className="naming-details">
        <h2>{name}</h2>
        <h3>{reviews}</h3>
        </div>
        <div className="stars">
          <div className="star">
            <img src={star} alt="star" />
          </div>
          <div className="star">
            <img src={star} alt="star" />
          </div>
          <div className="star">
            <img src={star} alt="star" />
          </div>
          <div className="star">
            <img src={star} alt="star" />
          </div>
          <div className="star">
            <img src={star} alt="star" />
          </div>
        </div>
        <p>{description}</p>
        <div className="posting-date">
        <img src={dot} alt="dot-online" />
        <h4>10 days ago</h4>
      </div>
      </div>
      
    </>
  );
}
export default TestimonialCard;

import React from "react";
import "./Brand.css";
import Driver from "../../../assets/images/taxiDriver.png"
import stars from "../../../assets/images/stars.png"
import fig1 from "../../../assets/images/fig1.png"
import fig2 from "../../../assets/images/fig2.png"
import fig3 from "../../../assets/images/fig3.png"

function Brand() {
  return (
    <>
      <div className="branding-section1">
        <div className="wrapper branding1">
          <div className="brading1-data">
            <div className="branding1-text">
              <h1>
                Lorem ipsum dolor sit amet, adipiscing elit. Curabitur sodales
              </h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco Lorem
                ipsum dolor sit amet, consecteturrud exercitation ullamco Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor inci
              </h2>
            </div>
            <button className="branding1-button">Learn more</button>
          </div>
          <div className="branding1-image">
            <img src={Driver} alt="driver in a taxi" />
          </div>
        </div>
      </div>
      <div className="branding-section2">
        <div className="wrapper branding2">
        <div className="branding2-data">
        <div className="branding2-heading-ratings">
          <div className="branding2-heading">
            <h1>How we support our customers all over the world</h1>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales risus in lorem volutpat condimentum. Aliquam commodo maximusegestas vitae nisl vitae, scelerisque pulvinar mauris. tempus bibendum pellentesque ut elit. Donec rutrum egestas</h2>
          </div>
          <div className="branding2-ratings">
            <div className="brading2-rating">
              <div className="stars">
                <img src={stars} alt="stars" className="w-100"/>
              </div>
              <div className="rating-text">
                <h3>4.9 / 5 rating</h3>
                <h4>Service</h4>
              </div>
            </div>
            <div className="brading2-rating">
              <div className="stars">
                <img src={stars} alt="stars" className="w-100" />
              </div>
              <div className="rating-text">
                <h3>4.8 / 5 rating</h3>
                <h4>Satisfaction</h4>
              </div>
            </div>
          </div>
        </div>        
        </div>
        <div className="branding2-brandfigures">
          <div className="brading2-brandfig">
          <div className="branding2-figure">
            <img src={fig1} alt="fig-1" />
          </div>
          <div className="branding2-figdetails">
            <h1>15+ Years</h1>
            <h2>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales risus in lorem volutpat condimentum. Aliquam commodo</h2>
          </div>
          </div>
          <div className="brading2-brandfig">
          <div className="branding2-figure">
            <img src={fig2} alt="fig-1" />
          </div>
          <div className="branding2-figdetails">
            <h1>130+ Countries</h1>
            <h2>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales risus in lorem volutpat condimentum. Aliquam commodo</h2>
          </div>
          </div>
          <div className="brading2-brandfig">
          <div className="branding2-figure">
            <img src={fig3} alt="fig-3" />
          </div>
          <div className="branding2-figdetails">
            <h1>1M User</h1>
            <h2>orem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales risus in lorem volutpat condimentum. Aliquam commodo</h2>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Brand;

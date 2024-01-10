import React from "react";
import "./Options.scss";
import jline from "../../../assets/images/options-line.png";
function Options() {
  return (
    <>
      <section className="navigaton-options bg-dark">
        <div className="wrapper opts">
          <div className="option">
            <div className="option-no">
              <p>1</p>
            </div>
            <div className="option-text">
              <h4>Journey</h4>
            </div>
          </div>
          <div className="journey-line">
            <img src={jline} alt="horizontal-line" />
          </div>
          <div className="option">
            <div className="option-no">
              <p>2</p>
            </div>
            <div className="option-text">
              <h4>Vehicle</h4>
            </div>
          </div>
          <div className="journey-line">
            <img src={jline} alt="horizontal-line" />
          </div>
          <div className="option">
            <div className="option-no">
              <p>3</p>
            </div>
            <div className="option-text">
              <h4>Details</h4>
            </div>
          </div>
          <div className="journey-line">
            <img src={jline} alt="horizontal-line" />
          </div>
          <div className="option">
            <div className="option-no">
              <p>4</p>
            </div>
            <div className="option-text">
              <h4>Pay & Book</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Options;

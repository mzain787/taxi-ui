import React from "react";
import "./Bsteps.css";
import BstepCard from "./BstepCard";
import backgrundIcon from "../../../assets/images/card-icon-background.png";
import scheduleIcon from "../../../assets/images/schedule-icon.png"
import carIcon from "../../../assets/images/car-icon.png"
import payIcon from "../../../assets/images/pay-icon.png"
function Bsteps() {
  // Array of data for each card
  const cardData = [
    {
      iconSrc:scheduleIcon ,
      backgroundIconSrc: backgrundIcon,
      heading: "Schedule in advance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, risusntum efficitur, augue",
    },
    {
      iconSrc: carIcon,
      backgroundIconSrc: backgrundIcon,
      heading: "Vehicle Options",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, risusntum efficitur, augue",
    },
    {
      iconSrc: payIcon,
      backgroundIconSrc: backgrundIcon,
      heading: "Pay and Relax",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pulvinar, risusntum efficitur, augue",
    },
  ];

  return (
    <>
      <section className="booking-steps-section">
        <div className="wrapper booking-steps">
          <div className="bsteps-heading">
            <h5>ARRANGED IN A MINUTE</h5>
            <h1>Book an airport transfer in 3 easy steps</h1>
          </div>
          <div className="b-steps-cards">
            {cardData.map((card) => (
              <BstepCard
                // key={index}
                iconSrc={card.iconSrc}
                backgroundIconSrc={card.backgroundIconSrc}
                heading={card.heading}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bsteps;

import React from "react";
import "./Faq.css";
import Accordion from "react-bootstrap/Accordion";
import AccordionItem from 'react-bootstrap/AccordionItem'
import icon from "../../../assets/images/more-icon.png"
function Faq() {
  return (
    <section className="faq-section">
      <div className="wrapper faq">
        <div className="faq-heading">
            <h5>24/7 AVAILABLE</h5>
            <h2>Customer service</h2>
            <h3>Popular questions</h3>
        </div>
        <div className="faq-accordian">
        <Accordion>
          <br />
          <Accordion.Item eventKey="0">
            <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Diam volutpat quam id vitae venenatis.</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
            <br />
          </Accordion.Item>
          <br />
          <Accordion.Item eventKey="1">
            <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Diam volutpat quam id vitae venenatis.</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
            <br />
          </Accordion.Item>
          <br />
          <Accordion.Item eventKey="2">
            <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Diam volutpat quam id vitae venenatis.</Accordion.Header>
            <Accordion.Body className="border-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <br />
          <Accordion.Item eventKey="3">
            <Accordion.Header>Lorem ipsum dolor sit amet consectetur. Diam volutpat quam id vitae venenatis.</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <br />
        </Accordion>
        </div>
        <div className="show-more d-flex gap-2">
          <p>Show More Questions</p>
          <span><img src={icon} alt="icon" /></span>
        </div>
      </div>
    </section>
  );
}

export default Faq;

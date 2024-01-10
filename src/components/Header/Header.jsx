import React from "react";
import Logo from "../../assets/images/logo.svg";
import flag from "../../assets/images/flag-header.png";
import navline from "../../assets/images/vline-2.png";
import "./Header.scss";
function Header() {
  return (
    <>
      <header>
        <nav className="wrapper">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-options">
            <img src={flag} alt="flag-image" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="5"
              viewBox="0 0 10 5"
              fill="none"
            >
              <path d="M5 5L0 0H10L5 5Z" fill="white" />
            </svg>
            <img src={navline} alt="nav-line" />
            <div className="text">Helpdesk</div>
          </div>
          <div className="bar-icon">
            <i class="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

import React from "react";
import Select, { components } from 'react-select';
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

// Custom styles for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'grey',
    border: "none", 
    boxShadow:'none',
    width:'120px'// Set the background color of the control
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: 'white', // Set the color of the dropdown icon
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: 'white', // Set the color of the separator
  }),
  valueContainer: (provided) => ({
    ...provided,
    color: 'white', // Set the color of the selected value
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'white', // Set the color of the single selected value
  }),
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      {/* You can use any custom icon here */}
      <i className="fa-solid fa-chevron-down" style={{ color: 'white' }}></i>
    </components.DropdownIndicator>
  );
};

function Header() {
  const options = [
    { value: 'English', label: 'English' },
    { value: 'French', label: 'French' },
    { value: 'Arabic', label: 'Arabic' },
  ];

  const defaultValue = options.find(option => option.value === 'English');

  return (
    <>
      <header>
        <nav className="wrapper">
          <div className="nav-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-options">
            <Select
              options={options}
              styles={customStyles}
              components={{ DropdownIndicator }}
              defaultValue={defaultValue}
            />
            <div className="text">Helpdesk</div>
          </div>
          <div className="bar-icon">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;

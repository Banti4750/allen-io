import React from 'react';
import './dropdown.css';

const Dropdown = ({ title, items }) => {
  return (
    <div className="dropdown">
      {/* Dropdown button */}
      <button className="dropbtn">
        {title}
      </button>

      {/* Dropdown content */}
      <div className="dropdown-content">
        {items.map((item, index) => (
          <a href={item.link} key={index}>
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;

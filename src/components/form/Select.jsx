import React from 'react';

const Dropdown = ({ options, label }) => {
  return (
    <div className="input-group select">
      <label htmlFor="dropdown">{label}</label>
      <select id="dropdown">
        {options.map((option, index) => (
          <option key={index} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
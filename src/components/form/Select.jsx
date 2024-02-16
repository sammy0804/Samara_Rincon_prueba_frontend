import React from 'react';

const Dropdown = ({ options, label, selectedValue, onChange }) => {
  return (
    <div className="input-group select">
      <label htmlFor="dropdown">{label}</label>
      <select value={selectedValue} onChange={onChange}>
        {options.map((option, index) => (
          <option 
            key={index} 
            value={option.value}>{option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
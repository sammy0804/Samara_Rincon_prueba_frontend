import React from 'react';
import MenuItems from './MenuItems';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
    // Increment the depth level for child dropdowns
    const adjustedDepthLevel = depthLevel + 1;
    // Determine the class for the dropdown based on its depth level
    const dropdownClass = adjustedDepthLevel > 1 ? 'dropdown-submenu' : '';

    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? 'show' : ''}`}>
            {submenus.map((submenu, index) => (
                <MenuItems 
                    items={submenu} 
                    key={index} 
                    depthLevel={adjustedDepthLevel} 
                />
            ))}
        </ul>
    );
};

export default Dropdown;

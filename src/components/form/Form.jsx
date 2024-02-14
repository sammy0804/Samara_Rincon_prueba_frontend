import React from 'react';
import Dropdown from './Select';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import '../../styles/form.css'

const Form = () =>{
    const dropdownOptions = [
        { value: 'select', label: 'Select' },
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ];

    const groupOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' },
    ];

    return(
        <div className="grid-container">
            <div className="select-container">
                <Dropdown options={dropdownOptions} />
                <CheckboxGroup options={groupOptions} />
            </div>
            <div className="multiselect-container">
                <RadioGroup options={groupOptions} />
            </div>
            <div className="form-container">
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name..." />
                </div>
                
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email..." />
                </div>
                
                <div className="input-group">
                    <label htmlFor="textarea">Message:</label>
                    <textarea id="textarea" rows="4" placeholder="Enter your message..."></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </div>
        </div>
        
    );
};

export default Form;
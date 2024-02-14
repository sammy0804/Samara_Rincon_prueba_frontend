import React, { useState }  from 'react';
import Dropdown from './Select';
import CheckboxGroup from './CheckboxGroup';
import RadioGroup from './RadioGroup';
import '../../styles/form.css'

const Form = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submit action
        console.log('Form Values', { name, email, message });
        
        // Clear the input fields after submission
        setName('');
        setEmail('');
        setMessage('');
    };

    return(
        <div className="grid-container">
            <div className="select-container">
                <Dropdown options={dropdownOptions} />
                <CheckboxGroup options={groupOptions} />
            </div>
            <div className="multiselect-container">
                <RadioGroup options={groupOptions} />
            </div>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Enter your name..." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Enter your email..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                
                <div className="input-group">
                    <label htmlFor="textarea">Message:</label>
                    <textarea 
                        id="textarea" 
                        rows="4" 
                        placeholder="Enter your message..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
        
    );
};

export default Form;
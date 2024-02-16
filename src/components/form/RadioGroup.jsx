const RadioGroup = ({ options, selectedOptions, onChange}) => {
  return (
    <div className="input-group radio-group">
      {options.map((option, index) => (
        <label key={index}>
          <input 
            type="radio" 
            value={option.value} 
            name={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={onChange}
          /> <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;

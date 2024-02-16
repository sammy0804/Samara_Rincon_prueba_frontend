const CheckboxGroup = ({ options, selectedOptions, onChange}) => {
   return (
    <div className="input-group checkbox-group">
      {options.map((option, index) => (
        <label key={index}>
          <input
            type="checkbox"
            name={option.value}
            value={option.value}
            checked={selectedOptions.includes(option.value)}
            onChange={onChange}
          /> <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;

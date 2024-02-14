const RadioGroup = ({ options, name}) => {
  return (
    <div className="input-group radio-group">
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name={name} value={option.value} /> {option.label}
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;

const CheckboxGroup = ({ options}) => {
  return (
    <div className="input-group checkbox-group">
      {options.map((option, index) => (
        <label key={index}>
          <input type="checkbox" name={option.name} /> {option.label}
        </label>
      ))}
    </div>
  );
};

export default CheckboxGroup;

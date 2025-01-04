const DropDown = (props) => {
  const { value, label, onChange, options } = props;
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="" htmlFor={label}>
        {label}
      </label>
      <select
        id={label}
        className="bg-gray-500 rounded-lg px-4 py-2"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DropDown;

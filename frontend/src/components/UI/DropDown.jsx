const DropDown = (props) => {
  const { value, label, onChange, options, ...otherProps } = props;
  return (
    <div className="flex-1 md:flex-none flex flex-col items-center gap-2">
      <label className="" htmlFor={label}>
        {label}
      </label>

      <select
        id={label}
        className="w-full bg-gray-500 rounded-lg px-4 py-2"
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

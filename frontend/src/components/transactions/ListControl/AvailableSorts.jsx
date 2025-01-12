const AvailableSorts = (props) => {
  const { isOpen, onChange, availableSortOptions } = props;
  return (
    <div
      className={`absolute z-10 top-full right-0 w-max overflow-hidden bg-slate-700 rounded-md ${
        isOpen ? "h-max overflow-y-auto" : "h-0"
      }`}
    >
      {availableSortOptions.map((sortOption) => (
        <div
          className="px-3 py-2 duration-200 hover:bg-slate-800 rounded-md"
          key={sortOption.id}
          onClick={() => onChange(sortOption)}
        >
          {sortOption.text}
        </div>
      ))}
    </div>
  );
};
export default AvailableSorts;

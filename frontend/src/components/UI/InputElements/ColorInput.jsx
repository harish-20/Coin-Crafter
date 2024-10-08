const availableColors = [
  "#756AB6",
  "#E36414",
  "#EAD196",
  "#AC87C5",
  "#DE8F5F",
  "#527853",
  "#E6A4B4",
  "#7071E8",
  "#7FC7D9",
  "#C5E898",
];

const ColorInput = (props) => {
  const { color, setColor, errorMessage } = props;

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {availableColors.map((availableColor, index) => (
          <div
            key={index}
            className={`h-12 w-12 rounded-md cursor-pointer duration-150 ${
              availableColor === color
                ? "border-2 border-green-500 shadow-[1px_1px_10px_1px_#74d572c3]"
                : "hover:shadow-[1px_1px_10px_1px_#fff8]"
            }`}
            style={{ background: availableColor }}
            onClick={setColor.bind(null, availableColor)}
          />
        ))}
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </>
  );
};

export default ColorInput;

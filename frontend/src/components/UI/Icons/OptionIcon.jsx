const Circle = (props) => (
  <div className={`h-2 w-2 rounded-full ${props.bg}`}></div>
);

const iconBgs = [
  "bg-green-900",
  "bg-green-700",
  "bg-green-700",
  "bg-green-900",
];

const OptionIcon = () => {
  return (
    <div className="grid grid-cols-2 gap-1">
      {iconBgs.map((bg, index) => (
        <Circle key={index} bg={bg} />
      ))}
    </div>
  );
};

export default OptionIcon;

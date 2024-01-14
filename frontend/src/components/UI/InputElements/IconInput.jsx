import icons from "../CategoryIcon";

const IconItem = ({ isSelected, currentIcon, Icon, toggleIcon }) => (
  <div
    className={` rounded-lg p-3 cursor-pointer duration-150 ${
      isSelected
        ? "bg-green-500 shadow-[1px_1px_10px_1px_#74d572c3] scale-110"
        : "bg-slate-500 hover:shadow-[1px_1px_10px_1px_#fff8] hover:scale-105"
    }`}
    onClick={() => toggleIcon(currentIcon)}
  >
    <Icon className="h-6 w-6" />
  </div>
);

const IconInput = (props) => {
  const { icon, setIcon } = props;
  console.log(icon);

  const toggleIcon = (selectedIcon) => {
    setIcon(selectedIcon);
  };

  const selectableIcons = Object.keys(icons).map((iconItem) => (
    <IconItem
      key={iconItem}
      isSelected={iconItem === icon}
      currentIcon={iconItem}
      Icon={icons[iconItem]}
      toggleIcon={toggleIcon}
    />
  ));

  return <div className="grid grid-cols-5 gap-4">{selectableIcons}</div>;
};

export default IconInput;

import icons from "../CategoryIcon";
import Label from "../Label";

const IconItem = ({ isSelected, Icon, toggleIcon }) => (
  <div
    className={` rounded-lg p-3 cursor-pointer duration-150 ${
      isSelected
        ? "bg-green-500 shadow-[1px_1px_10px_1px_#74d572c3] scale-110"
        : "bg-slate-500 hover:shadow-[1px_1px_10px_1px_#fff8] hover:scale-105"
    }`}
    onClick={toggleIcon}
  >
    <Icon className="h-6 w-6" />
  </div>
);

const IconInput = (props) => {
  const { icon, setIcon, label, errorMessage } = props;

  const toggleIcon = (selectedIcon) => {
    setIcon(selectedIcon);
  };

  const selectableIcons = Object.keys(icons).map((iconItem) => (
    <IconItem
      key={iconItem}
      isSelected={iconItem === icon}
      currentIcon={iconItem}
      Icon={icons[iconItem]}
      toggleIcon={() => toggleIcon(iconItem)}
    />
  ));

  return (
    <div className="mt-3">
      <Label label={label} />
      <div className="grid grid-cols-5 gap-4 place-content-center place-items-center mt-2">
        {selectableIcons}
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </div>
  );
};

export default IconInput;

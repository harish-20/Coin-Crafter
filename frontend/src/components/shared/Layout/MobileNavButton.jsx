import BurgerMenuIcon from "../../UI/Icons/BurgerMenuIcon";

const MobileNavButton = (props) => {
  return (
    <div
      className="z-10 fixed top-8 right-4 bg-gray-700 opacity-100 p-2 rounded-full md:hidden"
      onClick={props.onClick}
    >
      <BurgerMenuIcon />
    </div>
  );
};

export default MobileNavButton;

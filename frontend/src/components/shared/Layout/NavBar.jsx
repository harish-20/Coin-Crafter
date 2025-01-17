import BurgerMenuIcon from "../../UI/Icons/BurgerMenuIcon";

const NavBar = (props) => {
  return (
    <div className="z-10 fixed top-8 left-2 bg-gray-700 opacity-100 p-2 rounded-full md:hidden">
      <div className="my-auto h-full" onClick={props.onClick}>
        <BurgerMenuIcon />
      </div>
    </div>
  );
};

export default NavBar;

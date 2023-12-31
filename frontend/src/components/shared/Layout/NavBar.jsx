import BurgerMenuIcon from "../../UI/Icons/BurgerMenuIcon";

const NavBar = (props) => {
  return (
    <div className="z-10 fixed top-2 left-2 bg-green-700 opacity-100 p-2 rounded-full md:hidden">
      <div className="my-auto h-full" onClick={props.onClick}>
        <BurgerMenuIcon />
      </div>
    </div>
  );
};

export default NavBar;

import { NavLink } from "react-router-dom";

const NavLinkItem = (props) => {
  return (
    <NavLink
      className={(link) =>
        `flex items-center gap-4 p-3 rounded-md duration-150 transition-colors hover:bg-opacity-20 ${
          link.isActive
            ? "text-green-800 hover:bg-green-600"
            : "text-gray-500 hover:bg-green-400"
        }`
      }
      to={props.link}
      onClick={props.onClick}
    >
      <img src={props.image} alt={props.text} />

      <div className="text-inherit tracking-wide">{props.text}</div>
    </NavLink>
  );
};

export default NavLinkItem;

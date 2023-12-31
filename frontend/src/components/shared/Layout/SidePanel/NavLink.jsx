import { NavLink } from "react-router-dom";

const NavLinkItem = (props) => {
  return (
    <NavLink
      className={(link) =>
        link.isActive
          ? "flex items-center gap-4 text-green-800"
          : "flex items-center gap-4 text-gray-500"
      }
      to={props.link}
    >
      <img src={props.image} alt={props.text} />

      <div className="text-inherit tracking-wide">{props.text}</div>
    </NavLink>
  );
};

export default NavLinkItem;

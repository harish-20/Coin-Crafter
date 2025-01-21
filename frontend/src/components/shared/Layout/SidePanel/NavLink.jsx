import { NavLink } from "react-router-dom";

const NavLinkItem = (props) => {
  const { link, onClick, icon, text } = props;

  return (
    <NavLink
      className={(linkProps) =>
        `flex items-center gap-4 p-3 rounded-md duration-150 transition-colors hover:bg-opacity-20 ${
          linkProps.isActive
            ? "text-green-800 hover:bg-green-600"
            : "text-gray-500 hover:bg-green-400"
        }`
      }
      to={link}
      onClick={onClick}
    >
      <img src={icon} alt={text} />

      <div className="text-inherit tracking-wide">{text}</div>
    </NavLink>
  );
};

export default NavLinkItem;

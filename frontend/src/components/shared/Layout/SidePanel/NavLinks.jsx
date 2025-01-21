import NavLinkItem from "./NavLink";

import dashboardIcon from "../../../../assets/Dashboard.png";
import transactionIcon from "../../../../assets/Transactions.png";
import categoriesIcon from "../../../../assets/Categories.png";

const NavLinks = (props) => {
  const { closeNav } = props;

  const linkList = getLinks();
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-5 w-full">
        {linkList.map((link) => (
          <NavLinkItem key={link.id} {...link} onClick={closeNav} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

function getLinks() {
  return [
    {
      id: 1,
      text: "Dashboard",
      icon: dashboardIcon,
      link: "/dashboard",
    },
    {
      id: 2,
      text: "Transactions",
      icon: transactionIcon,
      link: "/transactions",
    },
    {
      id: 3,
      text: "Categories",
      icon: categoriesIcon,
      link: "/categories",
    },
  ];
}

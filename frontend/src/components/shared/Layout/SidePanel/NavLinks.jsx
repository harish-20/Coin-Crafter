import NavLinkItem from "./NavLink";

import dashboardIcon from "../../../../assets/Dashboard.png";
import transactionIcon from "../../../../assets/Transactions.png";
import categoriesIcon from "../../../../assets/Categories.png";

const linkList = [
  {
    id: 1,
    text: "Dashboard",
    image: dashboardIcon,
    link: "/dashboard",
  },
  {
    id: 2,
    text: "Transactions",
    image: transactionIcon,
    link: "/transactions",
  },
  {
    id: 3,
    text: "Categories",
    image: categoriesIcon,
    link: "/categories",
  },
];

const NavLinks = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-5 w-full">
        {linkList.map((link) => (
          <NavLinkItem key={link.id} {...link} />
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;

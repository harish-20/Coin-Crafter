import { useState } from "react";

import SidePanel from "./SidePanel/SidePanel";
import NavBar from "./NavBar";
import BackDrop from "./BackDrop";
import NewTransaction from "../../transactions/NewTransaction/NewTransaction";

const Layout = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className="flex gap-5 h-screen bg-black">
      <SidePanel isOpen={isNavOpen} />
      {isNavOpen ? (
        <BackDrop onClick={toggleNav} />
      ) : (
        <NavBar onClick={toggleNav} />
      )}
      <div
        className={`flex-1 m-4 ml-0 bg-dark rounded-2xl overflow-y-auto ${props.className}`}
      >
        {props.children}
      </div>
      <NewTransaction />
    </div>
  );
};

export default Layout;

import { useState } from "react";
import { Outlet } from "react-router-dom";

import SidePanel from "./SidePanel/SidePanel";
import NavBar from "./NavBar";
import BackDrop from "./BackDrop";

import NewTransactionPopup from "../../transactions/NewTransactionPopup/NewTransactionPopup";
import LogoutPopup from "../LogoutPopup/LogoutPopup";

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
        <Outlet />
      </div>

      <NewTransactionPopup />
      <LogoutPopup />
    </div>
  );
};

export default Layout;

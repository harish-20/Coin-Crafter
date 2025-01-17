import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import SidePanel from "./SidePanel/SidePanel";
import NavBar from "./NavBar";
import BackDrop from "./BackDrop";

import NewTransactionPopup from "../../transactions/NewTransactionPopup/NewTransactionPopup";
import LogoutPopup from "../LogoutPopup/LogoutPopup";
import { expenseThunks } from "../../../store/slices/expense/expenseSlice";
import { chartThunks } from "../../../store/slices/chart/chartSlice";

const Layout = (props) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
    dispatch(chartThunks.getAvailableFilter());
  }, []);

  return (
    <div className="flex gap-5 h-screen bg-black">
      <SidePanel isOpen={isNavOpen} closeNav={closeNav} />
      {isNavOpen ? (
        <BackDrop onClick={closeNav} />
      ) : (
        <NavBar onClick={toggleNav} />
      )}
      <div
        className={`flex-1 bg-dark overflow-y-auto md:m-4 md:ml-0 md:rounded-2xl ${props.className}`}
      >
        <Outlet />
      </div>

      <NewTransactionPopup />
      <LogoutPopup />
    </div>
  );
};

export default Layout;

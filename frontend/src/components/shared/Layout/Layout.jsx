import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import SidePanel from "./SidePanel/SidePanel";

import NewTransactionPopup from "../../transactions/NewTransactionPopup/NewTransactionPopup";
import LogoutPopup from "../LogoutPopup/LogoutPopup";
import SingleTransaction from "../../transactions/SingleTransation/SingleTransaction";

import { expenseThunks } from "../../../store/slices/expense/expenseSlice";
import { chartThunks } from "../../../store/slices/chart/chartSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
    dispatch(chartThunks.getAvailableFilter());
  }, []);

  return (
    <div className="flex gap-5 h-screen bg-black">
      <SidePanel />

      {/* main content */}
      <div className="flex-1 bg-dark overflow-y-auto p-4 md:p-8 md:py-4 md:m-4 md:ml-0 md:rounded-2xl">
        <Outlet />
      </div>

      {/* popups */}
      <NewTransactionPopup />
      <LogoutPopup />
      <SingleTransaction />
    </div>
  );
};

export default Layout;

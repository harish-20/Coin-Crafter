import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/shared/Layout/Layout";
import SearchBar from "../components/transactions/SearchBar/SearchBar";
import Filters from "../components/transactions/Filters/Filters";
import TransactionList from "../components/transactions/TransactionList/TransactionList";
import SingleTransaction from "../components/transactions/SingleTransation/SingleTransaction";

import { expenseActions } from "../store/slices/expense/expenseSlice";
import * as expenseThunks from "../store/slices/expense/thunks";

const Transactions = () => {
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, []);

  const handleClose = () => {
    dispatch(expenseActions.toggleEditMode(null));
  };
  return (
    <Layout className="px-8 flex flex-col">
      <SearchBar />
      <Filters />
      <TransactionList />
      <SingleTransaction isOpen={!!expenseOnEditMode} onClose={handleClose} />
    </Layout>
  );
};

export default Transactions;

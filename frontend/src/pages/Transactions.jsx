import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../components/shared/Layout/Layout";
import SearchBar from "../components/transactions/SearchBar/SearchBar";

import ListControl from "../components/transactions/ListControl/ListControl";
import TransactionList from "../components/transactions/TransactionList/TransactionList";
import SingleTransaction from "../components/transactions/SingleTransation/SingleTransaction";

import { expenseActions } from "../store/slices/expense/expenseSlice";
import * as expenseThunks from "../store/slices/expense/thunks";
import * as categoryThunks from "../store/slices/category/thunks";

let debounceTimer = null;
const debounceDelay = 400;

const Transactions = () => {
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );
  const filters = useSelector((state) => state.expense.filters);
  const sorts = useSelector((state) => state.expense.sorts);
  const search = useSelector((state) => state.expense.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
    dispatch(categoryThunks.getCustomCategories());
  }, []);

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, [filters, sorts]);

  useEffect(() => {
    debounceTimer = setTimeout(() => {
      dispatch(expenseThunks.getAllTransaction());
    }, debounceDelay);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  const handleClose = () => {
    dispatch(expenseActions.toggleEditMode(null));
  };
  return (
    <Layout className="px-8 flex flex-col">
      <SearchBar />
      <ListControl />
      <TransactionList />
      <SingleTransaction isOpen={!!expenseOnEditMode} onClose={handleClose} />
    </Layout>
  );
};

export default Transactions;

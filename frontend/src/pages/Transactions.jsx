import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const firstRenderRef = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
    dispatch(categoryThunks.getCustomCategories());

    return () => {
      dispatch(expenseActions.setSearch(""));
      dispatch(expenseActions.toggleFilter({}));
      dispatch(expenseActions.toggleSort({}));
    };
  }, []);

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, [filters, sorts]);

  useEffect(() => {
    if (!firstRenderRef.current) {
      debounceTimer = setTimeout(() => {
        dispatch(expenseThunks.getAllTransaction());
      }, debounceDelay);
    }
    firstRenderRef.current = false;

    return () => clearTimeout(debounceTimer);
  }, [search]);

  const handleClose = () => {
    dispatch(expenseActions.toggleEditMode(null));
  };
  return (
    <div className="px-8 flex flex-col h-full">
      <SearchBar />
      <ListControl />
      <TransactionList />
      <SingleTransaction isOpen={!!expenseOnEditMode} onClose={handleClose} />
    </div>
  );
};

export default Transactions;

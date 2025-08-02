import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../components/transactions/SearchBar/SearchBar";

import ListControl from "../components/transactions/ListControl/ListControl";
import TransactionList from "../components/transactions/TransactionList/TransactionList";

import {
  expenseActions,
  expenseThunks,
} from "../store/slices/expense/expenseSlice";
import { categoryThunks } from "../store/slices/category/categorySlice";

let debounceTimer = null;
const debounceDelay = 400;

const Transactions = () => {
  const filters = useSelector((state) => state.expense.filters);
  const sorts = useSelector((state) => state.expense.sorts);
  const search = useSelector((state) => state.expense.search);

  const firstRenderRef = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(categoryThunks.getDefaultCategories());
    dispatch(categoryThunks.getCustomCategories());

    return () => {
      // reset search sort and filter option after user click other page
      dispatch(expenseActions.setSearch(""));
      dispatch(expenseActions.toggleFilter({}));
      dispatch(expenseActions.toggleSort({}));
    };
  }, []);

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());

    return () => {
      // reset the list when user go out this page
      dispatch(expenseThunks.getAllTransaction());
    };
  }, [filters, sorts]);

  useEffect(() => {
    if (!firstRenderRef.current)
      debounceTimer = setTimeout(() => {
        dispatch(expenseThunks.getAllTransaction());
      }, debounceDelay);

    firstRenderRef.current = false;

    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <div className="fade-in flex flex-col h-full">
      <SearchBar />
      <ListControl />
      <TransactionList />
    </div>
  );
};

export default Transactions;

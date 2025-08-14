import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import useDebounce from "../hooks/useDebounce";

import SearchBar from "../components/transactions/SearchBar/SearchBar";

import ListControl from "../components/transactions/ListControl/ListControl";
import TransactionList from "../components/transactions/TransactionList/TransactionList";

import {
  expenseActions,
  expenseThunks,
} from "../store/slices/expense/expenseSlice";
import { categoryThunks } from "../store/slices/category/categorySlice";

const Transactions = () => {
  const filters = useSelector((state) => state.expense.filters);
  const sorts = useSelector((state) => state.expense.sorts);
  const search = useSelector((state) => state.expense.search);

  const dispatch = useDispatch();

  useDebounce(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, [search]);

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

  return (
    <div className="fade-in flex flex-col h-full">
      <SearchBar />
      <ListControl />
      <TransactionList />
    </div>
  );
};

export default Transactions;

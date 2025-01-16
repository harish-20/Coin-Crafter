import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/UI/Spinner";
import Charts from "../components/dashboard/Charts/Charts";
import ExpenseList from "../components/shared/ExpenseList/ExpenseList";
import Filters from "../components/dashboard/Filters/Filters";

import { expenseThunks } from "../store/slices/expense/expenseSlice";
import { chartThunks } from "../store/slices/chart/chartSlice";

const DashBoard = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const isExpensesLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
    dispatch(chartThunks.getAvailableFilter());
  }, []);

  return (
    <>
      {isExpensesLoading && <Spinner size="50" className="my-auto h-full" />}

      {!isExpensesLoading && (
        <>
          <Filters />
          <Charts />
          <ExpenseList expenses={expenses?.slice(0, 5)} />
        </>
      )}
    </>
  );
};

export default DashBoard;

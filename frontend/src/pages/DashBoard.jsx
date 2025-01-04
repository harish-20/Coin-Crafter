import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Spinner from "../components/UI/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Charts from "../components/dashboard/Charts/Charts";
import ExpenseList from "../components/shared/ExpenseList/ExpenseList";

import * as expenseThunks from "../store/slices/expense/thunks";

const DashBoard = () => {
  const expenses = useSelector((state) => state.expense.expenses);
  const isExpensesLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(expenseThunks.getAllTransaction());
  }, []);

  return (
    <Layout>
      {isExpensesLoading && <Spinner size="50" className="my-auto h-full" />}

      {!isExpensesLoading && (
        <>
          <Charts />
          <ExpenseList expenses={expenses.slice(0, 5)} />
        </>
      )}
    </Layout>
  );
};

export default DashBoard;

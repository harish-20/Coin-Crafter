import { useDispatch, useSelector } from "react-redux";

import EmptyData from "../../UI/EmptyData/EmptyData";
import ExpenseItem from "./ExpenseItem";
import ErrorView from "../../UI/ErrorView";

import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const ExpenseList = (props) => {
  const { expenses } = props;

  const isTransactionsLoadingError = useSelector(
    (state) => state.expense.errorState.isExpensesLoadingError
  );

  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(expenseThunks.getAllTransaction());
  };

  const shouldShowEmpty = !isTransactionsLoadingError && expenses.length === 0;

  return (
    <div className="m-8">
      <div className="font-bold text-lg tracking-wide">Recent Expenses</div>
      <div className="mt-6 flex flex-col md:w-4/12">
        {shouldShowEmpty && <EmptyData />}

        {isTransactionsLoadingError && (
          <div className="mt-8">
            <ErrorView
              message="Cannot fetch recent transaction"
              onRetry={handleRetry}
            />
          </div>
        )}

        {!shouldShowEmpty &&
          !isTransactionsLoadingError &&
          expenses.map((expense) => (
            <ExpenseItem
              key={expense._id}
              id={expense._id}
              category={expense.category}
              amount={expense.amount}
              date={expense.date}
              time={expense.time}
            />
          ))}
      </div>
    </div>
  );
};

export default ExpenseList;

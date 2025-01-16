import { useDispatch, useSelector } from "react-redux";

import EmptyData from "../../UI/EmptyData/EmptyData";
import ExpenseItem from "./ExpenseItem";
import ErrorView from "../../UI/ErrorView";
import Spinner from "../../UI/Spinner";

import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const ExpenseList = (props) => {
  const { expenses } = props;

  const isTransactionsLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );
  const isTransactionsLoadingError = useSelector(
    (state) => state.expense.errorState.isExpensesLoadingError
  );

  const dispatch = useDispatch();

  const handleRetry = () => {
    dispatch(expenseThunks.getAllTransaction());
  };

  const shouldShowEmpty =
    !isTransactionsLoading &&
    !isTransactionsLoadingError &&
    expenses.length === 0;

  const shouldShowError = !isTransactionsLoading && isTransactionsLoadingError;

  return (
    <div className="m-8">
      <div className="font-bold text-lg tracking-wide">Recent Expenses</div>
      <div className="mt-6 flex flex-col md:w-4/12">
        {shouldShowEmpty && <EmptyData />}

        {isTransactionsLoading && <Spinner size={30} />}

        {shouldShowError && (
          <div className="mt-8">
            <ErrorView
              message="Cannot fetch recent transaction"
              onRetry={handleRetry}
            />
          </div>
        )}

        {!shouldShowEmpty &&
          !shouldShowError &&
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

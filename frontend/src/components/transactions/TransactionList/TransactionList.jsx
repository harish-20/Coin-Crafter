import { useDispatch, useSelector } from "react-redux";
import List from "react-virtualized/dist/commonjs/List";

import useWindowResize from "../../../hooks/useWindowResize";
import useDimensions from "../../../hooks/useDimensions";

import Spinner from "../../UI/Spinner";
import ErrorView from "../../UI/ErrorView";
import EmptyTransaction from "./EmptyTransaction";
import EmptyData from "../../UI/EmptyData/EmptyData";
import TransactionItem from "./TransactionItem";

import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const TransactionList = () => {
  const transactions = useSelector((state) => state.expense.expenses);
  const search = useSelector((state) => state.expense.search);
  const filters = useSelector((state) => state.expense.filters);
  const isTransactionsLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );
  const isTransactionsLoadingError = useSelector(
    (state) => state.expense.errorState.isExpensesLoadingError
  );

  const dispatch = useDispatch();

  // custom hooks
  const { containerRef, dimensions, rowHeight, updateDimensions } =
    useDimensions();
  useWindowResize(updateDimensions);

  const rowRenderer = ({ index, style }) => {
    const transaction = transactions[index];
    return (
      <TransactionItem
        style={style}
        key={transaction._id}
        id={transaction._id}
        category={transaction.category}
        date={transaction.date}
        time={transaction.time}
        amount={transaction.amount}
        description={transaction.shortNote}
      />
    );
  };

  const handleRetry = () => {
    dispatch(expenseThunks.getAllTransaction());
  };

  const isTransactionEmpty = transactions?.length === 0;

  const isFiltersApplied = Object.values(filters).some((filter) => !!filter);
  const isNoTransactionAdded =
    !search &&
    !isFiltersApplied &&
    isTransactionEmpty &&
    !isTransactionsLoading &&
    !isTransactionsLoadingError;

  const isFilteredResultEmpty =
    (search || isFiltersApplied) &&
    isTransactionEmpty &&
    !isTransactionsLoading;

  const shouldShowTransactionList =
    !isTransactionsLoading &&
    !isTransactionEmpty &&
    !isFilteredResultEmpty &&
    !isTransactionsLoadingError;

  const shouldShowError = !isTransactionsLoading && isTransactionsLoadingError;

  return (
    <div ref={containerRef} className="flex-1 flex flex-col my-4 gap-3">
      {shouldShowError && (
        <ErrorView message="Cannot fetch transactions!" onRetry={handleRetry} />
      )}

      {isTransactionsLoading && (
        <div className="h-full flex items-center justify-center">
          <Spinner size={50} />
        </div>
      )}

      {isNoTransactionAdded && <EmptyData />}

      {isFilteredResultEmpty && <EmptyTransaction />}

      {shouldShowTransactionList && (
        <List
          height={dimensions.height}
          rowHeight={rowHeight}
          width={dimensions.width}
          rowCount={transactions?.length}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
};

export default TransactionList;

import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "react-virtualized/dist/commonjs/List";

import Spinner from "../../UI/Spinner";
import ErrorView from "../../UI/ErrorView";
import EmptyTransaction from "./EmptyTransaction";
import EmptyData from "../../UI/EmptyData/EmptyData";
import TransactionItem from "./TransactionItem";
import { expenseThunks } from "../../../store/slices/expense/expenseSlice";

const THROTTLE_INTERVAL = 300;

const TransactionList = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [rowHeight, setRowHeight] = useState(160); // Default row height

  const transactions = useSelector((state) => state.expense.expenses);
  const search = useSelector((state) => state.expense.search);
  const filters = useSelector((state) => state.expense.filters);
  const isTransactionsLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );
  const isTransactionsLoadingError = useSelector(
    (state) => state.expense.errorState.isExpensesLoadingError
  );

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const dispatch = useDispatch();

  const updateDimensions = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight - 200;
      console.log(windowWidth);
      const isSmallScreen = windowWidth <= 768;

      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const containerHeight = isSmallScreen
          ? windowHeight
          : containerRef.current.offsetHeight;

        setDimensions({
          width: containerWidth,
          height: containerHeight,
        });

        setRowHeight(isSmallScreen ? 200 : 160);
      }
    }, THROTTLE_INTERVAL);
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

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
    <div ref={containerRef} className="flex-1 flex flex-col my-6 gap-3">
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

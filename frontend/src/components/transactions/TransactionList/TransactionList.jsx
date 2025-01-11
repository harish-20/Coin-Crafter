import { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import List from "react-virtualized/dist/commonjs/List";

import TransactionItem from "./TransactionItem";
import Spinner from "../../UI/Spinner";

const THROTTLE_INTERVAL = 300;
const TransactionList = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const transactions = useSelector((state) => state.expense.expenses);
  const isTransactionsLoading = useSelector(
    (state) => state.expense.loadingState.isExpensesLoading
  );

  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const updateDimensions = () => {
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
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

  return (
    <div ref={containerRef} className="flex-1 flex flex-col my-6 gap-3">
      {isTransactionsLoading && (
        <div className="h-full flex items-center justify-center">
          <Spinner size={50} />
        </div>
      )}

      {!isTransactionsLoading && (
        <List
          height={dimensions.height}
          rowHeight={160}
          width={dimensions.width}
          rowCount={transactions.length}
          rowRenderer={rowRenderer}
        />
      )}
    </div>
  );
};

export default TransactionList;

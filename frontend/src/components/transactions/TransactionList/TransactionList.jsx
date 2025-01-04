import { useSelector } from "react-redux";

import TransactionItem from "./TransactionItem";

const TransactionList = (props) => {
  const transactions = useSelector((state) => state.expense.expenses);

  return (
    <div className="flex flex-col my-6 gap-3">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction._id}
          id={transaction._id}
          category={transaction.category}
          date={transaction.date}
          time={transaction.time}
          amount={transaction.amount}
          description={transaction.shortNote}
        />
      ))}
    </div>
  );
};

export default TransactionList;

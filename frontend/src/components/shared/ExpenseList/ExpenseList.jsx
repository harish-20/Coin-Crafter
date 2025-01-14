import EmptyData from "../../UI/EmptyData/EmptyData";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const { expenses } = props;

  const isListEmpty = expenses.length === 0;

  return (
    <div className="m-8">
      <div className="font-bold text-lg tracking-wide">Recent Expenses</div>
      <div className="mt-6 flex flex-col md:w-4/12">
        {isListEmpty && <EmptyData />}

        {!isListEmpty &&
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

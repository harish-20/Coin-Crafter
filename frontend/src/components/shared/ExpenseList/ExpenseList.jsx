import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div className="m-8">
      <div className="font-bold text-lg tracking-wide">Recent Expenses</div>
      <div className="mt-6 flex flex-col md:w-4/12">
        {props.expenses.map((expense) => (
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

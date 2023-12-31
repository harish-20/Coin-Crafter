import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div className="m-8">
      <div className="font-bold text-lg tracking-wide">Recent Expenses</div>
      <div className="mt-6 flex flex-col gap-5 md:w-4/12">
        {props.expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
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

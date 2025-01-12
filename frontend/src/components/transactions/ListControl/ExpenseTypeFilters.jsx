import IncomeIcon from "../../UI/Icons/IncomeIcon";
import SpentIcon from "../../UI/Icons/SpentIcon";

const ExpenseTypeFilters = (props) => {
  const { expenseType, onChange } = props;

  const expenseTypes = [
    { expenseType: "income", Icon: IncomeIcon },
    { expenseType: "spend", Icon: SpentIcon },
  ];

  return (
    <div className="flex items-center gap-4 mt-8 ml-4">
      {expenseTypes.map((expense) => (
        <div
          key={expense.expenseType}
          className={`border-2 border-gray-700 ${
            expense.expenseType === expenseType ? "bg-green-900" : ""
          } rounded-xl p-3 cursor-pointer`}
          onClick={() => onChange(expense.expenseType)}
        >
          <expense.Icon />
        </div>
      ))}
    </div>
  );
};

export default ExpenseTypeFilters;

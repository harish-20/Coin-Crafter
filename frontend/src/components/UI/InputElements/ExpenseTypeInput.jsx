import IncomeIcon from "../Icons/IncomeIcon";
import SpentIcon from "../Icons/SpentIcon";

const expenseTypes = [
  {
    type: "income",
    Icon: IncomeIcon,
    bgColor: "#3ad747a8",
  },
  {
    type: "spend",
    Icon: SpentIcon,
    bgColor: "#ff0000a7",
  },
];
const ExpenseTypeInput = (props) => {
  const { expenseType, setExpenseType, errorMessage } = props;

  return (
    <>
      <div className="grid grid-cols-5 gap-3">
        {expenseTypes.map(({ type, Icon, bgColor }, index) => (
          <div
            key={index}
            className={`h-12 w-12 flex items-center justify-center rounded-md cursor-pointer duration-150 ${
              expenseType === type
                ? "border-2 border-gray-500 shadow-[1px_1px_10px_1px_#74d572c3]"
                : "hover:shadow-[1px_1px_10px_1px_#fff8]"
            }`}
            style={{ background: bgColor }}
            onClick={() => setExpenseType(type)}
          >
            <Icon />
          </div>
        ))}
      </div>
      {errorMessage && (
        <div className="mt-1 text-red-500 text-xs">{errorMessage}</div>
      )}
    </>
  );
};

export default ExpenseTypeInput;

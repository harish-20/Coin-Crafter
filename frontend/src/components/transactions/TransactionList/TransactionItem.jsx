import { useDispatch, useSelector } from "react-redux";

import DataWithLabel from "./DataWithLabel";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

import SpentIcon from "../../UI/Icons/SpentIcon";
import IncomeIcon from "../../UI/Icons/IncomeIcon";
import FakeIcon from "../../categories/FakeIcon";
import icons from "../../UI/CategoryIcon";
import Spinner from "../../UI/Spinner";

const expenseTypeClasses = {
  spend: "text-red-500",
  income: "text-green-500",
};
const expenseIcon = {
  spend: SpentIcon,
  income: IncomeIcon,
};

const TransactionItem = (props) => {
  const { id, category, date, time, amount, description, style } = props;
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );
  const expensesUpdating = useSelector(
    (state) => state.expense.loadingState.expensesUpdating
  );
  const deletingExpenseId = useSelector(
    (state) => state.expense.deleteTransactionTarget.id
  );

  const dispatch = useDispatch();

  const Icon = icons[category.icon] || FakeIcon;

  const readableDate = new Date(date).toLocaleDateString("en-US", {
    dateStyle: "medium",
  });
  const readableTime = time
    ? new Date(time).toLocaleString("en-US", {
        timeZone: "IST",
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  const ExpenseIcon = expenseIcon[category.expenseType];
  const isExpenseUpdating = expensesUpdating.includes(id);

  const getTransactionBg = () => {
    if (deletingExpenseId === id) return "bg-red-600 opacity-50";

    if (expenseOnEditMode === id) return "bg-slate-700";

    return "";
  };
  return (
    <div
      style={style}
      className={`gap-2 cursor-pointer p-4 duration-150 rounded-lg ${getTransactionBg()} hover:bg-slate-800`}
      onClick={() => dispatch(expenseActions.toggleEditMode(id))}
    >
      <div className="flex justify-between items-start min-h-[50px] flex-wrap gap-4">
        <div
          style={{ background: category.backgroundColor }}
          className="relative overflow-hidden bg-gray-100 rounded-full p-2"
        >
          <Icon className="h-6 w-6" />
          {isExpenseUpdating && (
            <div className="absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/80">
              <Spinner size="20" hideText />
            </div>
          )}
        </div>

        <div className="w-4/12 flex gap-2 items-center">
          {category.title} <ExpenseIcon />
        </div>

        <DataWithLabel label="Date" data={readableDate || "-"} />
        <DataWithLabel label="Time" data={readableTime || "-"} />
        <DataWithLabel
          label="Amount"
          className={expenseTypeClasses[category.expenseType]}
          data={amount}
        />
      </div>

      <div>
        <h2 className="text-sm font-semibold mt-2">Description</h2>
        <p className="mt-2 text-sm text-gray-400 whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;

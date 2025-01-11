import { useDispatch, useSelector } from "react-redux";

import DataWithLabel from "./DataWithLabel";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

import FakeIcon from "../../categories/fakeIcon";
import icons from "../../UI/CategoryIcon";

const expenseTypeClasses = {
  spend: "text-red-500",
  income: "text-green-500",
};

const TransactionItem = (props) => {
  const { id, category, date, time, amount, description, style } = props;
  const expenseOnEditMode = useSelector(
    (state) => state.expense.expenseOnEditMode
  );

  const dispatch = useDispatch();

  const isSelectedTransaction = expenseOnEditMode === id;
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
  return (
    <div
      style={style}
      className={`gap-2 cursor-pointer p-4 duration-150 rounded-lg ${
        isSelectedTransaction ? "bg-slate-700" : "hover:bg-slate-800"
      }`}
      onClick={() => dispatch(expenseActions.toggleEditMode(id))}
    >
      <div className="flex justify-between items-start min-h-[50px] flex-wrap">
        <div
          style={{ background: category.backgroundColor }}
          className="bg-gray-100 rounded-full p-2"
        >
          <Icon className="h-6 w-6" />
        </div>

        <div className="w-4/12">{category.title}</div>

        <DataWithLabel label="Date" data={readableDate || "-"} />
        <DataWithLabel label="Time" data={readableTime || "-"} />
        <DataWithLabel
          label="Amount"
          className={expenseTypeClasses[category.expenseType]}
          data={amount}
        />
      </div>
      <div>
        <h2 className="text-sm font-semibold">Description</h2>
        <p className="mt-2 text-sm text-gray-400 whitespace-pre-wrap">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TransactionItem;

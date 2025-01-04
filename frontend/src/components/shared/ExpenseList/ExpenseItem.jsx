import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import icons from "../../UI/CategoryIcon";

import { expenseActions } from "../../../store/slices/expense/expenseSlice";

const ExpenseItem = (props) => {
  const { id, category, amount, date, time } = props;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleExpenseOpen = () => {
    navigate("/transactions");
    // timout so we don't miss the animation
    setTimeout(() => dispatch(expenseActions.toggleEditMode(id), 0));
  };

  const Icon = icons[category.icon];

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

  const isSpent = category.expenseType === "spend";

  return (
    <div
      className="flex items-center gap-4 cursor-pointer p-3 rounded-md duration-200 hover:bg-gray-800"
      onClick={handleExpenseOpen}
    >
      <div>
        <Icon
          style={{ background: category.backgroundColor }}
          className="h-8 w-8 p-1 rounded-full"
        />
      </div>
      <div>
        <div className="">{category.title}</div>
        <div className="text-xs text-gray-500">
          {readableDate} {readableTime ? `- ${readableTime}` : ""}
        </div>
      </div>
      <div className={`ml-auto ${isSpent ? "text-red-500" : "text-green-500"}`}>
        {isSpent ? "-" : "+"} ₹{amount}
      </div>
    </div>
  );
};

export default ExpenseItem;

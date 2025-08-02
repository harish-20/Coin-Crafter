import { useSelector } from "react-redux";

import Spinner from "../components/UI/Spinner";
import Charts from "../components/dashboard/Charts/Charts";
import ExpenseList from "../components/shared/ExpenseList/ExpenseList";
import Filters from "../components/dashboard/Filters/Filters";

const DashBoard = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const isExpenseLoading = useSelector(
    (state) => state.expense.isExpenseLoading
  );

  const isAvailableFilterLoading = useSelector(
    (state) => state.chart.loadingState.isAvailableFilterLoading
  );

  const isDashboardLoading = isExpenseLoading || isAvailableFilterLoading;

  if (isDashboardLoading) {
    return (
      <div className="flex flex-col justify-center h-full">
        <Spinner size="50" className="my-auto h-auto flex-1" />
      </div>
    );
  }

  return (
    <div className="fade-in">
      <Filters />
      <Charts />
      <ExpenseList expenses={expenses?.slice(0, 5)} />
    </div>
  );
};

export default DashBoard;

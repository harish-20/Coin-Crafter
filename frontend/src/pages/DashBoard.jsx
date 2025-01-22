import { useSelector } from "react-redux";

import Spinner from "../components/UI/Spinner";
import Charts from "../components/dashboard/Charts/Charts";
import ExpenseList from "../components/shared/ExpenseList/ExpenseList";
import Filters from "../components/dashboard/Filters/Filters";

const DashBoard = () => {
  const expenses = useSelector((state) => state.expense.expenses);

  const isExpenseLoading = useSelector(
    (state) => state.expense.loadingState.isExpenseLoading
  );
  const isAvailableFilterLoading = useSelector(
    (state) => state.chart.isAvailableFilterLoading
  );

  const isDashboardLoading = isExpenseLoading || isAvailableFilterLoading;

  return (
    <div className="fade-in">
      {isDashboardLoading && <Spinner size="50" className="my-auto h-full" />}

      {!isDashboardLoading && (
        <>
          <Filters />
          <Charts />
          <ExpenseList expenses={expenses?.slice(0, 5)} />
        </>
      )}
    </div>
  );
};

export default DashBoard;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DropDown from "../../UI/DropDown";
import AddExpenseButton from "../../shared/AddExpense/AddExpenseButton";

import {
  chartActions,
  chartThunks,
} from "../../../store/slices/chart/chartSlice";

import { monthKeys } from "../../../helpers/monthKeys";

const Filters = () => {
  const filters = useSelector((state) => state.chart.filters);
  const yearFilters = useSelector(
    (state) => state.chart.availableFilters.yearFilters
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (filters.year && filters.month)
      dispatch(
        chartThunks.getFilteredData({
          year: filters.year,
          month: filters.month,
        })
      );
  }, [filters.year, filters.month]);

  const setYear = (event) => {
    const { value } = event.target;
    dispatch(chartActions.setFilters({ year: value }));
  };

  const setMonth = (event) => {
    const { value } = event.target;
    dispatch(chartActions.setFilters({ month: value }));
  };

  const availableYearOptions = yearFilters?.map((yearFilter) => ({
    label: yearFilter.year,
    value: yearFilter.year,
  }));

  const selectedYear = yearFilters.find(
    (yearFilter) => yearFilter.year.toString() === filters.year.toString()
  );

  const availableMonthOptions = selectedYear?.months.map((month) => ({
    label: monthKeys[month],
    value: month,
  }));

  const isFiltersEmpty = yearFilters.length === 0;

  return (
    <div className="mx-6 my-4 flex flex-col items-center justify-between gap-4 md:flex-row">
      {isFiltersEmpty && <div>Add Expense by clicking "+ Add New"</div>}

      {!isFiltersEmpty && (
        <div className="w-full flex gap-3">
          <DropDown
            label="Year"
            value={filters.year}
            options={availableYearOptions || []}
            onChange={setYear}
          />
          <DropDown
            label="Month"
            value={filters.month}
            options={availableMonthOptions || []}
            onChange={setMonth}
          />
        </div>
      )}

      <AddExpenseButton />
    </div>
  );
};
export default Filters;

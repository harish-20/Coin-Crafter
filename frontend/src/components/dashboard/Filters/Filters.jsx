import { useDispatch, useSelector } from "react-redux";

import DropDown from "./DropDown";

import * as chartThunks from "../../../store/slices/chart/thunks";
import { chartActions } from "../../../store/slices/chart/chartSlice";

import { monthKeys } from "../../../helpers/monthKeys";
import { useEffect } from "react";

const Filters = () => {
  const filters = useSelector((state) => state.chart.filters);
  const isAvailableFilterLoading = useSelector(
    (state) => state.chart.loadingState.isAvailableFilterLoading
  );
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

  const setMonth = (month) => {
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

  console.log(selectedYear);

  const availableMonthOptions = selectedYear?.months.map((month) => ({
    label: monthKeys[month],
    value: month,
  }));

  return (
    <div className="m-4 flex gap-3">
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
  );
};
export default Filters;

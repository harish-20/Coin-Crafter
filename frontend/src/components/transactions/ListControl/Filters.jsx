import { useDispatch, useSelector } from "react-redux";

import ExpenseTypeFilters from "./ExpenseTypeFilters";
import ExpenseDropDown from "../../UI/InputElements/ExpenseDropDown";
import { expenseActions } from "../../../store/slices/expense/expenseSlice";

/**
 * available filters
 * - Category
 * - income type
 *
 */

const Filters = () => {
  const defaultCategories = useSelector(
    (state) => state.category.defaultCategories
  );
  const customCategories = useSelector(
    (state) => state.category.customCategories
  );
  const filters = useSelector((state) => state.expense.filters);

  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(expenseActions.toggleFilter({ category }));
  };

  const handleExpenseTypeChange = (expenseType) => {
    const isSelectedFilter = filters.expenseType === expenseType;
    dispatch(
      expenseActions.toggleFilter({
        expenseType: isSelectedFilter ? "" : expenseType,
      })
    );
  };

  const resetFilters = () => dispatch(expenseActions.toggleFilter({}));

  const isFilterAdded = Object.values(filters).some((filter) => filter);

  return (
    <div className="flex items-center">
      <h3 className="text-lg mt-6 mr-6">Filters :</h3>
      <ExpenseDropDown
        className={`min-w-[300px] ${filters.category ? "bg-green-900" : ""}`}
        label=""
        value={filters.category}
        onChange={handleCategoryChange}
        expenseList={[...defaultCategories, ...customCategories]}
      />
      <ExpenseTypeFilters
        expenseType={filters.expenseType}
        onChange={handleExpenseTypeChange}
      />

      {isFilterAdded && (
        <div
          className="mt-auto ml-4 mb-3 underline underline-offset-1 cursor-pointer"
          onClick={resetFilters}
        >
          Clear
        </div>
      )}
    </div>
  );
};

export default Filters;
